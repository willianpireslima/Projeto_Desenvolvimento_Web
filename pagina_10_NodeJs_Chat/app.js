// Importando os módulos necessários
const express = require('express'); // Importa o módulo Express
const path = require('path'); // Importa o módulo Path

// Cria uma instância do aplicativo Express
const app = express();

// Cria um servidor HTTP utilizando o Express
const server = require('http').createServer(app);

// Configura o Socket.IO para utilizar o servidor HTTP criado
const io = require('socket.io')(server);

// Define o diretório onde os arquivos estáticos serão servidos
app.use(express.static(path.join(__dirname, 'public')));

// Configuração do mecanismo de visualização (view engine) para renderizar arquivos HTML
app.set('views', path.join(__dirname, 'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// Rota principal que renderiza o arquivo HTML index.html
app.use('/', (req, res) =>{
    res.render('index.html');
});

// Array para armazenar as mensagens
let messages = [];

// Evento 'connection' é acionado sempre que um cliente se conecta ao servidor via Socket.IO
io.on('connection', socket =>{
    console.log(`Socket conectado:  ${socket.id}`);
    
    // Envia as mensagens anteriores para o novo cliente conectado
    socket.emit('previousMessages', messages);

    // Evento 'sendMessage' é acionado quando um cliente envia uma mensagem
    socket.on('sendMessage', data =>{
        console.log(data);
        // Adiciona a nova mensagem ao array de mensagens
        messages.push(data);
        // Envia a mensagem recebida para todos os clientes, exceto o remetente
        socket.broadcast.emit('receivedMessage', data);
    });
});

// Inicia o servidor na porta 3000
server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});