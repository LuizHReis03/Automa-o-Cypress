Feature: Verificação da presença da palavra "Serviços" no site

Scenario: Verificar presença do texto "Serviços" na página inicial
  Given que eu acesso a página inicial do site "https://www.gov.br/pt-br"
  Then eu devo ver o texto "Serviços"