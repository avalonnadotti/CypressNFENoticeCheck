/// <reference types="cypress" />

describe('Primeira stack de testes não guiada', ()=>{
    it('Visita site da SEFAZ', () => {
        cy.visit('https://www.nfe.fazenda.gov.br/portal/informe.aspx?ehCTG=false', {
        
        })
        cy.get('.divInforme a').first().should('have.attr', 'name', '1290')
    })
})