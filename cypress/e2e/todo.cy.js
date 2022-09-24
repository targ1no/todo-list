beforeEach(() => {
  cy.visit('https://targ1no.github.io/todo-list/')
});

describe('Todo List', () => {
  it('Clear input', () => {
    cy.get('#input').type('School')
    cy.get('#input').should('have.value', 'School')
    cy.get('#clearButton').click()

    cy.get('#input').should('not.have.value', 'School')
  })

  it('Create a Todo', () => {
    cy.get('#input').type('School')
    cy.get('#addButton').click()

    cy.get('#list').should('have.length', 1)
  })

  it('Check Todo', () => {
    cy.get('#input').type('School')
    cy.get('#addButton').click()
    cy.get('#list').should('have.length', 1)
    cy.get('[type=checkbox]').click()
    
    //asserts
  })

  it.only('Delete Todo', () => {
    cy.get('#input').type('School')
    cy.get('#addButton').click()
    cy.get('#list').should('have.length', 1)
    cy.get('.deleteItem').click()
    
    //asserts
  })
})