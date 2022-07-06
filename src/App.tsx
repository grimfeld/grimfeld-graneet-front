import React, { useEffect, useState, FC, useCallback } from 'react';
import { City } from './types/City';
import Alert from './components/Alert';
import Card from './components/Card';
import { filterCities } from './utils';

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
    <div className='p-8 bg-global'>
      <div className='flex items-center gap-8 p-4 mb-8 bg-blocks rounded-xl'>
        <p className='text-3xl font-bold'>Je recherche...</p>
        <input
          type='text'
          placeholder='...une ville, un code postal'
          className='flex-grow px-4 py-2 text-3xl font-bold rounded-lg bg-global placeholder-text-light'
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className='flex flex-col gap-8 lg:flex-row'>
        <div className='flex flex-col w-full gap-8 p-8 lg:w-1/2 bg-blocks rounded-xl'>
          <h2 className='text-3xl font-bold text-center'>
            Villes de métropoles
          </h2>
          <Alert
            status={filterCities(cities).length > 0}
            length={filterCities(cities).length}
          />
          <div className='grid grid-cols-2 gap-8'>
            {filterCities(cities).map((city) => (
              <Card key={city.libelleAcheminement} {...city} />
            ))}
          </div>
        </div>
        <div className='flex flex-col w-full gap-8 p-8 lg:w-1/2 bg-blocks rounded-xl'>
          <h2 className='text-3xl font-bold text-center'>Villes d'outre-mer</h2>
          <Alert
            status={filterCities(cities, 'outre-mer').length > 0}
            length={filterCities(cities, 'outre-mer').length}
          />
          <div className='grid grid-cols-2 gap-8'>
            {filterCities(cities, 'outre-mer').map((city) => (
              <Card key={city.libelleAcheminement} {...city} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
