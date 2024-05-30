import React from 'react';

export default function Servicos() {
    return (
        <section className='servicos container me-5 mt-5'>
            
            <div className="row">
                <div  className="col">
                    <h1>Atacadistas</h1>
                    <p className="mt-5">
                        Reinvente sua operação atacadista com o Manto Sistemas: a solução 
                        definitiva para atacadistas que buscam agilidade, precisão no 
                        estoque e excelência em logística. Dê um salto em eficiência e lucratividade!
                    </p>

                    <button type="button" className="btn btn-primary mt-5">Saiba Mais</button>
                </div>

                <div  className="col">
                    <img src="images/sistema-erp-para-atacadistas.png" alt =""/>
                </div>
            </div>

            <div className="row mt-5">
                <div  className="col">
                    <h1>Distribuidoras</h1>
                    <p className="mt-5">
                    Controle completo, integrado e preciso dos processos de distribuição. 
                    Desde a entrada do pedido de venda, por App Força de Vendas, atendimento
                     direto ou auto atendimento, até a roteirização das entregas e acompanhamento das rotas.
                    </p>

                    <button type="button" className="btn btn-primary mt-5">Saiba Mais</button>
                </div>

                <div  className="col mt-5">
                    <img src="images/sistema-para-distribuidoras.png" alt =""/>
                </div>
            </div>

            <div className="row mt-5">
                <div  className="col">
                    <h1>Varejo</h1>
                    <p className="mt-5">
                    Revolucione sua loja de varejo com Manto Sistemas: a solução de ERP que traz automação 
                    comercial de ponta. Agilize vendas, gerencie estoques com eficácia e ofereça uma 
                    experiência de compra superior. É a inovação ao alcance do seu negócio!
                    </p>

                    <button type="button" className="btn btn-primary mt-5">Saiba Mais</button>
                </div>

                <div  className="col mt-5">
                    <img src="images/sistema-para-lojas-de-varejo.png" alt =""/>
                </div>
            </div>

            <div className="row mt-5">
                <div  className="col">
                    <h1>Indústrias</h1>
                    <p className="mt-5">
                    Eleve o padrão de sua indústria com Manto Sistemas: a solução de ERP 
                    desenhada para impulsionar a eficiência de fábricas e indústrias. 
                    Integração perfeita, gestão inteligente e resultados que fazem a diferença!
                    </p>

                    <button type="button" className="btn btn-primary mt-5">Saiba Mais</button>
                </div>

                <div  className="col">
                    <img src="images/sistema-erp-para-fabricas-e-industrias.png" alt =""/>
                </div>
            </div>
            
            <div className="row mt-5">
                <div  className="col mt-5">
                    <h1>Solicite nosso contato</h1>
                    <p className="mt-5">
                        Pronto para Transformar Seu Negócio? Fale Agora com um de Nossos Especialistas 
                        e Descubra o Plano Ideal para Sua Empresa com a Manto Sistemas!
                    </p>

                    <button type="button" className="btn btn-primary mt-5">Fale Com Nossos Especialistas</button>
                </div>     
            </div>
        </section>
    )
}