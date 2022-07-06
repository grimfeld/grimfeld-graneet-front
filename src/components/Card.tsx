import React, { FC } from 'react';
import { City } from '../types/City';

const Card: FC<City> = ({ codePostal, nomCommune }) => {
  return (
    <div className='flex justify-between bg-card p-4 alert'>
      <h3 className='text-white font-bold'>{nomCommune}</h3>
      <p className='text-text font-bold'>{codePostal}</p>
    </div>
  );
};

export default Card;
