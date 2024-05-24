<h1 align="center">Innovatech - Desafio C2S</h1>
Este repositório contém o código do aplicativo Innovatech, desenvolvido em React Native com TypeScript utilizando o Expo Managed Workflow para o desafio proposto pela empresa C2S. O aplicativo permite aos usuários filtrar, buscar e obter usuários de forma eficiente a partir da API randomuser. 
Ele utiliza armazenamento local com a biblioteca Async Storage para armazenar dados localmente no dispositivo.

## Capturas de Tela
![Screens1](https://github.com/eduardojigub/innovatech/assets/47367373/4447bdc0-1173-4557-9522-b64813f6b3e4)
![Screens2](https://github.com/eduardojigub/innovatech/assets/47367373/660222c4-a696-4a87-8447-13ac352fd51d)

## Funcionalidades

* Filtrar um usuário por nome
* Filtrar um usuário por gênero
* Busca infinita e rolagem ao alcançar o fim da lista
* Obter usuário da randomuserAPI


## Pré-requisitos

Antes de começar, certifique-se de que o seguinte software está instalado no seu ambiente de desenvolvimento:

* Node.js
* Expo CLI
* Yarn (or npm, como alternativa))

## Configuração do Projeto 

Clone este repositório para sua máquina local:

```bash
git clone git@github.com:eduardojigub/innovatech.git
```

Navegue até o diretório do projeto:

```bash
cd innovatech
```

Instale as dependências do projeto:

```bash
yarn install
```

or

```bash
npm install
```

Inicie o Expo:

```bash
npx expo start
```

OR - ||
Você também pode baixar o apk e instalar diretamente no seu telefone Android usando o link abaixo:
<a href="https://drive.google.com/file/d/13lHTpDjjCgGAI7mdyQkOIJoTet7pbS-F/view?usp=drive_link">Baixe aqui o APK</a>

## Estrutura do Projeto 
O projeto segue esta estrutura de diretórios:

```bash
src/
├── assets/
│ ├── images/
│ └── fonts/
├── components/
│ ├── Card.tsx
│ └── EmptyListComponent.tsx
│ └── FilterModal.tsx
│ └── Header.tsx
│ └── UserModal.tsx
├── context/
│ ├── UserContext.tsx/
├── interfaces/
│ ├── user.ts/
├── screens/
│ ├── MainScreen.tsx
├── styles/
│ └── theme.ts
└── utils/
   └── api.ts
```

## Bibliotecas e Ferramentas Utilizadas


* React Native
* TypeScript
* Expo Managed Workflow
* Async Storage
* ESLint (guia de estilo Airbnb)
* Mapeamento de Caminhos com Babel e TypeScript
* Use Context para gerenciamento de estado


## Contribuindo
* Contribuições são bem-vindas! Se você tiver sugestões, correções de bugs ou melhorias para o aplicativo, sinta-se à vontade para abrir uma issue ou enviar um pull request.

Por favor, siga as melhores práticas e siga as diretrizes do ESLint e Prettier para manter a consistência do código.

Contato
Se você tiver alguma dúvida ou precisar entrar em contato comigo, pode me enviar um e-mail para eduardobrunoit@gmail.com

Obrigado por visitar este repositório! Espero que este aplicativo seja útil para você.
