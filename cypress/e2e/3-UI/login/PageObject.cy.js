import LoginPage from '../../4-PageObjectModel/loginPage_Positive.js';

describe('Login Success | Positive Test Case', () => {
    const loginPage = new LoginPage();

    it('should login successfully with valid credentials', () => {
        // Visit homepage
        loginPage.visitHomePage();

        // Assertions
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.title().should('include', 'A place to practice your automation skills!');
        cy.url().should('include', 'automationteststore');

        // Perform login
        loginPage.clickLoginLink();
        loginPage.enterUsername('reza123');
        loginPage.enterPassword('Dodol1997');
        loginPage.clickLoginButton();

        // Assert successful login
        loginPage.assertSuccessfulLogin('Reza');

        // Screenshot for documentation
        cy.screenshot('screenshot/Positive-Case-TrueAccount');
    });
});