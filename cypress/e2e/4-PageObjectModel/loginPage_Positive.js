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

  // Verify successful login by checking welcome message || Positive Case
  assertSuccessfulLogin(username) {
    cy.get('#customer_menu_top > :nth-child(1) > .top > .menu_text')
      .should('contain', `Welcome back ${username}`);
    return this;

  }
}

export default LoginPage;