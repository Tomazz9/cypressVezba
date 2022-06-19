/// <reference types="Cypress" />

describe("login test", () => {
  it("visit gallery app and click login button", () => {
    cy.visit("/");
    cy.url().should("contains", "gallery-app");
    cy.get(".nav-link").eq(1).click();
    // cy.get('a[href="/login"]').click();
    cy.url().should("contains", "/login");
  });

  it("login without credential", () => {
    cy.get("button").click();
    cy.url().should("include", "/login");
  });

  it("login without email", () => {
    cy.get("#password").type("Test1234");
    cy.get("button").click();
    cy.url().should("include", "/login");
  });

  it("login without password", () => {
    cy.get("#email").type("rale@gmail.com");
    cy.get("button").click();
    cy.url().should("include", "/login");
  });

  it('login with invalid email / "@" missing', () => {
    cy.reload();
    cy.get("#email").type("rastko.kosticgmail.com");
    cy.get("#password").type("Test1234");
    cy.get("button").click();
    cy.url().should("include", "/login");
  });

  it("login with password that doesn't contain number", () => {
    cy.reload();
    cy.get("#email").type("rale@gmail.com");
    cy.get("#password").type("Test");
    cy.get("button").click;
    cy.url().should("include", "/login");
  });

  xit("login with valid credentials", () => {
    cy.get("#email").type("rale@gmail.com");
    cy.get("#password").type("Test1234");
    cy.get("button").click();
    cy.url().should("not.contain", "/login");
  });

  xit("successful logout", () => {
    cy.get(".nav-link").should("have.length", 4);
    cy.get(".nav-link").eq(3).click();
  });
});
