# Teste Técnico API SCF Brazil

## 1. Visão Geral
Teste técnico da empresa SCF Brazil com propósito de melhorar API de gerenciamento de usuários, usando node.js e express.

<hr>

## Recursos
Usuários: Permite gerenciar usuários, incluindo criação, leitura, atualização e exclusão.
Acesso: Verifica a quantidade de acesso de cada usuário.

<hr>

## Endpoints
- GET /users - Retorna uma lista de usuários;
- GET /user/:id?name='nomeUsuário' - Retorna os detalhes de um usuário específico;
- POST /users/:id  - Cria um novo usuário;
- DELETE /users/:id?name='nomeUsuário' - Exclui um usuário existente;
- PUT /users/:id?name='nomeUsuário' - Atualiza os dados de um usuário existente;
- GET /users/acess?name='nomeUsuário' - Retorna a quantidade de vezes que um usuário foi lido;

<hr>

## Autenticação
Foi criado um sistema autenticação para criar, atualizar e delete usuários. Essas autenticações são passadas ao criar cada usuário inserindo permissões para as tarefas de post, put e update, para conseguir fazer essas operações deve-se passar o id do usuário na url que a mesma irá retornar se o usuário tem permissão para tal operação.

<hr>

## Tecnologias
- Node.js;
- Express;
- http-status-codes;
- nodemon;

<hr>

## **Requerimentos**
- Node.js;
- npm ou yarn;

## **Instalação**
```bash
npm install
# or
yarn install
```

## Iniciar Projeto

Primeiro, execute o servidor de desenvolvimento:

```bash
npm start
# or
yarn start
```

## **Autor e Agradecimento**
Eu Walker Lobato como desenvolvedor do projeto sou grato por poder participar desse teste técnico promovido pela SCF Brazil, pois foi um grande oportunidade para o desenvolvimento das minhas hard skills, aprimorando os meus conhecimentos nas tecnlogias Node.js e Express, além de aprimorar no meu desenvolvimento de APIs.





