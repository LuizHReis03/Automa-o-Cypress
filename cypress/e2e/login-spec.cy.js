describe('Teste de Login e Seleção de Endereço', () => {
    it('Realiza o login com credenciais inválidas e verifica mensagem de erro', () => {
        cy.visit('https://cas.correios.com.br/login?service=https%3A%2F%2Fmeucorreios.correios.com.br%2Fcore%2Fseguranca%2Fservice.php');

        // Preenche o campo de CPF com credenciais inválidas
        cy.get('input[name="username"]').type('Michael Jackson');

        // Preenche a senha com credenciais inválidas
        cy.get('input[name="password"]').type('thriller');

        // Clica no botão de login
        cy.get('button[type="submit"]').click();
    });

    it('Realiza o login com credenciais válidas e seleciona endereço', () => {
        cy.visit('https://cas.correios.com.br/login?service=https%3A%2F%2Fmeucorreios.correios.com.br%2Fcore%2Fseguranca%2Fservice.php');
        
        // Realiza o login
        cy.get('input[name="username"]').type('02052692223');
        cy.get('input[name="password"]').type('h22112003');
        cy.get('button[type="submit"]').click();

        cy.wait(5000)
    
        // Aguarda o redirecionamento para a página inicial após o login
        cy.url().should('eq', 'https://meucorreios.correios.com.br/app/index.php');

        cy.wait(5000)
    
        // Seleciona a opção "Encontre sua Agência"
        cy.contains('Encontre sua Agência').click();
    
        // Verifica se o redirecionamento ocorreu corretamente
        cy.url().should('eq', 'https://mais.correios.com.br/app/index.php');

        cy.contains('Proximidade').click();

    });
});
