class LoginPage {
  get loginBtn() {
    return cy.get(".nav-link").eq(1);
  }

  get emailInput() {
    return cy.get("#email");
  }

  get passwrodInput() {
    return cy.get("#password");
  }

  get submitBtn() {
    return cy.get("button");
  }

  get logoutBtn() {
    return cy.get(".nav-link").eq(3);
  }

  get loginHeading() {
    return cy.get("h1");
  }

  get errorMessage() {
    return cy.get('p[class="alert alert-danger"]');
  }

  login(email, password) {
    this.emailInput.type(email);
    this.passwrodInput.type(password);
    this.submitBtn.click();
  }
}

export const loginPage = new LoginPage();
