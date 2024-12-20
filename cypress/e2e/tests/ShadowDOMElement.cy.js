describe('Shadow DOM Element Handling', () => {

    it('Shadow DOM first test using shadow() function', () => {
      cy.visit('https://selectorshub.com/xpath-practice-page/')
      cy.get('#userName',{setTimeout:20000}).shadow()
      .find('#app2')
      .shadow()
      .find('#pizza').type('Dominos Pizza')
    })

    it('Shadow DOM first test with configure in cypress.config.js file', () => {
        cy.visit('https://selectorshub.com/xpath-practice-page/')
        cy.get('#pizza',{timeout:20000}).type('Dominos Pizza')
     })

    it('Shadow DOM first test within get() function', () => {
        cy.visit('https://selectorshub.com/xpath-practice-page/')
        cy.get('#pizza',{includeShadowDom:true},{timeout:20000}).type('Dominos Pizza')
    })    

})