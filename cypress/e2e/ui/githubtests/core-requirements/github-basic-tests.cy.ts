import { GithubHomePage } from '../../pages/github-home-page'

describe('Basic Test Automation - Github', ()=>{
    const githubHomePage = new GithubHomePage();
    beforeEach('', ()=>{
        cy.visit('http://github.com')
    })

    it('verify The GitHub logo is visible', () =>{    
        cy.get('a[href="/"]').find('svg').should('be.visible')
    })

    //Using Page object model 
    it('Verify the "Sign up" button is functiolinkal.', ()=>{
        githubHomePage.getSignUpLink().should('be.visible').click()
        githubHomePage.getEnterYourEmailLabel().should('exist')
    })

    //Using direct cypess commands
    it.only('verify Navigation links (e.g., "Explore", "Pricing") redirect to the correct pages', ()=>{
        cy.get('a[href="/enterprise"]').first().click({force: true});
        cy.url().should('include', '/enterprise')
        cy.visit('http://github.com')
        cy.get('a[href="/pricing"]').click()
        cy.url().should('include', '/pricing')
        cy.contains('Pricing').should('be.visible')
    })
})

