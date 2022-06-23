/// <reference types="cypress" />
describe("Happy Flow Test", () => {
    beforeEach(() => {
        cy.visit("/");
    })
    it ("Filling Form and Submit", () => {
        cy.fixture('form_data.json').then(form_data => {
            cy.get("[data-test-id='first-name']")
                .type(form_data.firstName)
                .should("have.value", form_data.firstName);
            cy.get("[data-test-id='last-name']")
                .type(form_data.lastName)
                .should("have.value", form_data.lastName);
            cy.get("[data-test-id='phone-number']")
                .type(form_data.phoneNumber)
                .should("have.value", form_data.phoneNumber);
            cy.get("[data-test-id='dob']").click()
                .type(form_data.dob)
                .should("have.value", form_data.dob);
            cy.get("[data-test-id='address']")
                .type(form_data.address)
                .should("have.value", form_data.address);
            cy.get("[data-test-id='submit-btn']").click()
            // Check if the form is submitted and Displayed on the User List Section
            cy.get('.sc-htoDjs > :nth-child(1)')
                .should("be.visible")
                .should("contain", "John")
            cy.get('.sc-htoDjs > :nth-child(2)')
                .should("be.visible")
                .should("contain", "ADDRESS: WR-0003-0036")
            cy.get('.sc-htoDjs > :nth-child(3)')
                .should("be.visible")
                .should("contain", "DOB: 11th December 2009");        
    })
})
})