/// <reference types="cypress" />

describe('Main/Top Navigation Bar', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:8080/')
    cy.get("[id=':r0:']").type('test')
    cy.get("[id=':r1:']").type('testtest')
    cy.contains('button','Login').click()
  })

  it('is for the Presentation', () => {
    cy.intercept("GET", "http://localhost:8080/api/rooms/math", {
      fixture: "testRooms.json"
    })
    cy.get("[id='subject-links-container']").get('button').get("[value='math']").click()
    cy.get("[id='room-container']").contains('math').should("be.visible")
    cy.get("[id='room-container']").contains('Test\'s Room').click()
    cy.get("[id='main-button']").contains('button','Join Room').click()
    cy.contains('Blackboard').click()
    cy.get("[id='revealColorSelect']").click()
    cy.get("[id='addNewColor']").click()
    cy.get("[style='background-color: rgb(0, 0, 0);']").should("be.visible")

    cy.get("[class='flashcontainer']").should("be.visible")
    cy.get("[id='chatInput']").should("be.visible")
    cy.contains('Send').should("be.visible")

  })
})