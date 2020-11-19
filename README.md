# Projeto Edux
## React Native

Este repositório visa criar uma aplicação para o projeto Edux, que seria uma plataforma educativa para alunos de instituições como o SENAI.

### Utilização:

## Primero passo

* Nós devemos ter a API que liga a aplicação com o banco de dados para que a aplicação rode perfeitamente, para isso, devemos ir <a href="http://github.com/jpedrodss/APIEdux">neste repositório</a> e seguir as instruções, após isso podemos retomar para o React Native da aplicação.

## Segundo passo

* Após clonar o repositório, você deverá ir no terminal no Visual Studio Code, ou pelo CMD, digitar <a href="https://classic.yarnpkg.com/pt-BR/docs/install/#windows-stable" rel="Tutorial de instalação do yarn">"yarn install"</a> para que assim ele tenha todos os módulos da aplicação e que funcione corretamente.

## Terceiro passo

### Selecionando ambiente de teste

* Para rodar e visualizar a aplicação pelo o próprio computador (visualizar pelo navegador), apenas execute "expo start" no terminal, e espere alguns segundos até que abra uma página chamada Metro Bundler com mais informações e ferramentas (DevTools), <br> <img width="500" src="https://i.imgur.com/ygoZbYO.png" alt="Esta é a página.">. <br> Se essa página não aparecer,  verifique se a aplicação já está rodando e tente apertar a tecla "d" para que abra caso não tenha erros na compilação. Quando já estiver nessa página, clique na opção "Run in web browser" na esquerda. Assim a aplicação já estará rodando no computador e você a visualizará e poderá usá-la.

* <strong> Será necessário o aplicativo "Expo" no seu celular, ele está disponível para iOS e Android.</strong> 

* Pelo o celular o processo tem apenas algumas mudanças. Será necessário que abra o CMD novamente, e digite ipconfig, após isso irá aparecer algumas informações de IP da sua máquina. Procure por "Endereço IPv4" ou "IPv4 Adress", anote o IP que aparecerá ao lado, volte ao Visual Studio Code e entre na pasta "utils", dentro desta pasta tem um arquivo JavaScript nomeado "constants". Abra-o e altere o IP com o que você anotou. Não altere a porta. Apenas o IP.

* Após ter feito essa alteração de IP na "constant", você pode usar a câmera do seu celular para ler o código QR que tem na página do Metro Bundler, ou por essa mesma página, você pode enviar um email para o seu celular e por lá, abrir a aplicação, mas essa opção você deverá ter uma conta Expo. Caso tenha uma conta Expo, você pode acessar diretamente o aplicativo que irá aparecer as aplicações que você estiver rodando. A conta que deve estar logada na máquina que está rodando, e no celular que será utilizado.

