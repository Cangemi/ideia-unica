COMO RODAR O PROJETO BAIXADO
Instalar as dependências
### npm install

Rodar o projeto
### npm run dev

SEQUENCIA EXECUTADAS E BIBLIOTECAS INSTALADAS DURANTE A LIVE
Criar o arquivo package.json
### npm init

Instalar o react e o next [https://nextjs.org/docs/getting-started](https://nextjs.org/docs/getting-started) 
### npm install next react react-dom

Abra package.json e adicione o seguinte scripts:
"scripts": {
  "dev": "next",
  "build": "next build",
  "start": "next start"
}

Rodar o projeto
### npm run dev

Instalar o Bootstrap
### npm install --save bootstrap

Instalar a biblioteca para gerenciar o Bootstrap. [https://reactstrap.github.io/](https://reactstrap.github.io/) 
### npm install --save reactstrap

Instalar a biblioteca para inserir o CSS diretamente no HTML. [https://github.com/zeit/next-plugins/tree/master/packages/next-css](https://github.com/zeit/next-plugins/tree/master/packages/next-css) 
### npm install --save @zeit/next-css

Instalar a biblioteca de ícone
### npm i --save @fortawesome/fontawesome-svg-core  @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome

Realizar conexão com a API
### npm install --save axios