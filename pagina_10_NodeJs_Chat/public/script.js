// Cria uma conexão Socket.IO com o servidor na URL 'http://localhost:3000'
var socket = io('http://localhost:3000'); 

// Função para renderizar uma mensagem na interface do usuário
function renderMessage(message){
    // Adiciona uma nova div com a mensagem e o autor no elemento HTML com a classe 'messages'
    $('.messages').append('<div class="message"><strong>'+ message.author +': </strong> ' + message.message + '</div>');
    $('.messages').append('<div class="espaco"></div>') // Adionano um espaço entre as mensagens
}

// Evento acionado quando o servidor envia as mensagens anteriores para o cliente
socket.on('previousMessages', function(messages){
    // Itera sobre cada mensagem recebida e chama a função renderMessage para exibi-la na tela
    for (message of messages){
        renderMessage(message);
    }
});

// Evento acionado quando o servidor envia uma nova mensagem recebida
socket.on('receivedMessage', function(message){
    // Chama a função renderMessage para exibir a nova mensagem recebida na tela
    renderMessage(message);
})

// Evento acionado quando o formulário de envio de mensagem é enviado
$('#chat').submit(function(event){
    // Impede o comportamento padrão de envio do formulário
    event.preventDefault();

    // Obtém o autor e a mensagem digitada nos campos do formulário
    var author = $('input[name=username]').val();
    var message = $('input[name=message]').val();

    // Verifica se tanto o autor quanto a mensagem não estão vazios
    if(author.length && message.length){
        // Cria um objeto contendo o autor e a mensagem
        var messageObject = {
            author: author,
            message: message,
        };

        // Chama a função renderMessage para exibir a mensagem na tela
        renderMessage(messageObject);

        // Emite a mensagem para o servidor
        socket.emit('sendMessage', messageObject);

        // Limpa o campo de mensagem após o envio da mensagem
        $('input[name=message]').val('');
    }
})
