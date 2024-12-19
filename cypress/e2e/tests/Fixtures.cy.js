describe('Fixtures Hadnling', () => {

    let userdata
    before( () => {
        cy.fixture('orangeHRM_login.json').then((data) => {
            userdata = data
        })
    })

    it('Fixtures Demo - Approach 1', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            cy.get("input[placeholder='Username']").type(userdata.username)
            cy.get("input[placeholder='Password']").type(userdata.password)
            cy.get("button[type='submit']").click()
            cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text',userdata.expected)

    })

    it('Fixtures Demo - Approach 2', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.fixture('orangeHRM_login.json').then((data) => {
            cy.get("input[placeholder='Username']").type(data.username)
            cy.get("input[placeholder='Password']").type(data.password)
            cy.get("button[type='submit']").click()
            cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text',data.expected)
        })

    })

})