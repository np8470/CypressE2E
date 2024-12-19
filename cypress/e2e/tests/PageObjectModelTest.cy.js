import {LoginWebLocatorsWebPage} from "../../pageobjects/LoginWebLocatorsWebPage"
import DashboardWebPage from "../../pageobjects/DashboardWebPage"
import invalidLoginData from "../../fixtures/orangeHRM_Invalid_login.json"

describe('Hadnling Page Object Model with Data driven test', () => {

    it('Login - different testdata', () => {
        //cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        const loginWebLocatorsWebPageObject = new LoginWebLocatorsWebPage()
        const dashboardWebPageObject = new DashboardWebPage()
        
        loginWebLocatorsWebPageObject.launchApplication()

        cy.fixture('orangeHRM_Invalid_login.json').then((data) => {
            data.forEach((userdata) => {
                loginWebLocatorsWebPageObject.setUserName(userdata.username)
                loginWebLocatorsWebPageObject.setPassword(userdata.password)
                loginWebLocatorsWebPageObject.clickLoginButton()
                
                if (userdata.username=="Admin" && userdata.password=="admin123") {
                    dashboardWebPageObject.verifyLoginSuccessfully(userdata.expected)
                    dashboardWebPageObject.clickLogout()
                } else {
                    loginWebLocatorsWebPageObject.verifyInvalidLogin(userdata.expected)
                }
                });
            })
       
    })

})