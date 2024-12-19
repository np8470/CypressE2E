
require('@4tw/cypress-drag-drop')

describe('Handling mouse event operations', () => {

    it('Mouse hover', ()=> {
        cy.visit('https://tutorialsninja.com/demo/')
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()
        cy.get("body > div:nth-child(3) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)").click()
        cy.get("div[id='content'] h2").should('have.text','Mac')

    })

    it('Right click', ()=> {
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')

        //approach -1 
        cy.get('.context-menu-one.btn.btn-neutral').trigger('contextmenu')
        cy.get("li[class='context-menu-item context-menu-icon context-menu-icon-copy'] span").should('be.visible')
        
        //approach -2
        // cy.get('.context-menu-one.btn.btn-neutral').rightclick()
        // cy.get("li[class='context-menu-item context-menu-icon context-menu-icon-copy'] span").should('be.visible')
    })

    it('Double click', ()=> {
        cy.visit('https://vinothqaacademy.com/mouse-event/')

        //approach -1 
        // cy.get('#dblclick').dblclick()
        // cy.get('#demo').should('have.text','Double Click Action is Performed')

        //approach -2 
        cy.get('#dblclick').trigger('dblclick')
        cy.get('#demo').should('have.text','Double Click Action is Performed')
    })

    it('Drag and Drop using plugin', ()=> {
        cy.visit('https://vinothqaacademy.com/mouse-event/')
        cy.get('#draggableElement').drag('#droppableElement')
    })

    it.only('Scrolling page', ()=> {
        cy.visit('https://the-internet.herokuapp.com/')
        cy.get("a[href='/tinymce']").scrollIntoView().click()
        cy.get("div[class='example'] h3").should('have.text','An iFrame containing the TinyMCE WYSIWYG Editor')
    })

})