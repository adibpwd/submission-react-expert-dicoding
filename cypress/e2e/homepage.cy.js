/**
 * - HomePage spec
 *   - should display form all input correctly
 *   - should display list correctly
 *   - should display create form correctly
 */

describe('HomePage spec', () => {
  beforeEach(() => {
      cy.visit('http://localhost:5173/login');
      cy.get('input[placeholder="email"]').type('adibtambak8@gmail.com');
      cy.get('input[placeholder="password"]').type('@Password1');
      cy.get('button').contains(/^Login$/).click();
  });

  it('should display form all input correctly', () => {
    cy.get('input[placeholder="Title"]').should('be.visible');
    cy.get('textarea[placeholder="Body"]').should('be.visible');
    cy.get('input[placeholder="Category"]').should('be.visible');
    cy.get('button').contains(/^Create$/).should('be.visible');
  });
  it('should display list correctly', () => {
    cy.get('.thread-card').should('have.class', 'thread-card');
  });
  it('should display create form correctly', () => {
    cy.get('input[placeholder="Title"]').type('Test Input 1');
    cy.get('textarea[placeholder="Body"]').type('Test Input 1');
    cy.get('input[placeholder="Category"]').type('Test Input 1');
    cy.get('button').contains(/^Create$/).click();
  });
});
