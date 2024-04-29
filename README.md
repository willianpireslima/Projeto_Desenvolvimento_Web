# Projeto_Desenvolvimento_Web
 uma lista de sites criados para aprender html,css é javascript é framework Bootstrap

## Visualização de Paginas Online

As Paginas 01 a 03 Ultilizam as tecnologias HTML, CSS e Javascript
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

