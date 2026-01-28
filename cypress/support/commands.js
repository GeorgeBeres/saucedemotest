/// <reference types="cypress" />
import LoginPage from "../PageObjects/LoginPage";
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
const loginpage = new LoginPage();

import './commands'

Cypress.Commands.add('login', () => {
  cy.fixture('loginDetails.json').then((userData) => {
    cy.visit(userData.URL);
    loginpage.getUserNameInput().should('be.visible').type(userData.username);
    loginpage.getPasswordInput().should('be.visible').type(userData.password);
    loginpage.getLoginButton().should('be.visible').click();
    cy.url().should('not.include', '/login');
  });
});
