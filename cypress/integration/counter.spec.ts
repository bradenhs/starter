describe("Counter", () => {
  it("should increment properly", () => {
    cy.visit("/");
    cy.getByText("Increment").click();
    cy.getByTestId("counter.value").should("have.text", "1");
  });

  it("should decrement properly", () => {
    cy.visit("/");
    cy.getByText("Decrement").click();
    cy.getByTestId("counter.value").should("have.text", "-1");
  });
});
