import React from 'react';

export default function Faq() {
    return (
        <section className="faq container me-5 mt-5">
        
            <h1 className="text-center">Perguntas Frequentes FAQ </h1>

            <div className="collapsible-header mt-5" data-toggle="collapse" data-target="#collapseExample1">
                <h5>O que é o sistema ERP da Manto Sistemas?</h5>
            </div>
            <div className="collapse" id="collapseExample1">
                <div className="card card-body">
                É uma solução integrada de planejamento de recursos empresariais, desenhada para otimizar e 
                simplificar a gestão de vários segmentos de negócios.
                </div>
            </div>

            <div className="collapsible-header mt-3" data-toggle="collapse" data-target="#collapseExample2">
                <h5>Quais segmentos o sistema Manto Sistemas atende?</h5>
            </div>
            <div className="collapse" id="collapseExample2">
                <div className="card card-body">
                Nosso sistema é ideal para varejo, atacado, indústria, e-commerce, distribuidoras e 
                mais, oferecendo soluções específicas para cada necessidade.
                </div>
            </div>

            <div className="collapsible-header mt-3" data-toggle="collapse" data-target="#collapseExample3">
                <h5>Como o sistema Manto Sistemas pode ajudar no crescimento do meu negócio?</h5>
            </div>
            <div className="collapse" id="collapseExample3">
                <div className="card card-body">
                Através da integração de processos, automação de tarefas e fornecimento de insights valiosos, 
                nosso sistema auxilia na tomada de decisões estratégicas e no crescimento sustentável.
                </div>
            </div>

            <div className="collapsible-header mt-3" data-toggle="collapse" data-target="#collapseExample4">
                <h5>O sistema é fácil de usar?</h5>
            </div>
            <div className="collapse" id="collapseExample4">
                <div className="card card-body">
                Sim! Priorizamos uma interface intuitiva e suporte completo para garantir uma 
                experiência de usuário fluida e eficiente.
                </div>
            </div>

            <div className="collapsible-header mt-3" data-toggle="collapse" data-target="#collapseExample5">
                <h5>É possível integrar o sistema Manto Sistemas com outras plataformas?</h5>
            </div>
            <div className="collapse" id="collapseExample5">
                <div className="card card-body">
                Com certeza! Nosso sistema foi desenvolvido para se integrar facilmente com diversas 
                plataformas, incluindo e-commerce e marketplaces, para uma gestão mais eficiente e centralizada.
                </div>
            </div>

            <div className="collapsible-header mt-3" data-toggle="collapse" data-target="#collapseExample6">
                <h5>O que é o aplicativo de força de vendas da Manto Sistemas e como ele pode beneficiar minha equipe?</h5>
            </div>
            <div className="collapse" id="collapseExample6">
                <div className="card card-body">
                Nosso aplicativo de força de vendas é uma ferramenta móvel desenvolvida para maximizar o desempenho de 
                vendas. Ele permite acesso instantâneo a informações de produtos, gerenciamento de pedidos e 
                acompanhamento de clientes em tempo real, aumentando a eficiência e a eficácia da equipe de vendas.
                </div>
            </div>

            <div className="collapsible-header mt-3" data-toggle="collapse" data-target="#collapseExample7">
                <h5>Preciso de infraestrutura de servidores para usar o sistema Manto Sistemas?</h5>
            </div>
            <div className="collapse" id="collapseExample7">
                <div className="card card-body">
                Não, nosso sistema é baseado na nuvem, eliminando a necessidade de investimento e manutenção de servidores. 
                Isso proporciona maior flexibilidade, segurança de dados e acesso em qualquer lugar, a qualquer momento.
                </div>
            </div>

            <div className="collapsible-header mt-3" data-toggle="collapse" data-target="#collapseExample8">
                <h5>Como o Business Intelligence  BI integrado no sistema Manto Sistemas pode ajudar meu negócio?</h5>
            </div>
            <div className="collapse" id="collapseExample8">
                <div className="card card-body">
                O BI integrado oferece análises avançadas e insights valiosos sobre seu negócio. Com ele, 
                você pode facilmente visualizar tendências, monitorar KPIs e tomar decisões baseadas em 
                dados para otimizar operações e impulsionar o crescimento.
                </div>
            </div>

            <div className="collapsible-header mt-3" data-toggle="collapse" data-target="#collapseExample9">
                <h5>Como posso começar a usar o sistema Manto Sistemas?</h5>
            </div>
            <div className="collapse" id="collapseExample9">
                <div className="card card-body">
                Entre em contato conosco através do nosso site ou redes sociais para uma demonstração 
                personalizada e informações sobre implementação.
                </div>
            </div>
        </section>
    ) 
}