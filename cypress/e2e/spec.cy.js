describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io');
    cy.get('ul.home-list h1').click();
  })
})