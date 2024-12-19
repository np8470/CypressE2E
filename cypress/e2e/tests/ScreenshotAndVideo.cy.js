describe('Handling screenshots and videos', () => {

    it('screenshot', () => {
        cy.visit('https://tutorialsninja.com/demo/index.php?')
        cy.screenshot('tutorials.jpg')
        cy.get(':nth-child(7) > a').screenshot('camera.jpg')

        // automatically captures screenshots and videos on failure - if we execute through CLI
        cy.get(':nth-child(7) > a').click()
        cy.get("div[id='content'] h2").should('have.text','Tablets')
    })

})