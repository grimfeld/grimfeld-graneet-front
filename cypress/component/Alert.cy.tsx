import Alert from '../../src/components/Alert';
import '../../src/index.css';
import { mount } from 'cypress/react';

describe('<Alert> test suite', () => {
  it('mounts', () => {
    mount(<Alert />);
  });

  it('renders with default status', () => {
    mount(<Alert />);
    cy.get('p').contains('Aucune ville correspondant au texte choisi');
    cy.get('div').should('have.class', 'bg-danger');
  });

  it('renders with success parameters', () => {
    mount(<Alert status={true} length={1} />);
    cy.get('p').contains('1 ville correspondant au texte choisi');
    cy.get('div').should('have.class', 'bg-success');
  });

  it('renders with success parameters', () => {
    mount(<Alert status={true} length={15} />);
    cy.get('p').contains('15 villes correspondant au texte choisi');
    cy.get('div').should('have.class', 'bg-success');
  });

  it('renders with error parameters', () => {
    mount(<Alert status={false} length={0} />);
    cy.get('p').contains('Aucune ville correspondant au texte choisi');
    cy.get('div').should('have.class', 'bg-danger');
  });
});
