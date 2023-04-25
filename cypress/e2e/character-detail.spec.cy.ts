describe('Character Detail', () => {
  it('should be able to go to character details page', () => {
    cy.visit('/');
    cy.get('[data-cy=Characters]').click();

    // assert that we should be in characters url page
    cy.url().should('include', '/characters');
    cy.get('[data-cy=header]').should('contain', 'Star Wars Characters');
    cy.get('[data-cy=character-list]').eq(0).click();

    cy.wait(2000);
    // assert that the heading text is now the name of the character clicked
    cy.get('[data-cy=header]').should('contain', 'Luke Skywalker');

    // assert character details just to list some few...
    cy.get('[data-cy-detail=gender]').should('contain', 'Male');
    cy.get('[data-cy-detail=eye_color]').should('contain', 'Blue');
    cy.get('[data-cy-detail=height]').should('contain', '172');
  });

  it('should be able to go to back to characters page', () => {
    cy.visit('/');
    cy.get('[data-cy=Characters]').click();

    // assert that we should be in characters url page
    cy.url().should('include', '/characters');
    cy.get('[data-cy=header]').should('contain', 'Star Wars Characters');
    cy.get('[data-cy=character-list]').eq(0).click();

    cy.wait(2000);
    // assert that the heading text is now the name of the character clicked
    cy.get('[data-cy=header]').should('contain', 'Luke Skywalker');

    cy.get('[data-cy=back]').click();

    cy.wait(1500);
    cy.url().should('include', '/characters');
    cy.get('[data-cy=header]').should('contain', 'Star Wars Characters');
  });
});
