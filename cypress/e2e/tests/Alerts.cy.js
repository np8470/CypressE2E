describe('Alerts handling', ()=> {

    it('JS Alert', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click()
        // https://docs.cypress.io/api/cypress-api/catalog-of-events#__docusaurus_skipToContent_fallback
        cy.on('window:alert', (eventVar) => {
            expect(eventVar).to.contains('I am a JS Alert')
        })
        cy.get('#result').should('have.text','You successfully clicked an alert')
    })

    it('Confirm Alert', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click()
        // https://docs.cypress.io/api/cypress-api/catalog-of-events#__docusaurus_skipToContent_fallback
        cy.on('window:confirm', (eventVar) => {
            expect(eventVar).to.contains('I am a JS Confirm')
        })
         //cy.on('window:confirm', ()=> true) // by default - ok button js confirm alert
         cy.on('window:confirm', ()=> false); //  cancel button js confirm alert
         cy.get('#result').should('have.text','You clicked: Cancel')
         //cy.get('#result').should('have.text','You clicked: Ok')
    })

    it('Prompt Alert', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        // https://docs.cypress.io/api/cypress-api/catalog-of-events#__docusaurus_skipToContent_fallback

        cy.window().then((windowVar) => {
            cy.stub(windowVar,'prompt').returns('This is a Prompt Alert.')
        })

        cy.get("button[onclick='jsPrompt()']").click()
        cy.get('#result').should('have.text','You entered: This is a Prompt Alert.')

        // cy.on('window:prompt', ()=> false); //  cancel button js confirm alert
        // cy.get('#result').should('have.text','You clicked: null')
    })

    it('Authentication Alert popup', ()=>{

        //approach -1 
        cy.visit('https://the-internet.herokuapp.com/basic_auth', {auth: {
                                                                            username:"admin",
                                                                            password:"admin"
                                                                        }
                                                                })

        cy.get("div[class='example'] p").should('have.contain','Congratulations')                                                               
       

        //approach -2  - https://username:password@domain
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.get("div[class='example'] p").should('have.contain','Congratulations')  
    })
})