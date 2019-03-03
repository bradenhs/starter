/// <reference types="cypress"/>
/// <reference types="cypress-testing-library"/>

describe("counter", () => {
  it("should increment", () => {
    cy.visit("/")
      .getByTestId("count")
      .should("have.text", "0")
      .getByText("Increment")
      .click()
      .getByTestId("count")
      .should("have.text", "1");
  });
});
