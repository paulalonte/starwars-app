describe('Characters', () => {
  it('should be able to go to characters page', () => {
    cy.visit('/');
    cy.get('[data-cy=Characters]').click();

    // assert that we should be in characters url page
    cy.url().should('include', '/characters');
    cy.get('[data-cy=header]').should('contain', 'Star Wars Characters');

    cy.wait(1500);
    cy.get('[data-cy=character-list]').should('have.length', '10');
  });

  it('should be able to navigate to different pages', () => {
    cy.visit('/');
    cy.get('[data-cy=Characters]').click();
    cy.wait(1500);
    cy.get('[data-cy=character-list]').should('have.length', '10');
    cy.get('[data-cy-page=3]').click();

    // Assert that we are on a different page now
    cy.get('[data-cy=characters-container]').contains('Boba Fett');

    cy.get('[data-cy-page-item=3]').should('have.class', 'active');
  });
});
