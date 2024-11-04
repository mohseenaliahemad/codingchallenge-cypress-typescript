describe('API Success Scenario', () => {
  it('should display users 2 when the API call is successful', () => {
    cy.visit('https://reqres.in/')
    // Mock a successful GitHub API response  
    cy.intercept('GET', '/api/users/2', { 
      statusCode: 200,
      body: [
        {
          "data": {
              "id": 2,
              "email": "mohseen@reqres.in",
              "first_name": "mohsee",
              "last_name": "ali",             
          },
          "support": {
              "url": "https://reqres.in/#support-heading",
              "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
          }
      }
      ],
    }).as('getaUser')

    cy.get('#console > div.endpoints > ul > li:nth-child(2) > a').click()    
     cy.wait('@getaUser').then(inter =>{
        expect(inter.response?.body).to.have.length(1)  
        expect(inter.response?.statusCode).eq(200)
     })
    
  });
});

describe('API Failure Scenario', () => {
  it('should show an error message if the API call fails', () => {
    cy.visit('https://reqres.in/')
    
    // Mock a failed API response (403 Forbidden)
    cy.intercept('GET', '/api/users/2', {
      statusCode: 403,
      body: { message: 'API rate limit exceeded' },
    }).as('getUserFail');
   
    // Wait for the API call and check for error handling
    cy.get('#console > div.endpoints > ul > li:nth-child(2) > a').click()    
     cy.wait('@getUserFail').then(inter =>{
        expect(inter.response?.body.message).eq('API rate limit exceeded')  
        expect(inter.response?.statusCode).eq(403)
     })
  });
});

describe('API Slow Response Scenario', () => {
  it.only('should display a loading message while waiting for the API response', () => {

    cy.visit('https://reqres.in/')

    // Mock a slow response from the API
    cy.intercept('GET', '/api/users/2', { 
      statusCode: 200,
      delay:10000,
      body: [
        {
          "data": {
              "id": 2,
              "email": "mohseen@reqres.in",
              "first_name": "mohsee",
              "last_name": "ali",             
          },
          "support": {
              "url": "https://reqres.in/#support-heading",
              "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
          }
      }
      ],
    }).as('getUserSlowResponse');
  
    cy.get('#console > div.endpoints > ul > li:nth-child(2) > a').click()   
    cy.get('.spinner').should('be.visible') 
    cy.wait('@getUserSlowResponse').then(inter =>{
       expect(inter.response?.body).to.have.length(1)  
       expect(inter.response?.statusCode).eq(200)
    })    
  });
});
