import { exportAllDeclaration } from "@babel/types"

describe('test cases', function() {
  it('views information', function() {
      cy.visit('http://localhost:3000/')
      cy.contains('Information Modules').click()
      cy.url().should('include', '/infoModule')
      cy.contains('Start').click()
      cy.contains('Start Module').click()
      cy.url().should('include', '/informationModule')


   // expect(true).to.equal(true)
  })
  // it('takes quiz with video and gets results', function() {
  //   cy.visit('http://localhost:3000/')
  //   cy.contains('Quizzes').click()
  //   cy.url().should('include', '/quizzes')
  //   cy.contains('quiz 1').click()
  //   cy.contains('next').click()
  //   cy.get('video').click()
  //   cy.wait('while')
  //   cy.contains('Next').click()
  //   cy.contains('Results').click()

  // })
 // expect(true).to.equal(true)
  it('has working home button', function() {
    cy.visit('http://localhost:3000/')
    cy.contains('Quizzes').click()
    cy.url().should('include', '/quizzes')
    cy.contains('Home').click()
    cy.url().should('eq', 'http://localhost:3000/app/')
  
})
it('has information about FES and redirects to fes webpage', function() {
  cy.visit('http://localhost:3000/')
  cy.contains('About FES').click()
  cy.url().should('include', '/information')
  expect(cy.contains('Phone'))
  cy.contains('TO FES').click()
  cy.url().should('include', 'fes.com')


})
})