import { useEffect } from 'react';

import { gsap } from 'gsap';

const useCardAnimation = (cardRef: React.RefObject<HTMLUListElement>) => {
  useEffect(() => {
    if (!cardRef.current) {
      return;
    }

    const cards = cardRef.current.children;

    gsap.set(cards, {
      x: i => i * -60,
      y: i => i * -20,
      zIndex: i => cards.length - i,
      scale: 0.9
    });

    // 첫 로드 시 첫번째 카드로 초기화
    let focusedCard: gsap.TweenTarget = cards[0];

    for (const card of cards) {
      const imgElement = card.querySelector('img');
      imgElement?.addEventListener('mouseenter', e => {
        const target = e.target as HTMLImageElement;
        const parentLi = target.closest('li');
        if (parentLi && parentLi !== focusedCard) {
          gsap.to(parentLi, {
            scale: 0.93,
            boxShadow: '0px 0px 20px rgba(0,0,0,0.2)',
            duration: 0.3
          });
        }
      });

      imgElement?.addEventListener('mouseleave', e => {
        const target = e.target as HTMLImageElement;
        const parentLi = target.closest('li');
        if (parentLi && parentLi !== focusedCard) {
          gsap.to(parentLi, {
            scale: 0.9,
            boxShadow: 'none',
            duration: 0.3
          });
        }
      });

      imgElement?.addEventListener('click', e => {
        const target = e.target as HTMLImageElement;
        const clickedCard = target.closest('li');
        if (!clickedCard) {
          return;
        }

        gsap.set(clickedCard, {
          zIndex: cards.length,
          scale: 0.9
        });

        let zIndex = 0;
        for (const otherCard of cards) {
          if (otherCard !== clickedCard) {
            gsap.set(otherCard, {
              zIndex: zIndex++
            });
          }
        }

        // 중간 요소의 z-index를 중간 값으로 설정
        const middleIndex = Math.floor(cards.length / 2);
        if (cards[middleIndex] !== clickedCard) {
          gsap.set(cards[middleIndex], {
            zIndex: Math.floor(cards.length / 2) + 1
          });
        }

        focusedCard = clickedCard; // 현재 포커스된 카드 업데이트
      });
    }
  }, [cardRef]);
};

export default useCardAnimation;
