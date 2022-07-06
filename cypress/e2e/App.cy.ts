describe('App test suite', () => {
  it('should display input field', () => {
    cy.visit('/');
    cy.get('input').should('be.visible');
  });

  it('should find Epinay sur Seine from postal code', () => {
    cy.visit('/');
    cy.get('input').type('93800');
    cy.get('div').contains('Épinay-sur-Seine');
  });

  it('should find 93800 from city name', () => {
    cy.visit('/');
    cy.get('input').type('Épinay-sur-Seine');
    cy.get('div').contains('93800');
  });
});
