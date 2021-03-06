describe('My First Test', function() {
    it('views information', function() {
        cy.visit('http://localhost:3000/')
        cy.contains('Fire Safety Information').click()
        cy.url().should('include', '/safetyHome')
     // expect(true).to.equal(true)
    })
    it('takes quiz with video and gets results', function() {
      cy.visit('http://localhost:3000/')
      cy.contains('Quizzes').click()
      cy.url().should('include', '/quizzes')
      cy.contains('quiz 1').click()
      cy.contains('next').click()
      cy.get('video').click()
      cy.wait('while')
      cy.contains('Next').click()
      cy.contains('Results').click()

    })
   // expect(true).to.equal(true)
    it('has working home button', function() {
      cy.visit('http://localhost:3000/')
      cy.contains('Quizzes').click()
      cy.url().should('include', '/quizzes')
      cy.contains('Home').click()
      cy.url().should('eq', 'http://localhost:3000/')
    
  })
  })