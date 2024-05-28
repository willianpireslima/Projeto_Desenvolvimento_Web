function opcaoCriar() {
    document.getElementById('create_section').style.display = 'block';
    document.getElementById('read_section').style.display = 'none';
    document.getElementById('update_section').style.display = 'none';
    document.getElementById('delete_section').style.display = 'none';
}

function opcaoLer() {
    document.getElementById('create_section').style.display = 'none';
    document.getElementById('read_section').style.display = 'block';
    document.getElementById('update_section').style.display = 'none';
    document.getElementById('delete_section').style.display = 'none';
}

function opcaoAtualizar() {
    document.getElementById('create_section').style.display = 'none';
    document.getElementById('read_section').style.display = 'none';
    document.getElementById('update_section').style.display = 'block';
    document.getElementById('delete_section').style.display = 'none';
}

function opcaoDeletar() {
    document.getElementById('create_section').style.display = 'none';
    document.getElementById('read_section').style.display = 'none';
    document.getElementById('update_section').style.display = 'none';
    document.getElementById('delete_section').style.display = 'block';
}

// Função para inicializar a página com uma seção visível
function inicializarPagina() {
    // Mostrar a seção de criação por padrão
    opcaoCriar();
}

// Adicionar evento de carregamento da página
window.onload = inicializarPagina;

//Crude etapa Creat
async function criar() {
    const dadosAlterados = {};

    const titulo = document.getElementById('inputTitle');
    const descri = document.getElementById('inputDescription');
    const linki = document.getElementById('inputLink');

    if (!titulo.disabled)
        dadosAlterados.title = titulo.value;

    if (!descri.disabled)
        dadosAlterados.description = descri.value;

    if (!linki.disabled)
        dadosAlterados.link = linki.value;

    try {
        const resposta = await fetch('http://localhost:3333/bookmarks/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            },
            body: JSON.stringify(dadosAlterados)
        });

        if (resposta.ok) {
            alert("Novo dado criado com sucesso!");
            location.reload();
        } else {
            throw new Error('Falha ao criar novo dado');
        }
    } catch (erro) {
        console.error(erro);
    }
}

function adicionarEventosCriar() {
    const btnAlterar = document.getElementById('createButton_sec');
    btnAlterar.addEventListener('click', criar);
}

//Crude etapa Read
async function mostrar() {
    try {
        const resposta = await fetch('http://localhost:3333/bookmarks/read', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            }
        });

        if (!resposta.ok) {
            const res_erro = await resposta.text();
            const erro = JSON.parse(res_erro).message;
            alert('Erro: ' + erro);
            throw erro;
        }

        const alunos = await resposta.json();
        mostrarDadosTabela(alunos);

    } catch(erro) {
        console.error(erro);
    }
}

function mostrarDadosTabela(dados) {
    const tabela = document.getElementById('tabelaResultado').getElementsByTagName('tbody')[0];
    limparTabela(tabela);

    for (const iterator of dados) {
        const newRow = tabela.insertRow();

        const cellId = newRow.insertCell();
        cellId.appendChild(document.createTextNode(iterator.id));

        const cellCreatedAt= newRow.insertCell();
        cellCreatedAt.appendChild(document.createTextNode(iterator.createdAt));

        const cellUpdatedAt = newRow.insertCell();
        cellUpdatedAt.appendChild(document.createTextNode(iterator.updatedAt));

        const cellTitle = newRow.insertCell();
        cellTitle.appendChild(document.createTextNode(iterator.title));

        const cellDescription = newRow.insertCell();
        cellDescription.appendChild(document.createTextNode(iterator.description));

        const cellLink = newRow.insertCell();
        cellLink.appendChild(document.createTextNode(iterator.link));
    }
}

function limparTabela(tabela) {
    while (tabela.rows.length > 0) {
        tabela.deleteRow(0);
    }
}

//Crude etapa Update
async function atualizar() {
    const dadosAlterados = {};
  
    const titulo = document.getElementById('upTitle');
    const descri = document.getElementById('upDescription');
    const linki = document.getElementById('upLink');
    const id = document.getElementById('upID').value;

    if (!titulo.disabled)
        dadosAlterados.title = titulo.value;

    if (!descri.disabled)
        dadosAlterados.description = descri.value;

    if (!linki.disabled)
        dadosAlterados.link = linki.value;

    try {
        const resposta = await fetch(`http://localhost:3333/bookmarks/update/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            },
            body: JSON.stringify(dadosAlterados)
        });

        if (resposta.ok) {
            alert("Dados atualizados com sucesso!");
            location.reload();
        } else {
            const res_erro = await resposta.text();
            let erro;
            try {
                erro = JSON.parse(res_erro).message;
            } catch (e) {
                erro = res_erro;
            }
            if (resposta.status === 403) {
                alert('Erro 403: Acesso aos recursos negado. Verifique suas permissões.');
            } else if (resposta.status === 404) {
                alert('Erro 404: Recurso não encontrado. Verifique o ID e tente novamente.');
            } else {
                alert('Erro: ' + erro);
            }
            throw new Error('Verifique o ID e tente novamente.');
        }
    } catch (erro) {
        console.error('Erro:', erro);
        alert('Erro ao tentar atualizar os dados: ' + erro.message);
    }
}

function adicionarEventosUpdate() {
    const btnAlterar = document.getElementById('updateButton_sec');
    btnAlterar.addEventListener('click', atualizar);
}

//Crude etapa Delete
async function deletar() {

    const id = document.getElementById('inputID').value;

    try {
        const resposta = await fetch(`http://localhost:3333/bookmarks/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            },
        });

        if (resposta.ok) {
            alert("Dados deletados com sucesso!");
            location.reload();
        } else {
            const res_erro = await resposta.text();
            let erro;
            try {
                erro = JSON.parse(res_erro).message;
            } catch (e) {
                erro = res_erro;
            }
            if (resposta.status === 403) {
                alert('Erro 403: Acesso aos recursos negado. Verifique suas permissões.');
            } else if (resposta.status === 404) {
                alert('Erro 404: Recurso não encontrado. Verifique o ID e tente novamente.');
            } else {
                alert('Erro: ' + erro);
            }
            throw new Error('Verifique o ID e tente novamente.');
        }
    } catch (erro) {
        console.error('Erro:', erro);
        alert('Erro ao tentar deletar os dados: ' + erro.message);
    }
}

function adicionarEventosDelete() {
    const btnAlterar = document.getElementById('deleteButton_sec');
    btnAlterar.addEventListener('click', deletar);
}

async function main() {
    adicionarEventosCriar();
    adicionarEventosUpdate();
    adicionarEventosDelete();
    await mostrar();
}

main();

