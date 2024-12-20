describe('Execute on different environment', () => {

    it('Execute on prod env from prod.config.js', () => {
        cy.visit('')
        // In terminal, write command : npx cypress open --config-file prod.config.js
        // it will execute in as per above config file
        cy.log('Username for prod env: '+Cypress.env('username'))
    })

    it('Execute on qa env from qa.config.js', () => {
        cy.visit('')
        // In terminal, write command : npx cypress open --config-file qa.config.js
        // it will execute in as per above config file
        cy.log('Username for qa env: '+Cypress.env('username'))
    })

    it('Execute on prod env Cypress.env.json', () => {
        cy.visit(Cypress.env('prod_url'))
    })

    it('Execute on qa env Cypress.env.json', () => {
        cy.visit(Cypress.env('qa_url'))
    })

})