import { exportAllDeclaration } from "@babel/types"

describe('test cases', function() {
  it('views information', function() {
      cy.visit('http://localhost:3000/')
      cy.get('#button-modules').click()
      cy.url().should('include', '/modules')
      cy.get('button').contains("testing").click()
      cy.contains('Start Module').click()
      cy.url().should('include', '/completeModule')


   // expect(true).to.equal(true)
  })
   it('takes quiz by skipping questions', function() {
    cy.visit('http://localhost:3000/')
    cy.get('#button-quizzes').click()
    cy.url().should('include', '/quizzes')
    cy.contains('Quiz For Testing').click()
  
    cy.contains('Start Quiz').click()
     cy.contains('Next').click()
    // cy.get('video').click()
     cy.contains('Next').click()
     cy.contains('Next').click()
     cy.contains('Next').click()
     cy.contains('Submit').click()
     cy.on('window:alert', (str) => {
      expect(str).to.equal(`You have not answered all questions. Please go back and finish the quiz.`)
    })

    // cy.contains("0/")

   })
  it('takes quiz by answering 4 questions correctly', function() {
    cy.visit('http://localhost:3000/')

    cy.get('#button-quizzes').click()
    cy.url().should('include', '/quizzes')
    cy.contains('Quiz For Testing').click()
  
    cy.contains('Start Quiz').click()
    cy.get('.answerOption').eq(0).click()
    cy.get('.answerOption').eq(1).click()
    cy.get('.answerOption').eq(2).click()
    cy.get('.answerOption').eq(3).click()
    cy.get('.answerOption').eq(4).click()
    cy.contains('Next').click()
    cy.get('.answerOption').eq(0).click()
    cy.contains('Next').click()
    cy.get('.answerOption').eq(0).click()
    cy.get('.answerOption').eq(1).click()
    cy.get('.answerOption').eq(2).click()
    cy.contains('Next').click()
    cy.get('.answerOption').eq(0).click()
    cy.contains('Next').click()
    cy.get('.answerOption').eq(1).click()
    cy.contains('Submit').click()
    cy.contains("4/")

  })

  it('takes quiz by answering 5 questions correctly', function() {
    cy.visit('http://localhost:3000/')

    cy.get('#button-quizzes').click()
    cy.url().should('include', '/quizzes')
    cy.contains('Quiz For Testing').click()
    cy.contains('Start Quiz').click()
    cy.get('.answerOption').eq(1).click()
    cy.get('.answerOption').eq(4).click()
    cy.get('.answerOption').eq(2).click()
    cy.get('.answerOption').eq(3).click()
    cy.get('.answerOption').eq(0).click()

    cy.contains('Next').click()
    cy.get('.answerOption').eq(1).click()
    cy.get('.answerOption').eq(0).click()
    cy.contains('Next').click()
    cy.get('.answerOption').eq(4).click()
    cy.get('.answerOption').eq(3).click()
    cy.contains('Next').click()
    cy.get('.answerOption').eq(0).click()
    cy.contains('Next').click()
    cy.get('.answerOption').eq(1).click()
    cy.get('.answerOption').eq(1).click()
    cy.get('.answerOption').eq(1).click()
    cy.contains('Submit').click()
    cy.contains("5/")

  })

  it('takes quiz by answering 0 questions correctly', function() {
    cy.visit('http://localhost:3000/')

    cy.get('#button-quizzes').click()
    cy.url().should('include', '/quizzes')
    cy.contains('Quiz For Testing').click()
    cy.contains('Start Quiz').click()
    cy.get('.answerOption').eq(1).click()
    cy.get('.answerOption').eq(2).click()
    cy.get('.answerOption').eq(3).click()
    cy.get('.answerOption').eq(0).click()

    cy.contains('Next').click()
    cy.get('.answerOption').eq(1).click()
    cy.contains('Next').click()
    cy.get('.answerOption').eq(4).click()
    cy.get('.answerOption').eq(3).click()
    cy.get('.answerOption').eq(2).click()
    cy.contains('Next').click()
    cy.get('.answerOption').eq(1).click()
    cy.contains('Next').click()
    cy.get('.answerOption').eq(0).click()
    cy.contains('Submit').click()
    cy.contains("0/")

  })

  it('takes quiz by answering 1 question correctly', function() {
    cy.visit('http://localhost:3000/')

    cy.get('#button-quizzes').click()
    cy.url().should('include', '/quizzes')
    cy.contains('Quiz For Testing').click()
    cy.contains('Start Quiz').click()
    cy.get('.answerOption').eq(1).click()
    cy.get('.answerOption').eq(2).click()
    cy.get('.answerOption').eq(3).click()
    cy.get('.answerOption').eq(4).click()
    cy.contains('Next').click()
    cy.get('.answerOption').eq(4).click()
    cy.contains('Next').click()
    cy.get('.answerOption').eq(4).click()
    cy.get('.answerOption').eq(3).click()
    cy.get('.answerOption').eq(3).click()
    cy.contains('Next').click()
    cy.get('.answerOption').eq(0).click()
    cy.get('.answerOption').eq(1).click()
    cy.contains('Next').click()
    cy.get('.answerOption').eq(0).click()
    cy.contains('Submit').click()
    cy.contains("1/")

  })

  it('takes quiz by answering 2 questions correctly', function() {
    cy.visit('http://localhost:3000/')

    cy.get('#button-quizzes').click()
    cy.url().should('include', '/quizzes')
    cy.contains('Quiz For Testing').click()
    cy.contains('Start Quiz').click()
    cy.get('.answerOption').eq(0).click()
    cy.get('.answerOption').eq(1).click()
    cy.get('.answerOption').eq(2).click()
    cy.get('.answerOption').eq(3).click()
    cy.get('.answerOption').eq(3).click()
    cy.get('.answerOption').eq(4).click()
    cy.get('.answerOption').eq(3).click()
    cy.contains('Next').click()
    cy.get('.answerOption').eq(0).click()
    cy.get('.answerOption').eq(0).click()
    cy.get('.answerOption').eq(1).click()
    cy.contains('Next').click()
    cy.get('.answerOption').eq(4).click()
    cy.contains('Next').click()
    cy.get('.answerOption').eq(0).click()
    cy.contains('Next').click()
    cy.get('.answerOption').eq(0).click()
    cy.contains('Submit').click()
    cy.contains("2/")

  })
 // expect(true).to.equal(true)
  it('has working home button', function() {
    cy.visit('http://localhost:3000/')
    cy.get('#button-quizzes').click()
    cy.url().should('include', '/quizzes')
    cy.get("nav").click(40,40)
    cy.url().should('eq', 'http://localhost:3000/')
  
})
it('has information about FES and redirects to fes webpage', function() {
  cy.visit('http://localhost:3000/')
  cy.get('#button-information').click()
  cy.url().should('include', '/information')
  expect(cy.contains('Phone'))
  cy.contains('TO FES').click()
  cy.url().should('include', 'fes.com')


})
it('has help information', function() {
  cy.visit('http://localhost:3000/')
  cy.get('#button-information').click()
  cy.url().should('include', '/information')
  cy.get("nav").click("center")
  cy.url().should('include',"/helppage")
  expect(cy.contains('How to use this app'))



})
})