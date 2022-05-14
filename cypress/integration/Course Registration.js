/// <reference types= "cypress" />

describe('Course Registration Form Automation', ()=> {    

it('Launch Browser', function() {

    //Enter URL
    cy.visit("https://demo.wpeverest.com/user-registration/course-registration-form/")
    cy.reload()
    cy.viewport(375,667) 
    cy.wait(200)

})

it('Trainee Information', () => {

    //Enter first name & last name
    cy.get('#first_name').type('Abubakkar Shiddique')
    cy.get('#last_name').type('shuvo')

    //Enter location 
    cy.get('#textarea_1623050614').type('Dhaka, Bangladesh') 
    cy.get('#input_box_1623050696').type('Airport') 
    cy.get('#input_box_1623050759').type('Dhaka') 

    //Select country from dropdown
    cy.get('#country_1623050729').select("Bangladesh").should('have.value','BD')
    cy.screenshot()

    cy.get('#input_box_1623050879').type(1230) 

    //Select radio button 
    cy.get('#radio_1623051748_Male').should('exist').click()
    cy.screenshot()
    cy.wait(200)

})

cy.on('uncaught:exception', (err, runnable) => {

      return false

    });

it('Login Information', ()=> {

    //Enter email id 
    cy.get('#user_email').should('exist').type('medinatechtest@gmail.com')
    cy.get('#user_confirm_email').type('medinatechtest@gmail.com')

    //Enter password
    cy.get('#user_pass').type(123456)
    cy.get('#user_confirm_password_field').type(123456)
    cy.screenshot()
    cy.wait(200)

})

it('Submit', () => {

    //Click save button 
    cy.get('.btn').should('exist').click()
    cy.screenshot()

})
 
})
