describe('intentionally flaky spec', () => {
  it('fails 33%', () => {
        // throw Error("arbitrary error");
    cy.visit('https://example.cypress.io')

    // if (Math.random() < 0.5) {
    //   cy.get('.thing').should('be.visible')
    // }
  })
})