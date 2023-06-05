describe('Teste End-to-End', () => {
    it('Teste 1', () => {
        // abre o site
        cy.visit('http://localhost:5000/')
    })
    it('Teste 2', () => {
        cy.get('[data-id=3]').should('contain.text', 'Design Patterns')
    })    
    it('Teste 3', () => {    
    cy.get('[data-id=3]').within(() => {
       cy.contains('Comprar').click()
    })
    cy.wait(2230)
    cy.get('.swal-text').should('contain.text', 'Sua compra foi realizada com sucesso')
    cy.get('.swal-button').click()
})
  })
