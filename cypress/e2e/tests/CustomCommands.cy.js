describe('Custom Commands', () => {

    it('Handling links', ()=> {
        cy.visit('https://the-internet.herokuapp.com/')
        cy.clickLink("Dropdown")
        cy.get('h3').should('have.text','Dropdown List')
    })

    it.only('Login Command', ()=> {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.login("input[placeholder='Username']","input[placeholder='Password']","Admin","admin123","button[type='submit']")
    })

    it('', ()=> {
        
    })
})