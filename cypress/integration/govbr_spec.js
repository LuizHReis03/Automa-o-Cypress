describe('Teste de busca da palavra "gov.br"', () => {
    it('Verifica a presença da palavra "gov.br"', () => {
      // Visita a página inicial do site
      cy.visit('https://www.gov.br/pt-br');
  
      // Verifica se a palavra "gov.br" está presente na página
      cy.contains('gov.br').should('be.visible');
    });
  });
  