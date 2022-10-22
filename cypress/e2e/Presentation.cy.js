/// <reference types="cypress" />

describe('Main/Top Navigation Bar', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:8080/')
    cy.get("[id=':r0:']").type('test')
    cy.get("[id=':r1:']").type('testtest')
    cy.contains('button','Login').click()
  })

  it('Should return the profile page', () => {
    cy.intercept("GET", "http://localhost:8080/api/users", {
      fixture: "testUserInfo.json"
    })
    // cy.intercept("GET", "http://localhost:8080/api/rooms/cookie", {
    //   fixture: ""
    // })
    cy.get("[class='main-nav']").get("[id='profile-link']").click()
    cy.get("[id='profile-tab']").should("be.visible")
    cy.get("[id='saved-rooms-tab']").should("be.visible")
    cy.get("[class='profile-room-container']").contains("Hosted Rooms").should("be.visible")

    cy.get("[class='profile-room-container']").contains('HostedRoom1').click()
    // cy.get("[id='open-room-btn']").contains('button','Open Room').click()
    // cy.contains('Blackboard').click()
    // cy.get("[id='revealColorSelect']").click()
    // cy.get("[id='addNewColor']").click()
    // cy.get("[style='background-color: rgb(0, 0, 0);']").should("be.visible")
  })
})