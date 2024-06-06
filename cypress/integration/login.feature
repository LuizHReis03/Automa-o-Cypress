Feature: Teste de Login e Seleção de Endereço

Scenario: Realizar login e selecionar endereço
  Given que estou na página de login
  When eu preencho o formulário com as credenciais válidas
  Then devo ser redirecionado para a página inicial
  When eu clico na opção "Encontre sua Agência"
  Then eu devo ser redirecionado para a página de busca de agências
  And a URL deve ser "https://mais.correios.com.br/app/index.php"
  And eu clico no botão Proximidade

Scenario: Login com credenciais inválidas
  Given que estou na página de login
  When eu preencho o formulário com credenciais inválidas
  And eu clico no botão de login
  Then devo ver a mensagem de erro "CPF informado inválido"

Scenario: Expressar satisfação
  Given que estou na página de login
  When eu preencho o formulário com as credenciais válidas
  Then devo ser redirecionado para a página inicial
  When eu clico na opção "Encontre sua Agência"
  Then eu devo ser redirecionado para a página de busca de agências
  And a URL deve ser "https://mais.correios.com.br/app/index.php"
  And eu clico no botão Proximidade
  When eu navego para a Central de Atendimento e Expressar Satisfação
  And eu preencho o formulário com os dados necessários
  Then devo ver a confirmação de sucesso

Scenario: Calcular Frete
  Given que estou na página de login
  When eu preencho o formulário com as credenciais válidas
  Then devo ser redirecionado para a página inicial
  When eu clico na opção "Encontre sua Agência"
  Then eu devo ser redirecionado para a página de busca de agências
  And a URL deve ser "https://mais.correios.com.br/app/index.php"
  And eu clico no botão Proximidade
  When eu navego para a Central de Atendimento e Expressar Satisfação
  And eu preencho o formulário com os dados necessários
  Then devo ver a confirmação de sucesso
  When eu calculo o frete
  Then devo ver o resultado do frete

Scenario: Exclusão de conta
  Given que estou na página de login
  When eu preencho o formulário com as credenciais válidas
  Then devo ser redirecionado para a página inicial
  And eu clico na opção "Excluir conta"
  Then eu clico em "Excluir esta conta"
