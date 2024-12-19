describe('Handle tabs and windows', ()=>{

    it('Approach 1 - Handle tabs', ()=>{
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example > a').invoke('removeAttr','target').click()

        cy.url().should('eq','https://the-internet.herokuapp.com/windows/new')

        cy.go('back') // navigate back
    })

    it('Approach 2 - Handle tabs', ()=>{
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example > a').then((hrefValue) => {
            let url = hrefValue.prop('href')
            cy.visit(url)
        })
        cy.url().should('eq','https://the-internet.herokuapp.com/windows/new')
        cy.go('back')

    })
})