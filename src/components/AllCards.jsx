import React from 'react';
import { SingleCard } from './SingleCard';

export const AllCards = ({ tours, filterTour }) => {
  return (
    <div className='container'>
      {tours.map((el) => {
        return (
          <SingleCard
            key={el.id}
            el={el}
            filterTour={filterTour}
          />
        );
      })}
    </div>
  );
};
