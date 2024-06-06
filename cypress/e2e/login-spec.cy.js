describe('Teste de Login e Seleção de Endereço', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });
    });

    it('Realiza o login com credenciais inválidas', () => {
        cy.visit('https://cas.correios.com.br/login?service=https%3A%2F%2Fmeucorreios.correios.com.br%2Fcore%2Fseguranca%2Fservice.php');

        cy.get('input[name="username"]').type('Michael Jackson');

        cy.get('input[name="password"]').type('thriller');

        cy.get('button[type="submit"]').click();
    });

    it('Realiza o login com credenciais válidas e seleciona endereço', () => {
        cy.visit('https://cas.correios.com.br/login?service=https%3A%2F%2Fmeucorreios.correios.com.br%2Fcore%2Fseguranca%2Fservice.php');
        
        cy.get('input[name="username"]').type('02052692223');
        cy.get('input[name="password"]').type('h22112003');
        cy.get('button[type="submit"]').click();

        cy.wait(2000)
    
        cy.url().should('eq', 'https://meucorreios.correios.com.br/app/index.php');

        cy.wait(5000)
    
        cy.contains('Encontre sua Agência').click();
    
        cy.url().should('eq', 'https://mais.correios.com.br/app/index.php');

        cy.contains('Proximidade').click();

    });

    it('Navega para Central de Atendimento e Expressar Satisfação', () => {
        cy.visit('https://www.correios.com.br/');
    
        cy.contains('Central de Atendimento').click();
    
        cy.url().should('include', '/falecomoscorreios/central-de-atendimento');
    
        cy.contains('clique aqui').click();
    
        cy.url().should('include', 'https://faleconosco.correios.com.br/faleconosco/app/index.php');
    
        cy.contains('Clique aqui se deseja expressar sua satisfação').click();
    
        cy.get('input[name="username"]').type('02052692223');
        cy.get('input[name="password"]').type('h22112003');
        cy.get('button[type="submit"]').click();
    
        cy.url().should('include', 'elogio');
    
        cy.get('select').first().select('Atendimento');
        cy.get('select').eq(1).select('Agência');
        cy.get('select').eq(2).select('Acomodações e segurança do ambiente');
    
        cy.contains('Cliente sem contrato').click();
    
        cy.get('input[name="cep"]').type('58037665{enter}');
    });

it('Calcular Frete', () => {
    cy.visit('https://www.correios.com.br/#');

    cy.get('input[placeholder="Informe o CEP"]').eq(0).type('58037665');
    cy.get('input[placeholder="Informe o CEP"]').eq(1).type('69903190');

    cy.get('input[placeholder="Entre 1 e 100 cm"]').eq(0).type('40');
    cy.get('input[placeholder="Entre 8 e 100 cm"]').eq(0).type('50');
    cy.get('input[placeholder="Entre 13 e 100 cm"]').eq(0).type('50');

    cy.contains('Calcular Frete').click();

    });

    it('Exclusão de conta', () => {
        cy.visit('https://www.correios.com.br/#');
        cy.visit('https://cas.correios.com.br/login?service=https%3A%2F%2Fmeucorreios.correios.com.br%2Fcore%2Fseguranca%2Fservice.php');
        
        cy.get('input[name="username"]').type('02052692223');
        cy.get('input[name="password"]').type('h22112003');
        cy.get('button[type="submit"]').click();

        cy.wait(2000).then(() => {
            cy.contains('Excluir conta').click({ force: true });

            cy.contains('Excluir esta conta').click();
        });
    });
}); 