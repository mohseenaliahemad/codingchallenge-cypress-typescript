describe('Homepage Visual Regression Tests', () => {
    beforeEach(() => {
      cy.visit('http://github.com'); 
    }); 
  
    it('should match the header section', () => {
        cy.get('.HeaderMktg')
        .compareSnapshot('header-section'); 
    });
  
    it('should match the hero section', () => {
        cy.get('#hero-section-brand-heading')
        .compareSnapshot('hero-section'); 
    });
    
    it('should match the Stack-module section', () => {
        cy.get('.Primer_Brand__Stack-module__Stack___tASKe > .Primer_Brand__Text-module__Text--300___TBQTB')
        .compareSnapshot('stack-module-section'); 
    });
  
    it('should match the Hero-module section', () => {
        cy.get('.Primer_Brand__Hero-module__Hero-actions___oH1NT')
        .compareSnapshot('hero-module-section'); 
    });
  });
  