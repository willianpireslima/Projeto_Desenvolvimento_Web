import React from 'react';

export default function Blog() {
    return (
        <section className='blog container me-5 mt-5'>
            <h1>Blog</h1>
            
            <p>Acesse nosso blog e fique por dentro das principais novidades tecnológicas voltadas a gestão de empresas.</p>
            
            <div className='row'>
                <div className = "col">
                    <div className="card">
                        <img src="./images/sistema-erp-sistema-de-estoque-e-vendas.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Sistema de Estoque e Vendas: Otimizando a Gestão Empresarial</h5>
                            <p className="card-text">A gestão eficiente de estoque e vendas é crucial para....</p>
                        </div>
                    </div>
                </div>
                <div className = "col">
                    <div className="card">
                        <img src="./images/sistema-erp-para-distribuidora-de-medicamentos.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Sistema para Distribuidora de Medicamentos: A Solução Completa para os Desafios do Setor</h5>
                            <p className="card-text">As distribuidoras de medicamentos enfrentam uma série de desafios únicos,....</p>
                        </div>
                    </div>
                </div>
                <div className = "col">
                    <div className="card">
                        <img src="./images/sistema-erp-sistema-de-controle-de-producao.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Sistema de Controle de Produção: A Chave para a Eficiência e Competitividade</h5>
                            <p className="card-text">Em um cenário industrial cada vez mais competitivo e dinâmico,....</p>
                        </div>
                    </div>
                </div>
                <div className = "col">
                    <div className="card">
                        <img src="./images/sistema-erp-para-pequenas-empresas.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Sistema ERP para Pequenas Empresas: Tecnologia para Simplificar a Gestão</h5>
                            <p className="card-text">A gestão de uma pequena empresa envolve uma série de....</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}