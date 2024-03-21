# ADOPTER-API V1
Bem-vindo à ADOPTER-API V1, uma API de estudo com foco na adoção de PETs. Este projeto é ideal para quem está buscando aprender e aprimorar suas habilidades em desenvolvimento backend, com ênfase em operações relacionadas à adoção de animais. A API é construída com a intenção de evoluir e melhorar continuamente.

## Como Executar
Para iniciar a API, execute o seguinte comando no terminal:


```sh 
npm run start 
```

Este é o comando principal para colocar a API em funcionamento. A execução é direta, sem muitos segredos.


## Variáveis de Ambiente
As variáveis de ambiente são cruciais para a configuração da API, especialmente para determinar qual banco de dados será utilizado. Abaixo, segue uma descrição de como configurá-las:

- MODE: Controla o tipo de banco de dados a ser utilizado. Se deixada em branco, a API usará um banco de dados SQLite para as operações. Isso é útil para desenvolvimento local ou testes rápidos.
Para usar um banco de dados diferente de SQLite, é necessário ajustar o valor de MODE e fornecer as informações de conexão específicas para o banco de dados escolhido. Por exemplo:

- DB_HOST: Endereço do host do banco de dados.
- DB_PORT: Porta de conexão com o banco de dados.
- DB_USER: Nome de usuário para acesso ao banco de dados.
- DB_PASS: Senha para o usuário do banco de dados.
- DB_NAME: Nome do banco de dados a ser utilizado.


## Exemplo de Configuração .env
```md
MODE=production
PORT=8080

DB_TYPE=postgres
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASS=api
DATABASE=mydatabase
```
Certifique-se de substituir os valores de exemplo pelas informações reais de conexão com o seu banco de dados.

## Contribuindo
Sinta-se livre para contribuir com o projeto. Toda contribuição é bem-vinda, seja na forma de sugestões, correções de bugs ou novas funcionalidades. Vamos juntos tornar a ADOPTER-API uma ferramenta cada vez melhor para a comunidade de desenvolvedores e entusiastas da adoção de PETs.
