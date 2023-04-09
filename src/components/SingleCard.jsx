import React, { useState } from 'react';


export const SingleCard = ({ el, filterTour }) => {
    
  const { name, info, image } = el;
  const [btn, setBtn] = useState(false)

  

  return (
    <div className='card-item'>
      <img
        src={image}
        alt=''
      />
      <div className='text'>
        <h2>{name}</h2>
        <p>{btn ? info : `${info.substring(0,100)}...`}</p>
        <button className='read-more' onClick={() => setBtn((prev) => !prev)}>{btn ? 'show less': 'show more'}</button>
        <button className='not' onClick={() => filterTour(name)}>Not interested</button>
      </div>
    </div>
  );
};
