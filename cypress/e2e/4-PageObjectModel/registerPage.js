class RegisterPage {
  visitHomePage() {
    cy.visit('https://automationteststore.com/');
    // Assertion Head
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
    // Assertion Title Text | Memastikan title web
    cy.title().should('include', 'A place to practice your automation skills!');
    // Assertion URL WEB
    cy.url().should('include', 'automationteststore');
  }
  // Get Elemen "Login Or Registrasi" Button and Click dengan css selector
  goToRegisterPage() {
    cy.get('#customer_menu_top > li > a').click();
    cy.get('#accountFrm > fieldset > .btn').click();
  }
  // Lengkapi selector dari "YOUR PERSONAL DETAILS"
  fillPersonalDetails(firstname, lastname, email, telephone) {
    cy.get('input[name="firstname"]').type(firstname);
    cy.get('input[name="lastname"]').type(lastname);
    cy.get('#AccountFrm_email').type(email);
    cy.get('input[name="telephone"]').type(telephone);
  }
  // Lengkapi selector dari "YOUR ADDRESS"
  // Input option dropdown | Harus di run duluan karna agar field Region / State nya mendeteksi wilayah 
  fillAddressDetails(address1, city, country, state, postcode) {
    cy.get('#AccountFrm_country_id').select(country);
    cy.get('input[name="address_1"]').type(address1);
    cy.get('input[name="city"]').type(city);
    cy.wait(1000);
    cy.get('#AccountFrm_zone_id').select(state);
    cy.get('input[name="postcode"]').type(postcode);
  }
  // Lengkapi selector dari "LOGIN DETAILS"
  fillLoginDetails(username, password) {
    cy.get('input[name="loginname"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get('input[name="confirm"]').type(password);
  }
  // Lengkapi selector dari "NEWSLATTER"
  acceptNewsletterAndPolicy() {
    cy.get('input[type="radio"][value="1"]').check(); // Newsletter Yes
    cy.get('input[type="checkbox"]').check(); // Policy Agree
  }
  // Sumbit opsi
  submitRegistration() {
    cy.get('.col-md-2 > .btn').click(); // Submit form
  }
  // // Assertion setelah submit button dan muncul halaman baru
  assertSuccess() {
    cy.get('h1').should('contain.text', 'Your Account Has Been Created!');
  }
}

export default new RegisterPage();
