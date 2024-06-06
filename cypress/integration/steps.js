import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('que estou na página de login', () => {
    cy.visit('https://cas.correios.com.br/login?service=https%3A%2F%2Fmeucorreios.correios.com.br%2Fcore%2Fseguranca%2Fservice.php');
});

When('eu preencho o formulário com as credenciais válidas', () => {
    cy.get('input[name="username"]').type('02052692223');
    cy.get('input[name="password"]').type('h22112003');
    cy.get('button[type="submit"]').click();
});

Then('devo ser redirecionado para a página inicial', () => {
    cy.url().should('eq', 'https://mais.correios.com.br/app/index.php');
});

When('eu clico na opção {string}', (opcao) => {
    cy.contains(opcao).click();
});

Then('eu devo ser redirecionado para a página de busca de agências', () => {
    cy.url().should('eq', 'https://mais.correios.com.br/app/index.php');
});

Then('a URL deve ser {string}', (url) => {
    cy.url().should('eq', url);
});

Then('eu clico no botão Proximidade', () => {
    cy.contains('Proximidade').click();
});

When('eu preencho o formulário com credenciais inválidas', () => {
    cy.get('input[name="username"]').type('Michael Jackson');
    cy.get('input[name="password"]').type('thriller');
    cy.get('button[type="submit"]').click();
});

Then('devo ver a mensagem de erro {string}', (mensagem) => {
    cy.contains(mensagem);
});

When('eu navego para a Central de Atendimento e Expressar Satisfação', () => {
    cy.visit('https://www.correios.com.br/');
    cy.contains('Central de Atendimento').click();
    cy.contains('clique aqui').click();
    cy.contains('Clique aqui se deseja expressar sua satisfação').click();
    cy.url().should('include', 'cadastro');
});

And('eu preencho o formulário com os dados necessários', () => {
    cy.get('input[name="cep"]').type('58037665');
});
When('eu preencho o formulário com os dados necessários', () => {
    cy.get('input[name="cep"]').type('58037665');
});

Then('devo ver a confirmação de sucesso', () => {
    cy.get('input[name="numero"]').type('77');
    cy.get('input[name="complemento"]').type('resd Monte Tabor');
    cy.get('input[name="telefone"]').type('68999732168');
    cy.get('select').eq(3).select('Paraíba');
    cy.get('select').eq(4).select('João Pessoa');
    cy.get('select').eq(5).select('Cabo Branco');
    cy.get('select').eq(6).select('AGF Praia Cabo Branco');
    cy.get('textarea[name="mensagem"]').type('Teste realizado com sucesso');

    // Navegar para o site de correios
    cy.visit('https://www.correios.com.br/#');

    // Preencher origem
    cy.get('input[name="origem"]').type('58037665');

    // Preencher destino
    cy.get('input[name="destino"]').type('69903190');

    // Preencher as dimensões do pacote
    cy.get('input[name="altura"]').type('40');
    cy.get('input[name="largura"]').type('50');
    cy.get('input[name="comprimento"]').type('50');

    // Clicar em Calcular Frete
    cy.contains('Calcular Frete').click();

    Given('que estou na página de login', () => {
        cy.visit('https://www.correios.com.br/#');
        cy.visit('https://cas.correios.com.br/login?service=https%3A%2F%2Fmeucorreios.correios.com.br%2Fcore%2Fseguranca%2Fservice.php');
    });
    
    When('eu preencho o formulário com as credenciais válidas', () => {
        cy.get('input[name="username"]').type('02052692223');
        cy.get('input[name="password"]').type('h22112003');
        cy.get('button[type="submit"]').click();
    });
    
    When('eu clico no botão de login', () => {
        // Nothing needed here since it's already covered in the previous step
    });
    
    When('eu clico em "Excluir conta"', () => {
        cy.wait(2000).then(() => {
            cy.contains('Excluir conta').click({ force: true });
        });
    });
    
    Then('eu clico em "Excluir esta conta"', () => {
        cy.contains('Excluir esta conta').click();
    });
});