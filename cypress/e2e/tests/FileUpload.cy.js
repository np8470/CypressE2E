import 'cypress-file-upload'

describe('Handlin file uploads', () => {

    function formatString(text) {
        return text.replace('kr', '').replace('\u00A0','').trim();
    }
    
    it('Single file upload', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('image.jpg')
        cy.get('#file-submit').click()
        cy.get('h3').should('have.text','File Uploaded!')
        cy.get('#uploaded-files').contains('image.jpg')

    })

    it('File upload -rename', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({filePath:'image.jpg',fileName:'renameimage.jpg'})
        cy.get('#file-submit').click()
        cy.get('h3').should('have.text','File Uploaded!')
        cy.get('#uploaded-files').contains('renameimage.jpg')
    })

    it('File upload - drag and drop', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#drag-drop-upload').attachFile('image.jpg',{subjectType:'drag-n-drop'})
        cy.get('#drag-drop-upload > :nth-child(1) > .dz-details > .dz-filename > span').should('have.text','image.jpg')
        // cy.get('#file-submit').click()
        // cy.get('h3').should('have.text','File Uploaded!')
        // cy.get('#uploaded-files').contains('image.jpg')
    })

    it('Multiple files upload', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(['image.jpg','image1.jpg'])
        cy.get("div[class='main'] li:nth-child(1)").should('have.text','image.jpg')
        cy.get("div[class='main'] li:nth-child(2)").should('have.text','image1.jpg')
    })

    it.only('File upload - shadow DOM', () => {
        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')
        cy.get(".smart-browse-input", {includeShadowDom:true}).attachFile("image.jpg")
        cy.get('.smart-item-name', {includeShadowDom:true}).contains('image.jpg')

    })


})