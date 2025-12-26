import "cypress-iframe";

// Commands
Cypress.Commands.add("getIframe", (iframeSelector: string) => {
  return cy
    .get(iframeSelector)
    .its("0.contentDocument.body")
    .should("not.be.empty")
    .then(cy.wrap);
});

// Types
declare global {
  namespace Cypress {
    interface Chainable {
      getIframe(iframeSelector: string): Chainable<any>;
    }
  }
}
