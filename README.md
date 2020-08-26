<h1 align="center">
    <img alt="Ecoleta" src="./assets/banner.png" />
</h1>

<h4 align="center">NextLevelWeek 1.0 🚀</h4>

<p align="center">
<img alt="GitHub language count" src="https://img.shields.io/github/languages/count/ViniciusCCO/nlw-01?color=%2304D361">

<img alt="Repository size" src="https://img.shields.io/github/repo-size/ViniciusCCO/nlw-01">

<a href="https://github.com/ViniciusCCO/nlw-01/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/ViniciusCCO/nlw-01">
</a>

<img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>

<ul>
 <li><a href="#computer-sobre-o-projeto">Sobre o projeto</a></li>
 <li><a href="#art-layout">Layout</a></li>
 <li><a href="#rocket-tecnologias">Tecnologias</a></li>
 <li><a href="#rocket-como-executar-o-projeto">Como executar o projeto</a></li>
 <li><a href="#memo-licença">Licença</a></li>
</ul>

## :computer: Sobre o projeto

♻️ Ecoleta - é uma forma de conectar empresas e entidades de coleta de resíduos orgânicos e inorgânicos as pessoas que precisam descartar seus resíduos de maneira ecológica.

As empresas ou entidades poderão se cadastrar na plataforma web enviando:
- uma imagem do ponto de coleta
- nome da entidade, email e whatsapp
- e o endereço para que ele possa aparecer no mapa
- além de selecionar um ou mais ítens de coleta: 
  - lâmpadas
  - pilhas e baterias
  - papéis e papelão
  - resíduos eletrônicos
  - resíduos orgânicos
  - óleo de cozinha

Os usuários terão acesso ao aplicativo móvel, onde poderão:
- navegar pelo mapa para ver as instituições cadastradas
- entrar em contato com a entidade através do E-mail ou do WhatsApp

Projeto desenvolvido durante a **NLW - Next Level Week** oferecida pela [Rocketseat](https://rocketseat.com.br).
O NLW é uma experiência online com muito conteúdo prático, desafios e hacks onde o conteúdo fica disponível durante uma semana.

## :art: Layout

O layout da aplicação está disponível no Figma:

<a href="https://www.figma.com/file/1SxgOMojOB2zYT0Mdk28lB/Ecoleta?node-id=136%3A546">
  <img alt="Made by ViniciusCCO" src="https://img.shields.io/badge/Acessar%20Layout%20-Figma-%2304D361">
</a>

### Mobile

<p align="center">
  <img alt="NextLevelWeek" title="#NextLevelWeek" src="./assets/home-mobile.png" width="200px">

  <img alt="NextLevelWeek" title="#NextLevelWeek" src="./assets/detalhes-mobile.svg" width="200px">
</p>

### Web

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="NextLevelWeek" title="#NextLevelWeek" src="./assets/web.svg" width="400px">

  <img alt="NextLevelWeek" title="#NextLevelWeek" src="./assets/sucesso-web.svg" width="400px">
</p>

## :rocket: Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io/)
- [TypeScript](https://www.typescriptlang.org/)

## :rocket: Como executar o projeto

<p>Podemos considerar este projeto como sendo divido em três partes:</p>
<ul>
  <li>Back End (pasta server)</li>
  <li>Front End (pasta web)</li>
  <li>Mobile (pasta mobile)</li>
</ul>

<p>💡Tanto o Front End quanto o Mobile precisam que o Back End esteja sendo executado para funcionar.</p>

### Pré-requisitos

<p>Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
<a href="https://git-scm.com">Git</a>, <a href="https://nodejs.org/">Node.js</a> e o <a href="https://yarnpkg.com/">Yarn</a>. 
Além disto é bom ter um editor para trabalhar com o código como o <a href="https://code.visualstudio.com/">VSCode</a>.</p>

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone https://github.com/ViniciusCCO/nlw-01

# Acesse a pasta do projeto no terminal/cmd
$ cd nlw-01

# Vá para a pasta server
$ cd server

# Instale as dependências
$ yarn

# Crie o banco de dados
$ yarn knex:migrate
$ yarn knex:seed

# Execute a aplicação
$ yarn dev

# O servidor inciará na porta:3333 - acesse http://localhost:3333 
```

### 🧭 Rodando a aplicação web (Front End)

```bash
# Clone este repositório
$ git clone https://github.com/ViniciusCCO/nlw-01

# Acesse a pasta do projeto no seu terminal/cmd
$ cd nlw-01

# Vá para a pasta da aplicação Front End
$ cd web

# Instale as dependências
$ yarn

# Execute a aplicação
$ yarn start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000
```

### 📱Rodando a aplicação mobile

<p>Para rodar a aplicação mobile você precisa de um celular com o app do expo instalado ou um emulador android/ios.</p>

```bash
# Clone este repositório
$ git clone https://github.com/ViniciusCCO/nlw-01

# Acesse a pasta do projeto no seu terminal/cmd
$ cd nlw-01

# Vá para a pasta da aplicação mobile
$ cd mobile

# Instale as dependências
$ yarn install

# Execute a aplicação
$ yarn start
```
<p>Depois leia o QRCode com o app do expo ou execute no emulador.</p>

## :memo: Licença

Este projeto esta sobe a licença MIT.

Feito com ❤️ por Vinicius Amorim 👋🏽 [Entre em contato!](https://www.linkedin.com/in/vinicius-amorim-6505/)