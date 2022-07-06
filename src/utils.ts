import { City } from './types/City';

const filterCities = (
  cities: City[],
  filter?: 'metropole' | 'outre-mer'
): City[] => {
  if (filter === 'outre-mer') {
    return cities.filter((city) => city.codePostal.match(/^97|^98/));
  } else {
    return cities.filter((city) => !city.codePostal.match(/^97|^98/));
  }
};

export { filterCities };
