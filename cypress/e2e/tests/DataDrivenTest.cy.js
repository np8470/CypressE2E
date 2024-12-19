describe('Data Driven Test suite', () => {

    it('First Data driven test', () => {
        //cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        
        cy.fixture('orangeHRM_Invalid_login.json').then((data) => {

            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

            data.forEach((userdata) => {
                cy.get("input[placeholder='Username']").type(userdata.username)
                cy.get("input[placeholder='Password']").type(userdata.password)
                cy.get("button[type='submit']").click()

                if (userdata.username=='Admin' && userdata.password=='admin123') {
                    cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text',userdata.expected)

                    cy.get('.oxd-userdropdown-name').click()
                    cy.clickLink('Logout')
                } else {
                    cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should('have.text',userdata.expected)
                }
                //
            });
        })

    })

})