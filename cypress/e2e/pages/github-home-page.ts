export class GithubHomePage{
    getHeaderMenu = () => ({
        getItem: (index: number) =>
            cy.findByRole('navigation', {name: 'Global'})
        .findAllByRole('link')
        .eq(index),
    })
    //Using Testing library for cypress
    getSignUpLink = () => cy.findByRole('link', {name:'Sign up'})
    getEnterYourEmailLabel = () =>  cy.findByLabelText('Enter your email*')
}