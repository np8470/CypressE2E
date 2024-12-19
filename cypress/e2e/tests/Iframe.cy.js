//const cypress = require('cypress')
const iframe =require('cypress-iframe');
describe('Handling ifrmaes', () => {

    it('Approach 1 - handle frame', () => {
        cy.visit('https://vinothqaacademy.com/iframe/')

        const iframeFirst = cy.get("iframe[name='homepage']")
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)

        // iframeFirst.get("div[class='elementor-element elementor-element-80baf56 elementor-widget elementor-widget-heading'] h2[class='elementor-heading-title elementor-size-default']")
        // .should('have.value','Our Company Vision')

        iframeFirst.xpath("//h2[normalize-space()='Our Company Vision']")
        .should('be.visible')
    })


    it('Approach 2 - handle frame using custom commands from commands.js file', () => {
        cy.visit('https://vinothqaacademy.com/iframe/')

        const iframeFirst = cy.getIframe("iframe[name='homepage']")

        iframeFirst.xpath("//h2[normalize-space()='Our Company Vision']")
        .should('be.visible')
    })

    it('Approach3 - handle frame using iframe plugin', () => {
        cy.visit('https://vinothqaacademy.com/iframe/')

        cy.frameLoaded("iframe[name='homepage']")

        const frameFirst = cy.iframe("iframe[name='homepage']")
        frameFirst.xpath("//h2[normalize-space()='Our Company Vision']")
        .should('be.visible')
    })
})