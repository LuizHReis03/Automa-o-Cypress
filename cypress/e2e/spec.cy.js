describe('Teste de busca da palavra "Serviços"', () => {
  it('Verifica a presença da palavra "Serviços"', () => {
    // Visita a página inicial do site
    cy.visit('https://www.gov.br/pt-br');

    // Verifica se a palavra "Serviços" está presente na página
    cy.contains('Serviços').should('be.visible');
  });
});
