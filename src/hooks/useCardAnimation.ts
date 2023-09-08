import { useEffect, useRef } from 'react';

import { gsap } from 'gsap';

const SPREAD_DURATION = 0.3;
const CARD_SCALE = 0.9;
const CARD_SPREAD_X = -60;
const CARD_SPREAD_Y = -20;
const CARD_HOVER_SCALE = 0.93;
const CARD_HOVER_SHADOW = '0px 0px 20px rgba(0,0,0,0.2)';
const CARD_MIDDLE_ZINDEX_OFFSET = 1;
const CARD_DEFAULT_X = 0;
const CARD_DEFAULT_Y = 0;

type EventHandlerObject = {
  element: HTMLElement | null;
  eventType: string;
  handler: (_e: Event) => void;
};

const useCardAnimation = (cardRef: React.RefObject<HTMLUListElement>) => {
  const focusedCardRef = useRef<gsap.TweenTarget | null>(null);

  useEffect(() => {
    if (!cardRef.current) {
      return;
    }

    const cards = cardRef.current.children;
    focusedCardRef.current = cards[0];

    initializeCards(cards);

    const cardEventHandlers = createCardEventHandlers(cards, focusedCardRef);
    const spreadEventHandlers = createSpreadEventHandlers(cardRef, cards);

    [...cardEventHandlers, ...spreadEventHandlers].forEach(
      ({ element, eventType, handler }) => {
        element?.addEventListener(eventType, handler);
      }
    );

    return () => {
      [...cardEventHandlers, ...spreadEventHandlers].forEach(
        ({ element, eventType, handler }) => {
          element?.removeEventListener(eventType, handler);
        }
      );
    };
  }, [cardRef]);
};
const initializeCards = (cards: HTMLCollection) => {
  gsap.set(cards, {
    x: CARD_DEFAULT_X,
    y: CARD_DEFAULT_Y,
    zIndex: i => cards.length - i,
    scale: CARD_SCALE
  });
};

const createSpreadEventHandlers = (
  cardRef: React.RefObject<HTMLUListElement>,
  cards: HTMLCollection
): EventHandlerObject[] => {
  const handlers: EventHandlerObject[] = [];
  const handleSpreadEnter = () => {
    gsap.to(cards, {
      x: i => i * CARD_SPREAD_X,
      y: i => i * CARD_SPREAD_Y,
      duration: SPREAD_DURATION
    });
    gsap.to(cardRef.current, {
      x: (cards.length / 2) * 40,
      duration: SPREAD_DURATION
    });
  };

  const handleSpreadLeave = () => {
    gsap.to(cards, {
      x: CARD_DEFAULT_X,
      y: CARD_DEFAULT_Y,
      duration: SPREAD_DURATION
    });
    gsap.to(cardRef.current, {
      x: CARD_DEFAULT_X,
      y: CARD_DEFAULT_Y,
      duration: SPREAD_DURATION
    });
  };

  handlers.push(
    {
      element: cardRef.current,
      eventType: 'mouseenter',
      handler: handleSpreadEnter
    },
    {
      element: cardRef.current,
      eventType: 'mouseleave',
      handler: handleSpreadLeave
    }
  );

  return handlers;
};

const createCardEventHandlers = (
  cards: HTMLCollection,
  focusedCardRef: React.MutableRefObject<gsap.TweenTarget | null>
): EventHandlerObject[] => {
  const handlers: EventHandlerObject[] = [];

  for (const card of cards) {
    const imgElement = card.querySelector('img');
    if (!imgElement) {
      continue;
    }

    const enterEventHandler = (e: Event) => {
      const parentLi = getParentLi(e);
      if (parentLi && parentLi !== focusedCardRef.current) {
        gsap.to(parentLi, {
          scale: CARD_HOVER_SCALE,
          boxShadow: CARD_HOVER_SHADOW,
          duration: SPREAD_DURATION
        });
      }
    };

    const leaveEventHandler = (e: Event) => {
      const parentLi = getParentLi(e);
      if (parentLi && parentLi !== focusedCardRef.current) {
        gsap.to(parentLi, {
          scale: CARD_SCALE,
          boxShadow: 'none',
          duration: SPREAD_DURATION
        });
      }
    };

    const clickListener = (e: Event) => {
      const clickedCard = getParentLi(e);
      if (!clickedCard) {
        return;
      }
      handleCardClick(cards, clickedCard, focusedCardRef);
    };

    handlers.push(
      {
        element: imgElement,
        eventType: 'mouseenter',
        handler: enterEventHandler
      },
      {
        element: imgElement,
        eventType: 'mouseleave',
        handler: leaveEventHandler
      },
      {
        element: imgElement,
        eventType: 'click',
        handler: clickListener
      }
    );
  }

  return handlers;
};

const getParentLi = (e: Event): HTMLLIElement | null => {
  const target = e.target as HTMLImageElement;
  return target.closest('li');
};

const handleCardClick = (
  cards: HTMLCollection,
  clickedCard: HTMLElement,
  focusedCardRef: React.MutableRefObject<gsap.TweenTarget | null>
) => {
  gsap.to(cards, {
    x: CARD_DEFAULT_X,
    y: CARD_DEFAULT_Y,
    duration: SPREAD_DURATION
  });
  gsap.set(clickedCard, { zIndex: cards.length, scale: CARD_SCALE });

  let zIndex = 0;
  for (const otherCard of cards) {
    if (otherCard !== clickedCard) {
      gsap.set(otherCard, { zIndex: zIndex++ });
    }
  }

  const middleIndex = Math.floor(cards.length / 2);
  if (cards[middleIndex] !== clickedCard) {
    gsap.set(cards[middleIndex], {
      zIndex: Math.floor(cards.length / 2) + CARD_MIDDLE_ZINDEX_OFFSET
    });
  }

  focusedCardRef.current = clickedCard;
};
export default useCardAnimation;
