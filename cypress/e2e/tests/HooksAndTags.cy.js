

// Hooks:
//  before (before all it blocks - execute only once) 
//  after (after all it blocks - execute only once)
//  beforeEach (before each it blocks) 
//  afterEach (after each it blocks) 

// Tags: skip || only

// Broswer Navigation
// cy.go('back') || cy.go(-1) (navigate back)
// cy.go('forward') || cy.go(1) (navigate forward)
// cy.reload() (reload the page)

describe('Manage hooks and tags', ()=> {

    before(() => {
        cy.log("****** Launch application ***********")
    })

    after(() => {
        cy.log("****** Close application ***********")
    })

    beforeEach(() => {
        cy.log("****** Login ***********")
    })

    afterEach(() => {
        cy.log("****** Logout ***********")
    })

    it.skip('Search', ()=> {
        cy.log("****** Searching ***********")
    })

    it.only('Advance Search', ()=> {
        cy.log("****** Advance Searching ***********")
    })

    it('Listing Products', ()=> {
        cy.log("****** Listing Products ***********")
    })

})