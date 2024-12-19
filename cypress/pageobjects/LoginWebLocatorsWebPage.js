export class LoginWebLocatorsWebPage
{

    weblocators = {
        eleUsername:"input[name='username']",
        elePassword:"input[name='password']",
        eleSubmitButton:"button[type='submit']",
        eleInvalidLoginMsg:".oxd-text.oxd-text--p.oxd-alert-content-text"
    }
    
    launchApplication()
    {
        cy.visit(Cypress.env('URL'))
    }

    setUserName(username)
    {
        cy.get(this.weblocators.eleUsername).type(username)
    }

    setPassword(password)
    {
        cy.get(this.weblocators.elePassword).type(password)
    }

    clickLoginButton()
    {
        cy.get(this.weblocators.eleSubmitButton).click()
    }

    verifyInvalidLogin(message)
    {
        cy.get(this.weblocators.eleInvalidLoginMsg).should('have.text',message)
    }

}