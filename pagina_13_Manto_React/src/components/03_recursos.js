import React, { useState, useEffect } from 'react';

export default function Recursos() {
    const [secaoVisivel, setSecaoVisivel] = useState('sec_multiempresas');

    useEffect(() => {
        setSecaoVisivel('sec_multiempresas');
    }, []);

    const secoes = [
        'sec_multiempresas', 'sec_forsa_vendas', 'sec_integrasos',
        'sec_busines_int', 'sec_coletor_dado', 'sec_pdv_varejo',
        'sec_ap_venda', 'sec_cont_prod'
    ];

    return (
    <section className="recursos container me-5 mt-5">
        <div className="row flex-nowrap">
            <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light">
                <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-dark" id="conBut">
                    {secoes.map((secao, index) => (
                        <button 
                            key={index} 
                            className="btn btn-primary mt-2 w-100" 
                            onClick={() => setSecaoVisivel(secao)}
                        >
                            {secao.replace('sec_', '').replace('_', ' ')}
                        </button>
                    ))}
                </div>
            </div>
            <div className="col py-3">
                {secaoVisivel === 'sec_multiempresas' && (
                    <div id="sec_multiempresas">
                        <div className="row">
                            <div className="col">
                                <br /><br /><br />
                                <h1>Sistema ERP Multiempresas</h1>
                                <p>
                                    Maximize seu potencial empresarial com Manto Sistemas, a solução ERP multiempresa 
                                    desenhada para otimizar a gestão e impulsionar o crescimento dos negócios.
                                </p>
                                <span className="text_destaque">clique e conheça &gt; &gt;</span>
                            </div>
                            <div className="col">
                                <img src="./images/controle-de-estoque.png" alt="" className="w-100" />
                            </div>
                        </div>
                    </div>
                )}
                {secaoVisivel === 'sec_forsa_vendas' && (
                    <div id="sec_forsa_vendas">
                        <div className="row">
                            <div className="col">
                                <br /><br /><br />
                                <h1>Aplicativo Força de Vendas</h1>
                                <p>
                                    Impulsione suas vendas com a eficiência que só o aplicativo Manto Sistemas oferece: 
                                    a ferramenta definitiva para equipes de vendas que buscam superar metas e conquistar 
                                    resultados extraordinários. Nosso sistema força de vendas trabalha integrado nativamente 
                                    com o ERP, sem necessidade de sincronizadores e serviços extras.
                                </p>
                                <span className="text_destaque">clique e conheça &gt; &gt;</span>
                            </div>
                            <div className="col">
                                <img src="./images/app-forca-de-vendas-indicadores.png" alt="" className="w-100" />
                            </div>
                        </div>
                    </div>
                )}
                {secaoVisivel === 'sec_integrasos' && (
                    <div id="sec_integrasos">
                        <div className="row">
                            <div className="col">
                                <br /><br /><br />
                                <h1>Integração com E-Commerce</h1>
                                <p>
                                    Impulsione seu comércio eletrônico com Manto Sistemas: a solução ERP 
                                    que integra perfeitamente com e-commerce e marketplace. Gerencie vendas, 
                                    estoques e logística em uma única plataforma, potencializando sua presença 
                                    online e maximizando resultados!
                                </p>
                                <span className="text_destaque">clique e conheça &gt; &gt;</span>
                            </div>
                            <div className="col">
                                <img src="./images/integracoes.png" alt="" className="w-100" />
                            </div>
                        </div>
                    </div>
                )}
                {secaoVisivel === 'sec_busines_int' && (
                    <div id="sec_busines_int">
                        <div className="row">
                            <div className="col">
                                <br /><br /><br />
                                <h1>Plataforma de BI integrada</h1>
                                <p>
                                    Descubra o poder do Business Intelligence com Manto Sistemas: 
                                    tome decisões mais inteligentes, rápidas e baseadas em dados. 
                                    Transforme informações em insights e impulsione seu negócio para 
                                    o próximo nível com nossa solução de BI integrada!
                                </p>
                                <span className="text_destaque">clique e conheça &gt; &gt;</span>
                            </div>
                            <div className="col">
                                <img src="./images/dashboard-business-intelligence.png" alt="" className="w-100" />
                            </div>
                        </div>
                    </div>
                )}
                {secaoVisivel === 'sec_coletor_dado' && (
                    <div id="sec_coletor_dado">
                        <div className="row">
                            <div className="col">
                                <br /><br /><br />
                                <h1>Coletor de Dados</h1>
                                <p>
                                    Transforme a Gestão de Estoque: Contagem Rápida, Precisa e Eficiente! 
                                    Reduza Erros, Economize Tempo e Otimize Recursos com nosso App. Pronto 
                                    para Revolucionar seu Inventário?
                                </p>
                                <span className="text_destaque">clique e conheça &gt; &gt;</span>
                            </div>
                            <div className="col">
                                <img src="./images/app-coletor-de-dados.png" alt="" className="w-100" />
                            </div>
                        </div>
                    </div>
                )}
                {secaoVisivel === 'sec_pdv_varejo' && (
                    <div id="sec_pdv_varejo">
                        <div className="row">
                            <div className="col">
                                <br /><br /><br />
                                <h1>Módulo PDV</h1>
                                <p>
                                    Revolucione sua loja de varejo com Manto Sistemas: a solução de ERP que traz 
                                    automação comercial de ponta. Agilize vendas, gerencie estoques com eficácia e 
                                    ofereça uma experiência de compra superior. É a inovação ao alcance do seu negócio!
                                </p>
                                <span className="text_destaque">clique e conheça &gt; &gt;</span>
                            </div>
                            <div className="col">
                                <img src="./images/modulo-pdv.png" alt="" className="w-100" />
                            </div>
                        </div>
                    </div>
                )}
                {secaoVisivel === 'sec_ap_venda' && (
                    <div id="sec_ap_venda">
                        <div className="row">
                            <div className="col">
                                <br /><br /><br />
                                <h1>Aplicativo de Venda Direta</h1>
                                <p>
                                    Eleve a Experiência de Compra com o Seu App Personalizado e Integrado ao ERP. 
                                    Disponível em Android e iOS, sua Loja ao Alcance 24/7!
                                </p>
                                <span className="text_destaque">clique e conheça &gt; &gt;</span>
                            </div>
                            <div className="col">
                                <img src="./images/appshop.png" alt="" className="w-100" />
                            </div>
                        </div>
                    </div>
                )}
                {secaoVisivel === 'sec_cont_prod' && (
                    <div id="sec_cont_prod">
                        <div className="row">
                            <div className="col">
                                <br /><br /><br />
                                <h1>Módulo de Controle de Produção</h1>
                                <p>
                                    Transforme sua linha de produção com Manto Sistemas: o controle de produção 
                                    que eleva a eficiência, reduz custos e maximiza a qualidade. Descubra a evolução 
                                    em gestão de produção!
                                </p>
                                <span className="text_destaque">clique e conheça &gt; &gt;</span>
                            </div>
                            <div className="col">
                                <img src="./images/ordem-de-producao-composicao.png" alt="" className="w-100" />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </section>
    );
}
