class DashboardWebPage
{

    eleDashboardLabel = ".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module"
    eleLogoutLink = ".oxd-userdropdown-name"

    verifyLoginSuccessfully(element)
    {
        cy.get(this.eleDashboardLabel).should('have.text',element)
    }

    clickLogout()
    {
        cy.get(this.eleLogoutLink).click()
        cy.clickLink('Logout')
    }
}

export default DashboardWebPage