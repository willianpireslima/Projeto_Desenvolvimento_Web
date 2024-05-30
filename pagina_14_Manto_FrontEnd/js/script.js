// Função genérica para mostrar a seção desejada
function mostrarSecao(secaoId) {
    // IDs das seções
    const secoes = [
        'sec_multiempresas', 'sec_forsa_vendas', 'sec_integrasos',
        'sec_busines_int', 'sec_coletor_dado', 'sec_pdv_varejo',
        'sec_ap_venda', 'sec_cont_prod'
    ];

    // Esconder todas as seções
    secoes.forEach(id => {
        document.getElementById(id).style.display = 'none';
    });

    // Mostrar a seção selecionada
    document.getElementById(secaoId).style.display = 'block';
}

// Funções específicas chamando a função genérica
function opcaoMultiempresas() {
    mostrarSecao('sec_multiempresas');
}

function opcaoVendas() {
    mostrarSecao('sec_forsa_vendas');
}

function opcaoIntegra() {
    mostrarSecao('sec_integrasos');
}

function opcaoBusines() {
    mostrarSecao('sec_busines_int');
}

function opcaoColetor() {
    mostrarSecao('sec_coletor_dado');
}

function opcaoPDV() {
    mostrarSecao('sec_pdv_varejo');
}

function opcaoApp() {
    mostrarSecao('sec_ap_venda');
}

function opcaoControl() {
    mostrarSecao('sec_cont_prod');
}

// Função para inicializar a página com uma seção visível
function inicializarPagina() {
    // Mostrar a seção de criação por padrão
    opcaoMultiempresas();
}

// Adicionar evento de carregamento da página
window.onload = inicializarPagina;
