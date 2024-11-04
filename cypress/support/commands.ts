/// <reference types="cypress" />
// ***********************************************
import '@testing-library/cypress/add-commands'
import cypress from 'cypress'
import { addCompareSnapshotCommand } from 'cypress-visual-regression/dist/command'
addCompareSnapshotCommand()

Cypress.Commands.add('visitLoginForm', ()=>{
  cy.visit('https://practicetestautomation.com/practice-test-login/')
})

Cypress.Commands.add('fillLoginForm', (username: string, password: string) => { 
  cy.get('input[name="username"]').type(username);
  cy.get('input[name="password"]').type(password);
});   

Cypress.Commands.add('submitLoginForm', ()=>{
  cy.get('button[id="submit"]').click()
})

Cypress.Commands.add('login', (username: string, password: string) =>{
  cy.visitLoginForm()
  cy.fillLoginForm(username, password)
  cy.submitLoginForm()
})

Cypress.Commands.add('virifyLoginMessage', (expectedMessage:string) =>{
  cy.get('div[id="error"]')
  .should('be.visible')
  .and('contain', expectedMessage);
})

declare global {
  namespace Cypress {
    interface Chainable {
        visitLoginForm():Chainable<void>
        fillLoginForm(email: string, password: string): Chainable<void>   
        submitLoginForm():Chainable<void> 
        login(email: string, password: string):Chainable<void>
        virifyLoginMessage(expectedMessage:string):Chainable<void>
    }
  }
}