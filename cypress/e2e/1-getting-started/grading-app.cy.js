/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('Grading app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('can add new grade to list', () => {
    // We'll store our item text in a variable so we can reuse it
    const title = 'Note 1'
    const grade = '15'
    const comment = 'Nice'

    cy.get('[data-testid="title-input"]').type(`${title}`)
    cy.get('[data-testid="note-input"]').type(`${grade}`)
    cy.get('[data-testid="comment-input"]').type(`${comment}`)

    cy.get('.btn').click()

    cy.get('[data-testid="0"]')
      .contains(title)
  })

  it('can edit grade', () => {
    const title = 'Note 1'
    const grade = '15'
    const comment = 'Nice'

    cy.get('[data-testid="title-input"]').type(`${title}`)
    cy.get('[data-testid="note-input"]').type(`${grade}`)
    cy.get('[data-testid="comment-input"]').type(`${comment}`)

    cy.get('.btn').click()

    cy.get('.edit0').click()

    cy.get('[data-testid="title"]').clear().type("New title")

    cy.get('[data-testid="save"]').click()

    cy.contains('New title')
  })

  it('we can delete grade', () => {
    const title = 'Note 1'
    const grade = '15'
    const comment = 'Nice'

    cy.get('[data-testid="title-input"]').type(`${title}`)
    cy.get('[data-testid="note-input"]').type(`${grade}`)
    cy.get('[data-testid="comment-input"]').type(`${comment}`)

    cy.get('.btn').click()

    cy.get('.delete0').click()

    cy.get('[data-testid="suredelete"]').click()

    cy.contains('Note 1').should('not.exist');
  })

  it('we can\'t add grade if input is empty', () => {
    const title = 'Note 1'
    const comment = 'Nice'

    cy.get('[data-testid="title-input"]').type(`${title}`)
    cy.get('[data-testid="comment-input"]').type(`${comment}`)

    cy.get('.btn').click()

    cy.contains('Note 1').should('not.exist');
  })

  it('we can\'t add grade < 20 and should only show 2 if form is submitted', () => {
    const title = 'Note 1'
    const grade = '22'
    const comment = 'Nice'

    cy.get('[data-testid="title-input"]').type(`${title}`)
    cy.get('[data-testid="note-input"]').type(`${grade}`)
    cy.get('[data-testid="comment-input"]').type(`${comment}`)

    cy.get('.btn').click()

    cy.get('.show-hide0').click()

    cy.contains('2');
  })

  it('we can see the grade and the full comment by clicking on button', () => {
    const title = 'Note 1'
    const grade = '20'
    const comment = 'Nice and perfect during the whole class'

    cy.get('[data-testid="title-input"]').type(`${title}`)
    cy.get('[data-testid="note-input"]').type(`${grade}`)
    cy.get('[data-testid="comment-input"]').type(`${comment}`)

    cy.get('.btn').click()

    cy.contains('Note: 20').should('not.exist');
    cy.contains('Nice and perfect during the whole class').should('not.exist');

    cy.get('.show-hide0').click()

    cy.contains('Note: 20');
    cy.contains('Nice and perfect during the whole class');
  })
})
