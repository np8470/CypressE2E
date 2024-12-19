import LoginWebPage from "../../pageobjects/LoginWebPage"
import DashboardWebPage from "../../pageobjects/DashboardWebPage"

describe('Hadnling Page Object Model with Data driven test', () => {

    it('Login - different testdata', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        const loginWebPageObject = new LoginWebPage()
        const dashboardWebPageObject = new DashboardWebPage()

        cy.fixture('orangeHRM_Invalid_login.json').then((data) => {
            data.forEach((userdata) => {
                loginWebPageObject.setUserName(userdata.username)
                loginWebPageObject.setPassword(userdata.password)
                loginWebPageObject.clickLoginButton()
                
                if (userdata.username=="Admin" && userdata.password=="admin123") {
                    dashboardWebPageObject.verifyLoginSuccessfully(userdata.expected)
                    dashboardWebPageObject.clickLogout()
                } else {
                    loginWebPageObject.verifyInvalidLogin(userdata.expected)
                }
                });
            })
       
    })

})