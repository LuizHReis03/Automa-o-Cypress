Feature: Verificação da presença da palavra "gov.br" no site

Scenario: Verificar presença do texto "gov.br" na página inicial
  Given que eu acesso a página inicial do site "https://www.gov.br/pt-br"
  Then eu devo ver o texto "gov.br"