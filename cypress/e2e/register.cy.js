/// <reference types="Cypress" />
//import { faker } from '@faker-js/faker';
//import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';

describe("register test", () => {
  let firstName = "Rale";
  let lastName = "Kole";
  let validEmail = "rale@gmail.com";
  let password = "Test1234";

  beforeEach("visit register page", () => {
    cy.visit("https://gallery-app.vivifyideas.com/register");
    cy.url().should("include", "/register");
  });

  it("register without credentials", () => {
    cy.get("button").click();
  });

  it("register with email that does not contain @ sign", () => {
    cy.get("#first-name").type(firstName);
    cy.get("#last-name").type(lastName);
    cy.get("#email").type("rastkogmail.com");
    cy.get("#password").type(password);
    cy.get("#password-confirmation").type(password);
    cy.get(".form-check-input").click();
    cy.get("button").click();
    cy.get("#email").should("not.contain", "@");
  });

  it("register with email that does not contain name of the user", () => {
    cy.get("#first-name").type(firstName);
    cy.get("#last-name").type(lastName);
    cy.get("#email").type("@gmail.com");
    cy.get("#password").type(password);
    cy.get("#password-confirmation").type(password);
    cy.get(".form-check-input").click();
    cy.get("button").click();
  });

  it("register with email that does not contain domain", () => {
    cy.get("#first-name").type(firstName);
    cy.get("#last-name").type(lastName);
    cy.get("#email").type("rale@gmail");
    cy.get("#password").type(password);
    cy.get("#password-confirmation").type(password);
    cy.get(".form-check-input").click();
    cy.get("button").click();
  });

  it("register with password that is shorter than 8 characters", () => {
    cy.get("#first-name").type(firstName);
    cy.get("#last-name").type(lastName);
    cy.get("#email").type("rale@gmail.com");
    cy.get("#password").type("Test123");
    cy.get("#password-confirmation").type("Test123");
    cy.get(".form-check-input").click();
    cy.get("button").click();
  });

  it("register with password that does not match password confirmation", () => {
    cy.get("#first-name").type(firstName);
    cy.get("#last-name").type(lastName);
    cy.get("#email").type("tralala@gmail.com");
    cy.get("#password").type(password);
    cy.get("#password-confirmation").type("Test123");
    cy.get(".form-check-input").click();
    cy.get("button").click();
    cy.get("#password").should("not.eql", "#password-confirmation");
  });

  it("register with password that does not contain numbers", () => {
    cy.get("#first-name").type(firstName);
    cy.get("#last-name").type(lastName);
    cy.get("#email").type("rastko1@gmail.com");
    cy.get("#password").type("TestTest");
    cy.get("#password-confirmation").type("TestTest");
    cy.get(".form-check-input").click();
    cy.get("button").click();
    cy.get("#password").should("not.contain", Number);
  });

  it("register with valid credentials", () => {
    cy.get("#first-name").type(firstName);
    cy.get("#last-name").type(lastName);
    cy.get("#email").type("Brale@gmail.com");
    cy.get("#password").type(password);
    cy.get("#password-confirmation").type(password);
    cy.get(".form-check-input").click();
    cy.get("button").click();
    cy.url().should("not.contain", "/register");
  });
});
