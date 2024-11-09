/// <reference types="cypress" />

interface HomePageState {
    scenario: string;
    url: string;
    expectedHeader: string;
    expectedButton: string;
  }
  
  describe('Homepage Tests with Data-Driven Approach', () => {
    beforeEach(() => {
      // Load the fixture data before each test
      cy.fixture('homepageStates').then((data: HomePageState[]) => {
        cy.wrap(data).as('homepageData');
      });
    });
  
    it('should test different homepage states based on fixture data', function () {
      // Iterate through each test scenario
      this.homepageData.forEach((state: HomePageState) => {
        cy.log(`Testing scenario: ${state.scenario}`);
  
        // Visit the specified URL for the current state
        cy.visit(state.url);
  
        // Assert the expected header is present
        cy.get('#hero-section-brand-heading').contains(state.expectedHeader).should('be.visible');       
      });
    });
  });
  