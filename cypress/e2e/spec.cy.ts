describe('Photo Gallery integration tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('check link to the full photo page', () => {
    cy.get('a[href="/1"]').click();
    cy.location('pathname').should('be.equals', '/1');
  });

  it('check go to home link work', () => {
    cy.get('a[href="/1"]').click();
    cy.location('pathname').should('be.equals', '/1');
    cy.contains('Go to home').click();
    cy.location('pathname').should('be.equals', '/');
  });

  it('check photo filtration logic', () => {
    cy.get('input[type="text"]').type('acc');
    cy.location('search').should('be.equals', '?title=acc');
    cy.get('[data-cy="PhotoCard_container"]')
      .find('.MuiGrid-item')
      .should('have.length', 2);
  });
});
