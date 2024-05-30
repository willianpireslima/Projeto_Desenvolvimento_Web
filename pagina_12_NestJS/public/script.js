// Função chamada quando o formulário de login é submetido
function signin(evento, tipo) {
    // Previne o comportamento padrão do formulário (que é recarregar a página)
    evento.preventDefault();

    // Obtém os elementos do input de email e senha do formulário
    const txtEmail = document.getElementById('inputEmail');
    const txtSenha = document.getElementById('inputSenha');

    // Obtém os valores dos campos de email e senha
    const email = txtEmail.value;
    const senha = txtSenha.value;

    // Verifica se o campo senha está vazio
    if (senha === '') {
        // Exibe um alerta se a senha estiver vazia e interrompe a execução da função
        alert('Preencha sua Senha!');
        return;
    }

    // Verifica se o campo email está vazio
    if (email === '') {
        // Exibe um alerta se o email estiver vazio e interrompe a execução da função
        alert('Preencha seu Email!');
        return;
    }

    // Define a URL de acordo com o tipo de operação
    const url = tipo === 'signin' ? 'http://localhost:3333/auth/signin' : 'http://localhost:3333/auth/signup';

    // Faz uma requisição HTTP POST para a URL de autenticação
    fetch(url, {
        method: 'POST', // Método HTTP
        headers: {
            'Content-Type': 'application/json' // Define o tipo de conteúdo como JSON
        },
        // Converte o email e senha para um objeto JSON e o envia no corpo da requisição
        body: JSON.stringify({
            email: email,
            password: senha
        })
    })
    // Trata a resposta da requisição
    .then(response => {
        // Verifica se a resposta não é OK (status diferente de 200)
        if (!response.ok) {
            // Lança um erro com o status da resposta
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        // Converte a resposta para JSON
        return response.json();
    })
    // Lida com o JSON retornado pela API
    .then(jwt => {
        // Armazena o token JWT no localStorage se for sign-in
        if (tipo === 'signin') {
            localStorage.setItem('access_token', jwt.access_token);
            window.location.href = '../crud_bookmarks/crud_bookmarks.html'; 
        } else {
            alert('Cadastro realizado com sucesso! Faça o login.');
        }
    })
    // Trata qualquer erro que ocorra durante o processo de requisição ou manipulação de resposta
    .catch(error => {
        console.error('Erro ao processar a resposta: ', error);
    });
}

// Função principal que configura os eventos de submissão do formulário de login
function main() {
    // Obtém os botões de sign-in e sign-up pelo ID
    const signinButton = document.getElementById('signinButton');
    const signupButton = document.getElementById('signupButton');

    // Adiciona ouvintes de eventos de submissão aos botões
    signinButton.addEventListener('click', function (evento) {
        signin(evento, 'signin');
    });
    
    signupButton.addEventListener('click', function (evento) {
        signin(evento, 'signup');
    });
}

// Chama a função principal para configurar os eventos quando o script é carregado
main();
