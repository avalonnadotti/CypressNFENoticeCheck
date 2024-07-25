/// <reference types="cypress" />

describe('Now I can check new alerts on nfe.fazenda portal', ()=>{
    it('Verify new NF-e alerts', () => {
        cy.visit('https://www.nfe.fazenda.gov.br/portal/informe.aspx?ehCTG=false', {
        
        })
        cy.get('.divInforme a')
            .first()
            .should('have.attr', 'name', '1291')
    })
})