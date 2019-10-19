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
   it('takes quiz by skipping questions', function() {
    cy.visit('http://localhost:3000/')
    cy.contains('Quizzes').click()
    cy.url().should('include', '/quizzes')
    cy.contains('quiz 1').click()
    cy.contains('Next').click()
    cy.get('video').click()
    //cy.wait('while')
    cy.contains('Next').click()
    cy.contains('View Results').click()
    cy.contains("0/")

  })
  it('takes quiz by answering all questions incorrectly', function() {
    cy.visit('http://localhost:3000/')
    cy.contains('Quizzes').click()
    cy.url().should('include', '/quizzes')
    cy.contains('quiz 1').click()
    cy.get('.answerOption').eq(1).click()
    cy.get('.answerOption').eq(0).click()
    cy.contains('Next').click()
    cy.get('video').click()
    cy.get('.answerOption').first().click()
    cy.get('.answerOption').last().click()
    //cy.wait('while')
    cy.contains('Next').click()
    cy.get('.answerOption').last().click()
    cy.contains('View Results').click()
    cy.contains("0/")

  })

  it('takes quiz by answering some questions correctly', function() {
    cy.visit('http://localhost:3000/')
    cy.contains('Quizzes').click()
    cy.url().should('include', '/quizzes')
    cy.contains('quiz 1').click()
    cy.get('.answerOption').eq(1).click()
    cy.contains('Next').click()
    cy.get('video').click()
    cy.get('.answerOption').eq(0).click()
    cy.get('.answerOption').eq(1).click()
    cy.get('.answerOption').eq(0).click()
    //cy.wait('while')
    cy.contains('Next').click()
    cy.get('.answerOption').eq(1).click()
    cy.contains('View Results').click()
    cy.contains("2/")

  })
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