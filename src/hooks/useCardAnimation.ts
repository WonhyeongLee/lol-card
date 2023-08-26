import { useEffect, useRef } from 'react';

import { gsap } from 'gsap';

type EventListenerObject = {
  element: HTMLElement;
  eventType: string;
  listener: (_e?: Event) => void;
};

const useCardAnimation = (cardRef: React.RefObject<HTMLUListElement>) => {
  const focusedCardRef = useRef<gsap.TweenTarget | null>(null);
  const eventListenersRef = useRef<EventListenerObject[]>([]);

  useEffect(() => {
    if (!cardRef.current) {
      return;
    }

    const cards = cardRef.current.children;
    focusedCardRef.current = cards[0];

    initializeCards(cards);

    eventListenersRef.current.forEach(({ element, eventType, listener }) => {
      element.removeEventListener(eventType, listener);
    });
    eventListenersRef.current = [];

    setupSpreadEvents(cardRef, cards, eventListenersRef);
    setupCardsEvents(cards, focusedCardRef, eventListenersRef);

    // 클린업 함수에서 이벤트 리스너 제거
    return () => {
      eventListenersRef.current.forEach(({ element, eventType, listener }) => {
        element.removeEventListener(eventType, listener);
      });
    };
  }, [cardRef]);
};
const initializeCards = (cards: HTMLCollection) => {
  gsap.set(cards, {
    x: 0,
    y: 0,
    zIndex: i => cards.length - i,
    scale: 0.9
  });
};

const setupSpreadEvents = (
  cardRef: React.RefObject<HTMLUListElement>,
  cards: HTMLCollection,
  eventListenersRef: React.MutableRefObject<EventListenerObject[]>
) => {
  const handleSpreadEnter = () => {
    gsap.to(cards, {
      x: i => i * -60,
      y: i => i * -20,
      duration: 0.3
    });
    gsap.to(cardRef.current, {
      x: (cards.length / 2) * 40,
      duration: 0.3
    });
  };

  const handleSpreadLeave = () => {
    gsap.to(cards, { x: 0, y: 0, duration: 0.3 });
    gsap.to(cardRef.current, { x: 0, y: 0, duration: 0.3 });
  };

  if (cardRef.current) {
    cardRef.current.addEventListener('mouseenter', handleSpreadEnter);
    cardRef.current.addEventListener('mouseleave', handleSpreadLeave);

    eventListenersRef.current.push(
      {
        element: cardRef.current,
        eventType: 'mouseenter',
        listener: handleSpreadEnter
      },
      {
        element: cardRef.current,
        eventType: 'mouseleave',
        listener: handleSpreadLeave
      }
    );
  }
};

const setupCardsEvents = (
  cards: HTMLCollection,
  focusedCardRef: React.MutableRefObject<gsap.TweenTarget | null>,
  eventListenersRef: React.MutableRefObject<EventListenerObject[]>
) => {
  for (const card of cards) {
    const imgElement = card.querySelector('img');
    if (!imgElement) {
      continue;
    }

    const enterEventHandler = (e?: Event) => {
      if (!e) {
        return;
      }
      const parentLi = getParentLi(e);
      if (parentLi && parentLi !== focusedCardRef.current) {
        gsap.to(parentLi, {
          scale: 0.93,
          boxShadow: '0px 0px 20px rgba(0,0,0,0.2)',
          duration: 0.3
        });
      }
    };

    const leaveEventHandler = (e?: Event) => {
      if (!e) {
        return;
      }
      const parentLi = getParentLi(e);
      if (parentLi && parentLi !== focusedCardRef.current) {
        gsap.to(parentLi, {
          scale: 0.9,
          boxShadow: 'none',
          duration: 0.3
        });
      }
    };

    const clickListener = (e?: Event) => {
      if (!e) {
        return;
      }
      const clickedCard = getParentLi(e);
      if (!clickedCard) {
        return;
      }
      handleCardClick(cards, clickedCard, focusedCardRef);
    };

    imgElement.addEventListener('mouseenter', enterEventHandler);
    imgElement.addEventListener('mouseleave', leaveEventHandler);
    imgElement.addEventListener('click', clickListener);

    eventListenersRef.current.push(
      {
        element: imgElement,
        eventType: 'mouseenter',
        listener: enterEventHandler
      },
      {
        element: imgElement,
        eventType: 'mouseleave',
        listener: leaveEventHandler
      },
      { element: imgElement, eventType: 'click', listener: clickListener }
    );
  }
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
  gsap.to(cards, { x: 0, y: 0, duration: 0.3 });
  gsap.set(clickedCard, { zIndex: cards.length, scale: 0.9 });

  let zIndex = 0;
  for (const otherCard of cards) {
    if (otherCard !== clickedCard) {
      gsap.set(otherCard, { zIndex: zIndex++ });
    }
  }

  const middleIndex = Math.floor(cards.length / 2);
  if (cards[middleIndex] !== clickedCard) {
    gsap.set(cards[middleIndex], { zIndex: Math.floor(cards.length / 2) + 1 });
  }

  focusedCardRef.current = clickedCard;
};

export default useCardAnimation;
