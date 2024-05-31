import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

Given('que eu acesso a página inicial do site {string}', (url) => {
  cy.visit(url);
});

Then('eu devo ver o texto {string}', (texto) => {
  cy.contains(texto).should('be.visible');
});;
