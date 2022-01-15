describe('blog app', function() {
  beforeEach(function() {
    cy.visit('http://localhost:3000')
  })

  it('front page can be opened', function() {
    cy.contains('Blogs')
  })

  it('login form can be opened', function() {
    cy.contains('login').click()
     cy.get('#username').type('emday4prez')
    cy.get('#password').type('duckduck')
    cy.get('#login-button').click()

    cy.contains('emerson day logged in')
  })
})