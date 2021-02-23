describe('App', () => {
  it('should render a home page', () => {
    cy.visit('http://localhost:3000/')

    cy.get('[href="/sightings-map"] > .main-btns').should('contain', 'Sightings')
    cy.get('[href="/report-form"] > .main-btns').should('contain', 'Report Sighting')
  })

  it('should allow users to view sightings', () => {
    cy.visit('http://localhost:3000/')

    cy.get('[href="/sightings-map"] > .main-btns').click()
    cy.url().should('include', '/sightings-map')
  })
})