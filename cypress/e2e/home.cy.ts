describe("Home Iframe Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should load the iframe correctly", () => {
    cy.get("iframe").should(
      "have.attr",
      "src",
      "https://chartreuse-reflect-850386.framer.app/"
    );
  });
});
