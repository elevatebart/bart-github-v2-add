describe("Failing spec", () => {
  it("fails", () => {
    cy.visit('https://example.cypress.io')
    // throw Error("arbitrary error");
  });
});
