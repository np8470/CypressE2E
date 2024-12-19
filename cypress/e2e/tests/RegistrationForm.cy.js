describe('First Test scenario', ()=> {
    it('Launch the application', ()=> {
        cy.visit('https://vinothqaacademy.com/demo-site/')

        cy.url().should('contain','demo-site').and('eq','https://vinothqaacademy.com/demo-site/').and('include','demo-site')

        cy.title().should('eq','Demo Site - Registration Form - Vinoth Q.A Academy')
        
        let firstNameElement = cy.get('#vfb-5')
        let firstNameValue = 'Niraj'
        firstNameElement.type(firstNameValue).should('have.value',firstNameValue)

        let lastNameElement = cy.get('#vfb-7')
        let lastNameValue = 'Patel'
        lastNameElement.type(lastNameValue).should('have.value',lastNameValue)

        let maleGender = cy.get('#vfb-31-1')
        let femaleGender = cy.get('#vfb-31-2')
        maleGender.should('be.visible')
        femaleGender.should('be.visible').and('not.be.checked')
        maleGender.check().should('be.checked')

        let addressElement = cy.get('#vfb-13-address')
        let addressValue = '1, Homaeland appartment'
        addressElement.type(addressValue).should('have.value',addressValue)

        let cityElement = cy.get('#vfb-13-city')
        let cityValue = 'Gandhinagar'
        cityElement.type(cityValue).should('have.value',cityValue)

        let stateElement = cy.get('#vfb-13-state')
        let stateValue = 'Gujarat'
        stateElement.type(stateValue).should('have.value',stateValue)

        let zipcodeElement = cy.get('#vfb-13-zip')
        let zipcodeValue = '985263'
        zipcodeElement.type(zipcodeValue).should('have.value',zipcodeValue)

        //let countryElement = cy.get('#vfb-13-country')
        let countryValue = 'India'
        //cy.xpath("//span[@class='select2 select2-container select2-container--default select2-container--focus']//b[@role='presentation']").click()
        cy.get(':nth-child(6) > .select2 > .selection > .select2-selection > .select2-selection__arrow > b').click()
        cy.get("input[aria-label='Search']").type(countryValue).type('{enter}')
        //countryElement.select(countryValue).should('have.value',countryValue)

        let emailElement = cy.get('#vfb-14')
        let emailValue = 'cypressautomation@test.com'
        emailElement.type(emailValue).should('have.value',emailValue)

        //let hourElement = cy.get('#vfb-16-hour')
        let hourElement = cy.get(':nth-child(2) > .select2 > .selection > .select2-selection > .select2-selection__arrow > b')
        //let minuteElement = cy.get('#vfb-16-min')
        let minuteElement = cy.get(':nth-child(3) > .select2 > .selection > .select2-selection > .select2-selection__arrow > b')
        let hourValue = '10'
        let minuteValue = '20'

        hourElement.click()
        cy.get("input[aria-label='Search']").type(hourValue).type('{enter}')
        minuteElement.click()
        cy.get("input[aria-label='Search']").type(minuteValue).type('{enter}')
        // hourElement.select(hourValue).should('have.value',hourValue)
        // minuteElement.select(minuteValue).should('have.value',minuteValue)

        let mobileNumberElement = cy.get('#vfb-19')
        let mobileNumberValue = '9876543210'
        mobileNumberElement.type(mobileNumberValue).should('have.value',mobileNumberValue)

        let SeleniumWebDriverElement = cy.get('#vfb-20-0')
        let javaElement = cy.get('#vfb-20-1')
        let devOpsElement = cy.get('#vfb-20-3')
        SeleniumWebDriverElement.check().should('be.checked')
        javaElement.check().should('be.checked')
        devOpsElement.uncheck().should('not.be.checked')
        
        let queryElement = cy.get('#vfb-23')
        let queryValue = 'This is a cypress automation demo.'
        queryElement.type(queryValue).should('have.value',queryValue)

        let digitText; //Example: 33
        let verificationCode;
        //cy.xpath("//label[@xpath='1']").then(($text) => {
        
        cy.get('.vfb-item-secret > .vfb-span > label').then(($text) => {
            digitText = $text.text()
            verificationCode = digitText.substring(9,11)
            cy.get('#vfb-3').type(verificationCode).should('have.value',verificationCode)
        })

        let dateElement = cy.get('#vfb-18')
        let dateValue = '12/20/2025'
        dateElement.type(dateValue).should('have.value',dateValue)

        cy.get('#vfb-4').should('be.visible').click()
    })
})
