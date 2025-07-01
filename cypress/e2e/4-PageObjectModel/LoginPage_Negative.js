class LoginPage {
  // Visit the homepage
  visitHomePage() {
    cy.visit('https://automationteststore.com/');
    return this;
  }

  // Click on login link in navigation
  clickLoginLink() {
    cy.get('#customer_menu_top > li > a').click();
    return this;
  }

  // Enter username in login form
  enterUsername(username) {
    cy.get('input[name="loginname"]').clear().type(username);
    return this;
  }

  // Enter password in login form
  enterPassword(password) {
    cy.get('input[name="password"]').clear().type(password);
    return this;
  }

  // Click the login button
  clickLoginButton() {
    cy.get('#loginFrm > fieldset > .btn').click();
    return this;
  }

  //  || Negative Case
  assertNegativefulLogin(username) {
    cy.get('.alert.alert-error.alert-danger') // Div class selector
    .should('exist')
    .and('contain.text', 'Error: Incorrect login or password provided.'); //Menggunakan validasi text yang muncul
    return this;

  }
}

export default LoginPage;