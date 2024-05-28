# Projeto_Desenvolvimento_Web
 uma lista de sites criados para aprender html,css é javascript é framework Bootstrap

## Visualização de Paginas Online

As Paginas 01 a 03 Utilizam as tecnologias HTML, CSS e Javascript
![javascript-vs-html-vs-css-1024x683](https://github.com/willianpireslima/Projeto_Desenvolvimento_Web/assets/158337302/f3f2f650-031f-441a-a316-28fb492e5487)

#### Pagina 1
https://raw.githack.com/willianpireslima/Projeto_Desenvolvimento_Web/main/pagina_01/index.html

#### Pagina 2
https://raw.githack.com/willianpireslima/Projeto_Desenvolvimento_Web/main/pagina_02/index.html

#### Pagina 3
https://raw.githack.com/willianpireslima/Projeto_Desenvolvimento_Web/main/pagina_03/index.html

Da Pagina 04 em diante é ultilizada o Bootstrap uma Framework front-end 
![js-vs-html-vs-css-boots](https://github.com/willianpireslima/Projeto_Desenvolvimento_Web/assets/158337302/f8eda976-4142-4a60-a110-a38748cf2988)

#### Pagina 4
https://raw.githack.com/willianpireslima/Projeto_Desenvolvimento_Web/main/pagina_04/index.html

#### Pagina 5
https://raw.githack.com/willianpireslima/Projeto_Desenvolvimento_Web/main/pagina_05/index.html

#### Pagina 6
https://raw.githack.com/willianpireslima/Projeto_Desenvolvimento_Web/main/pagina_06/index.html

#### Pagina 7
https://raw.githack.com/willianpireslima/Projeto_Desenvolvimento_Web/main/pagina_07/index.html

#### Pagina 8
https://raw.githack.com/willianpireslima/Projeto_Desenvolvimento_Web/main/pagina_08/index.html

#### Pagina 9

A página utiliza tecnologia de back-end para realizar operações CRUD, conectando-se ao banco de dados do computador. Para conseguir realizar as operações em server-side 
, foi utilizado ambiente de execução do Node.js.

![Node jsv3](https://github.com/willianpireslima/Projeto_Desenvolvimento_Web/assets/158337302/55534e7f-d9f0-4863-be6c-510f0a3eaf2a)

-Para a execução do ambiente é instalação dos módulos foram utilizados os seguintes comandos\
npm init -y\
npm install express ejs path mysql body-parser\
npm install nodemon --save-dev

-Foi utilizado o Vs Code como editor de código-fonte é a seguinte configuração nos arquivos para permitir atualização automática 

![vsCodenorademon](https://github.com/willianpireslima/Projeto_Desenvolvimento_Web/assets/158337302/2c145ca6-1a9a-4ee3-90c8-a326c3fa99b2)

-A execução do ambiente usa o comando : npm start

-A Database Utilizada do MySql foi a seguinte:

CREATE DATABASE site;\
USE site;

CREATE TABLE usuarios (\
  id int NOT NULL AUTO_INCREMENT,\
  nome varchar(40) DEFAULT NULL,\
  genero enum('M','F') DEFAULT NULL,\
  numero int DEFAULT NULL,\
  nasc date DEFAULT NULL,\
  PRIMARY KEY (id)\
);

-A pagina no cliente-side utiliza o localhost da porta : 3000

![nodejslocalhost](https://github.com/willianpireslima/Projeto_Desenvolvimento_Web/assets/158337302/c6cb6f38-b999-4794-a2a6-f32399e1ca2a)

#### Pagina 10

A Pagina usa a tecnologia back-end para fazer um chat simples.Ele cria um servidor web utilizando Express, configura o Socket.IO  que permite comunicação bidirecional em tempo real entre o servidor e o cliente via websockets. Websockets são um protocolo de comunicação que permite uma conexão persistente entre o cliente e o servidor, facilitando a transmissão de dados em tempo real., trata as conexões e mensagens dos clientes, e inicia o servidor na porta 3000.

-A execução do ambiente usa o comando : npm start
![chat_node js](https://github.com/willianpireslima/Projeto_Desenvolvimento_Web/assets/158337302/55f83284-0a60-4f5d-8c09-aa7cf6790ba5)
Para demonstrar o funcionamento do chat, foram abertas múltiplas janelas, ilustrando como as alterações em uma janela afetam simultaneamente as outras. Isso evidencia a capacidade do chat em fornecer uma experiência em tempo real, onde as interações são instantaneamente refletidas em todas as instâncias, garantindo uma comunicação fluida e sincronizada entre os usuários.

#### Pagina 11

Esta página é destinada à testagem de responsividade em diferentes tamanhos de tela, com foco especial em dispositivos móveis. Ela exibe a largura da tela e muda de cor conforme a largura, além de mostrar seu valor numérico. Uma demonstração interessante é que, quando a página atinge a largura de uma tela móvel, seu design é adaptado.

é possivel verificar a resposividade usando a ferramneta de inspecionar dos navegadores 
![pagina11_desktop](https://github.com/willianpireslima/Projeto_Desenvolvimento_Web/assets/158337302/bb091649-5c16-47c4-8484-e1565410d32a)
![pagina11_mobile](https://github.com/willianpireslima/Projeto_Desenvolvimento_Web/assets/158337302/1eb9d0f8-04e8-4598-8171-afcc5b982254)

#### Pagina 12

A seguinte página apresenta um back-end que utiliza o framework NestJS para criar uma API com um sistema de autenticação via login e senha, permitindo o acesso e a modificação de um banco de dados. Para isso, foi utilizado o ORM (Object Relational Mapping), especificamente o Prisma, para conectar-se ao gerenciador de banco de dados PostgreSQL. Além disso, foi utilizado o Docker para a configuração e geração do banco de dados.

![pagina12_base](https://github.com/willianpireslima/Projeto_Desenvolvimento_Web/assets/158337302/491a7e91-e3e2-4b88-a22a-0aa5a98aeb90)

#### Estrutura MVC do NestJs
![pagina12_estrutura](https://github.com/willianpireslima/Projeto_Desenvolvimento_Web/assets/158337302/67db0400-97d9-4071-a2c1-b01828c99df0)

O NestJs usa a seguinte estrutura : MVC (Model-View-Controller) é um padrão em design de software comumente usado para implementar interfaces de usuário, dados e lógica de controle. Ele enfatiza a separação entre a lógica de negócios e a exibição do software. Esta “separação de preocupações” proporciona uma melhor divisão do trabalho e uma melhor manutenção

#### Inicialização da API
![pagina12_inicio](https://github.com/willianpireslima/Projeto_Desenvolvimento_Web/assets/158337302/7e7f77fe-f9e9-4cca-a528-47c225f36380)
A inicialização da API segue uma estrutura organizada e eficiente.

#### Conexão entre Prisma e Database
![pagina12_exemplo](https://github.com/willianpireslima/Projeto_Desenvolvimento_Web/assets/158337302/6f28cec0-c28b-408a-86e2-44322c9457a2)
A conexão entre o Prisma e a base de dados

#### Rotas e Porta do Servidor 
![pagina_12_rotas](https://github.com/willianpireslima/Projeto_Desenvolvimento_Web/assets/158337302/72dfe496-7c2b-4a9e-b452-d3408a276494)
Visualização do output do terminal do VSCode, que mostra as rotas e a porta do servidor.

#### Solicitações de API com Postman
![pagina_12_castro](https://github.com/willianpireslima/Projeto_Desenvolvimento_Web/assets/158337302/899752f3-51ce-4fde-8fd5-f98229306e7a)
Passos para realizar o cadastro ou login e obter a chave de acesso para realizar solicitações de API com o Postman.

#### Operações CRUD na Database
![pagina_12_db](https://github.com/willianpireslima/Projeto_Desenvolvimento_Web/assets/158337302/2f4cdb21-4cef-498f-a7a3-444f9e84da53)

#### Template Engine com HBS

![pagina_12_interface](https://github.com/willianpireslima/Projeto_Desenvolvimento_Web/assets/158337302/ea0ce138-e468-42c1-b6af-9d0b017ed514)
Implementação de uma página visualmente atraente utilizando o template engine HBS para facilitar a demonstração e visualização.

#### Comandos Para Inicilizar os arquivos no terminal do VsCode

npm install // Instala as dependências do projeto\
npm run db:dev:restart // Inicia o PostgreSQL no Docker. Também é importante conectar o VSCode ao Docker\
npx prisma migrate dev // Aplica migrações de banco de dados usando o Prisma.\
npm run start:dev // Inicia a API no modo de desenvolvimento.






