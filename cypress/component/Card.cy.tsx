import Card from '../../src/components/Card';
import { mount } from 'cypress/react';
import '../../src/index.css';
import { City } from '../../src/types/City';

describe('<Card> test suite', () => {
  const mockCity: City = {
    codePostal: '93800',
    codeCommune: '93031',
    nomCommune: 'Épinay-sur-Seine',
    libelleAcheminement: 'EPINAY SUR SEINE',
  };

  it('mounts', () => {
    mount(<Card {...mockCity} />);
  });

  it('renders correctly', () => {
    mount(<Card {...mockCity} />);
    cy.get('h3').contains(mockCity.nomCommune);
    cy.get('h3').should('have.class', 'text-white font-bold');
    cy.get('p').contains(mockCity.codePostal);
    cy.get('p').should('have.class', 'text-text font-bold');
    cy.get('div').should(
      'have.class',
      'flex justify-between bg-card p-4 alert'
    );
  });
});
