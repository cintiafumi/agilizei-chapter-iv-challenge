/// <reference types="cypress" />

import Chance from 'chance';

const chance = new Chance();

describe('Register', () => {
  it('should register when fill in the form with the data and submit it', () => {
    const firstName = chance.first();
    const lastName = chance.last();
    const email = chance.email();

    cy.visit('http://automationpractice.com');

    cy.get('.login').click();

    cy.get('#email_create').type(email);
    cy.get('#SubmitCreate').click();

    cy.get('input[value=2]').check();
    cy.get('#customer_firstname').type(firstName);
    cy.get('#customer_lastname').type(lastName);
    cy.get('#passwd').type('123456');

    cy.get('#days').select(chance.natural({ min: 1, max: 28 }));
    cy.get('#months').select(chance.month());
    cy.get('#years').select(chance.year({ min: 1950, max: 2000 }));

    cy.get('#firstname').type(firstName);
    cy.get('#lastname').type(lastName);
    cy.get('#address1').type(chance.address());
    cy.get('#city').type(chance.city());
    cy.get('#postcode').type(chance.zip());
    cy.get('#id_country').select('21');
    cy.get('#phone_mobile').type(
      chance.phone({ formatted: false, mobile: true })
    );
    cy.get('#id_state').select(chance.natural({ min: 1, max: 53 }));

    cy.get('#submitAccount').click();

    cy.url().should('contain', 'my-account');
    cy.get('.logout').should('exist');
    
    cy.contains('My personal information').click();
    cy.url().should('contain', 'identity');
    cy.get('#firstname').should('contain.value', firstName);
    cy.get('#lastname').should('contain.value', lastName);
    cy.get('#email').should('contain.value', email);
  });
});
