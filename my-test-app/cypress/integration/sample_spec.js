describe('My First Test', function() {
    it('visits app', function() {
        cy.visit('http://localhost:3000/')
        cy.contains('Fire Safety Information').click()
     // expect(true).to.equal(true)
    })
  })