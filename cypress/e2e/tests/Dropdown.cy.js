describe('Dropdown select options', ()=> {
    it('Dropdown with Select option', ()=> {
        cy.visit('https://www.zoho.com/commerce/free-demo.html?src=homepage')
        let country = 'Italy'
        cy.get('#zcf_address_country').select(country).should('have.value',country)
    })

    it('Dropdown without Select option', ()=> {
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        let country = 'Italy'
        cy.get('#select2-billing_country-container').click()
        cy.get("input[role='combobox']").type(country).type('{enter}')
        //cy.get('#select2-billing_country-container').should('have.value',country)
    })

    it('Dynamic dropdown', ()=> {
        cy.visit('https://www.google.com/')
        let searchText = 'cypress automation'
        cy.get('#APjFqb').type(searchText)
        cy.wait(3000)
        cy.get('div.wM6W7d > span').should('have.length',13)
        cy.get('div.wM6W7d > span').each(($element, index, $list) => {
            if($element.text()=='cypress automation tutorial')
            {
                cy.wrap($element).click()
            }
        })
    })


})