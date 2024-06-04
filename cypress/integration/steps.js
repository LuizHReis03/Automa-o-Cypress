import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('que estou na página de login', () => {
    cy.visit('https://cas.correios.com.br/login?service=https%3A%2F%2Fmeucorreios.correios.com.br%2Fcore%2Fseguranca%2Fservice.php');
});

When('eu preencho o formulário com as credenciais válidas', () => {
    cy.get('input[name="username"]').type('02052692223');
    cy.get('input[name="password"]').type('sua_senha');
    cy.get('button[type="submit"]').click();
});

Then('devo ser redirecionado para a página inicial', () => {
    cy.url().should('eq', 'https://mais.correios.com.br/app/index.php');
});

When('eu clico na opção "Encontre sua Agência"', () => {
    cy.contains('Encontre sua Agência').click();
});

Then('eu devo ser redirecionado para a página de busca de agências', () => {
    cy.url().should('eq', 'https://mais.correios.com.br/app/index.php');
});

When('eu clico na opção {string}', (opcao) => {
    cy.contains(opcao).click();
  });
  
  Then('eu devo ser redirecionado para a página de busca por proximidades', () => {
    cy.url().should('eq', 'https://mais.correios.com.br/app/index.php');
  });
  When('eu clico no botão Proximidade', () => {
    cy.contains('Proximidade').click();
  });


