import { filterCities } from './utils';

describe('Utility functions test suite', () => {
  describe('Filtering function test suite', () => {
    const mockCities = [
      {
        codePostal: '93800',
        codeCommune: '93031',
        nomCommune: 'Épinay-sur-Seine',
        libelleAcheminement: 'EPINAY SUR SEINE',
      },
      {
        codePostal: '97200',
        codeCommune: '97209',
        nomCommune: 'Fort-de-France',
        libelleAcheminement: 'FORT DE FRANCE',
      },
    ];

    it('should filter correctly with default parameters', () => {
      const cities = filterCities(mockCities);
      expect(cities).toHaveLength(1);
      expect(cities).toEqual([
        {
          codePostal: '93800',
          codeCommune: '93031',
          nomCommune: 'Épinay-sur-Seine',
          libelleAcheminement: 'EPINAY SUR SEINE',
        },
      ]);
    });

    it('should filter correctly with metropole parameter', () => {
      const cities = filterCities(mockCities, 'metropole');
      expect(cities).toHaveLength(1);
      expect(cities).toEqual([
        {
          codePostal: '93800',
          codeCommune: '93031',
          nomCommune: 'Épinay-sur-Seine',
          libelleAcheminement: 'EPINAY SUR SEINE',
        },
      ]);
    });

    it('should filter correctly with outre-mer parameter', () => {
      const cities = filterCities(mockCities, 'outre-mer');
      expect(cities).toHaveLength(1);
      expect(cities).toEqual([
        {
          codePostal: '97200',
          codeCommune: '97209',
          nomCommune: 'Fort-de-France',
          libelleAcheminement: 'FORT DE FRANCE',
        },
      ]);
    });
  });
});
