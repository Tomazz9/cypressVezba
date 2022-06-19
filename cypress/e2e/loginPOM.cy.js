/// <reference types="Cypress" />
import { loginPage } from "../page_objects/loginPage";

describe("login POM", () => {
  let validEmail = "rale@gmail.com";
  let invalidEmail = "rale@gmail";
  let validPass = "Test1234";

  it.only("valid login via backend", () => {
    cy.loginViaBackend();
    //cy.loginViaBackend('rale@gmail.com', 'Test1234');
    cy.visit("/create");
  });

  /*before('visit login page', () => {
        cy.loginViaBackend('rale@gmail.com', 'Test1234');
        cy.visit('/')
        //loginPage.loginBtn.click();
    })*/

  xit("valid login using POM", () => {
    /*cy.loginViaBackend('rale@gmail.com', 'Test1234');
        cy.visit('/create')*/

    //intersept objekti
    //.as = alias
    cy.intercept({
      method: "POST",
      url: "https://gallery-api.vivifyideas.com/api/auth/login",
    }).as("validLogin");

    //cy.url().should('include', '/login');
    loginPage.login(validEmail, validPass);
    cy.wait("@validLogin").then((interception) => {
      expect(interception.response.statusCode).to.exist;
      expect(interception.response.statusCode).eq(200);
    });

    //cy.url().should('notinclude', '/login');
    loginPage.logoutBtn.should("be.visible");
  });

  xit("invalid login using POM", () => {
    cy.intercept({
      method: "POST",
      url: "https://gallery-api.vivifyideas.com/api/auth/login",
    }).as("invalidLogin");

    cy.visit("/login");
    cy.url().should("include", "/login");
    loginPage.loginHeading
      .should("be.visible")
      .and("have.text", "Please login");
    loginPage.login(invalidEmail, validPass);

    cy.wait("@invalidLogin").then((interception) => {
      expect(interception.response.statusCode).to.exist;
      expect(interception.response.statusCode).eq(401);
    });

    cy.url().should("include", "/login");
    //ako su asertacije istopg tipa moze da se pise .and
    loginPage.errorMessage
      .should("be.visible")
      //a moze i ovako
      //loginpage.errorMessage.should('have.text', 'Bad Credentials')
      .and("have.text", "Bad Credentials")
      .and("have.css", "background-color", "rgb(248, 215, 218)");
  });

  xit("logout", () => {
    cy.intercept({
      method: "POST",
      url: "https://gallery-api.vivifyideas.com/api/auth/logout",
    }).as("validLogout");

    loginPage.logoutBtn.click();
    cy.wait("@validLogout").then((interception) => {
      expect(interception.response.statusCode).eq(200);
    });
  });
});
