class LoginWebPage
{

    eleUsername = "input[placeholder='Username']"
    elePassword = "input[placeholder='Password']"
    eleSubmitButton = "button[type='submit']"
    eleInvalidLoginMsg = ".oxd-text.oxd-text--p.oxd-alert-content-text"
    
    setUserName(username)
    {
        cy.get(this.eleUsername).type(username)
    }
    setPassword(password)
    {
        cy.get(this.elePassword).type(password)
    }
    clickLoginButton()
    {
        cy.get(this.eleSubmitButton).click()
    }
    verifyInvalidLogin(message)
    {
        cy.get(this.eleInvalidLoginMsg).should('have.text',message)
    }

}
export default LoginWebPage