describe('App', () => {
  
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })

    it("Loads the App", () => {
        const counter = cy.get('header > h1');
        counter.should('contain', 'Arrivals & Departures');
    }) 
    
  })

// - eq
// - match
// - contain

// - be.empty
// - be.visible
// - have.class