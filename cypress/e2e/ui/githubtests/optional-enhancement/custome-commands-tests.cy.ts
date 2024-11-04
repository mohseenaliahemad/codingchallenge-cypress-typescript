import { beforeEach } from "mocha"

describe('Validate login page', () =>{
    beforeEach("visit login page", ()=>{
        cy.visitLoginForm()
    })

    it("Successfull login", () =>{
        cy.login('student', 'Password123')       
        cy.url().should('include', '/logged-in-successfully')
    })

    it("validate invalid username error message", () =>{
        cy.login('incorrectUser', 'Password123')       
        cy.virifyLoginMessage('Your username is invalid!')
    })

    it("validate invalid password error message", () =>{
        cy.login('student', 'incorrectPassword')       
        cy.virifyLoginMessage('Your password is invalid!')
    })
})