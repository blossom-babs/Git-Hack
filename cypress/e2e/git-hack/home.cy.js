describe('Git hack', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('renders the home page correctly', () => {
    cy.get('.header__title').should('exist')
    cy.contains('GitHack')
  })

  it('Allows search bar to be used', () => {
    cy.get('[data-cy="formInput"]').type('drayilra').should('have.value', 'drayilra')
    cy.contains('Search').click()
  })

  context('Displays data if a valid user exists on Github', () => {
    beforeEach(() => {
      cy.get('[data-cy="formInput"]').type('blossom-babs').should('have.value', 'blossom-babs')
      cy.contains('Search').click()
    })

    it('Displays profile picture', () => {
      cy.get('[data-cy="userAvatar"]').should("be.visible").should(([img]) => {
        expect(img.naturalHeight).to.equal(460)
      })
    })

    it('Displays User details', () => {
      cy.get('[data-cy="userLogin"]').should('exist')
      cy.get('.card').should('exist')
    })
  })


})