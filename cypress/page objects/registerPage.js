class RegisterPage {
  get registerBtn() {
    return cy.get(".nav-link").eq(2);
  }

  get firstName() {
    return cy.get("#first-name");
  }

  get lastName() {
    return cy.get("#last-name");
  }

  get email() {
    return cy.get("#email");
  }

  get password() {
    return cy.get("#password");
  }

  get passwordConfirm() {
    return cy.get("#password-confirmation");
  }

  get formCheckInput() {
    return cy.get(".form-check-input");
  }

  get submitBtn() {
    return cy.get("button");
  }

  get errorMesage() {
    return cy.get('p[class="alert alert-danger"]');
  }

  register(firstName, lastName, email, password) {
    this.firstName.type(firstName);
    this.lastName.type(lastName);
    this.email.type(email);
    this.password.type(password);
    this.passwordConfirm.type(password);
    this.formCheckInput.check();
    this.submitBtn.click();
  }

  noCheckBtn(firstName, lastName, email, password) {
    this.firstName.type(firstName);
    this.lastName.type(lastName);
    this.email.type(email);
    this.password.type(password);
    this.passwordConfirm.type(password);
    this.submitBtn.click();
  }
}

export const registerPage = new RegisterPage();
