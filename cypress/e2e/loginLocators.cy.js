/// <reference types="Cypress" />
const Locators = require("../fixtures/Locators.json");
//const faker = require('@faker-js/faker');

describe("login with locators test", () => {
  let email = "rale@gmail.com";
  let pass = "Test1234";

  before("", () => {
    cy.visit("/");
    cy.get(Locators.Navigation.actionButton).eq(1).click();
  });

  it("login with locators", () => {
    cy.get(Locators.Login.emailInput).type(email);
    cy.get(Locators.Login.passwordInput).type(pass);
    cy.get(Locators.Login.submitBtn).click();
  });

  it("successful logout", () => {
    cy.get(Locators.Navigation.actionButton).should("have.length", 4);
    cy.get(Locators.Navigation.actionButton).eq(3).click();
  });
});
