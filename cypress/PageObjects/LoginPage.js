export default class LoginPage {

    getUserNameInput() {
        return cy.get('#user-name');
    }

    getPasswordInput() {
        return cy.get('#password');
    }

    getLoginButton() {
        return cy.get('#login-button');
    }
}