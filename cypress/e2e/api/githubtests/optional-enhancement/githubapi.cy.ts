describe('GitHub API Tests', () => {
    const username = 'octocat'; 
    it('fetches user profile', () => {
      cy.request(`https://api.github.com/users/${username}`)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('login', username);
          expect(response.body).to.have.property('id');
          expect(response.body).to.have.property('html_url');
        });
    });
  
    it('fetches user repositories', () => {
      cy.request(`https://api.github.com/users/${username}/repos`)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.be.an('array');
  
          if (response.body.length > 0) {
            expect(response.body[0]).to.have.property('name');
            expect(response.body[0]).to.have.property('html_url');
          }
        });
    });
  });