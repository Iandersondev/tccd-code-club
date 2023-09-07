'use client';
import React from 'react';
import { CardData } from './CardData';

const HomePageCardQuotes = (cards: any) => {
  return (
    <div className='  justify-evenly flex w-full '>
      {CardData.map(
        (card: { personName: string; quote: string }, index: React.Key) => (
          <div
            key={index}
            className='card w-96 glass bg-primary text-primary-content carousel-item'
          >
            <div className='card-body'>
              <h2 className='card-title'>{card.personName}</h2>
              <p>{card.quote}</p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default HomePageCardQuotes;
