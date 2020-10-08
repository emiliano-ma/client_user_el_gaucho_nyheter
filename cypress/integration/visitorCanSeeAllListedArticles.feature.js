describe("Visitor can see articles", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/articles",
      response: "fixture:articles_index.json",
    });
    cy.visit("/");
  });
  it("visitor can see page header", () => {
    cy.get("#header").should("contain", "El Gaucho Nyheter");
  });
  it("shows first article ", () => {
    cy.get("#article-1").within(() => {
      cy.contains("Manchester City loves e-scooters");
    });
  });
  it("shows second article", () => {
    cy.get("#article-2").within(() => {
      cy.contains("Kista is on fire");
    });
  });
});
