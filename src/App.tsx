import React, { useEffect, useState, FC, useCallback } from 'react';
import { City } from './types/City';

const Alert: FC<{ status: boolean; length: number }> = ({ status, length }) => {
  return (
    <div
      className={[
        status ? 'bg-success' : 'bg-danger',
        'p-4 text-white font-bold',
      ].join(' ')}
    >
      {status
        ? `${length} villes correspondant au texte choisi`
        : 'Aucune ville correspondant au texte choisi'}
    </div>
  );
};

const Card: FC<City> = ({ codePostal, nomCommune }) => {
  return (
    <div className='flex justify-between bg-card p-4'>
      <h3 className='text-white font-bold'>{nomCommune}</h3>
      <p className='text-text font-bold'>{codePostal}</p>
    </div>
  );
};

function App() {
  const [cities, setCities] = useState<Array<City>>([]);
  const [query, setQuery] = useState('');

  const getCities = useCallback(async () => {
    const data = await fetch(
      process.env.NODE_ENV === 'development'
        ? `http://localhost:3000/cities/${query}`
        : `https://grimfeld-graneet-test.herokuapp.com/cities/${query}`
    );
    const cities = await data.json();
    return cities;
  }, [query]);

  useEffect(() => {
    getCities().then((cities) => setCities(cities));
  }, [getCities, query]);

  return (
    <div className='bg-global p-8'>
      <div className='bg-blocks mb-8 rounded-xl p-4 flex items-center gap-8'>
        <p className='text-3xl font-bold'>Je recherche...</p>
        <input
          type='text'
          placeholder='...une ville, un code postal'
          className='py-2 px-4 rounded-lg bg-global flex-grow placeholder-text-light text-3xl font-bold'
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className='flex gap-8'>
        <div className='w-full lg:w-1/2 bg-blocks rounded-xl p-8 flex flex-col gap-8'>
          <h2 className='text-center font-bold text-3xl'>
            Villes de métropoles
          </h2>
          <Alert
            status={
              cities.filter((city) => !city.codePostal.match(/^97|^98/))
                .length > 0
            }
            length={
              cities.filter((city) => !city.codePostal.match(/^97|^98/)).length
            }
          />
          <div className='grid grid-cols-2 gap-8'>
            {cities
              .filter((city) => !city.codePostal.match(/^97|^98/))
              .map((city) => (
                <Card key={city.libelleAcheminement} {...city} />
              ))}
          </div>
        </div>
        <div className='w-full lg:w-1/2 bg-blocks rounded-xl p-8 flex flex-col gap-8'>
          <h2 className='text-center font-bold text-3xl'>Villes d'outre-mer</h2>
          <Alert
            status={
              cities.filter((city) => city.codePostal.match(/^97|^98/)).length >
              0
            }
            length={
              cities.filter((city) => city.codePostal.match(/^97|^98/)).length
            }
          />
          <div className='grid grid-cols-2 gap-8'>
            {cities
              .filter((city) => city.codePostal.match(/^97|^98/))
              .map((city) => (
                <Card key={city.libelleAcheminement} {...city} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
