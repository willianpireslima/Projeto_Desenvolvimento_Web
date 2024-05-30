import React from 'react';


export default function Inicio () {
    return (
        
    <section className="inicio container mt-5 me-5">
        <div className="row w-100">
            <div className="col-lg-8">
                <h1> <span className="text_destaque">Sistema ERP </span>Completo para Pequenas e Médias Empresas</h1><br/>
                
                <p>
                    Simplifique a gestão da sua empresa com um sistema de gestão empresarial completo e em nuvem, 
                    com suporte técnico direto. Integração total com ferramentas de produtividade mobile para 
                    ajudar sua empresa a ter mais produtividade e controle.
                </p>
            </div>
            <div className="col-lg-4 ">
                <img src="./images/ferramenta-de-bi.jpg" alt="power bi"  />
                <button type="button" className="btn btn-primary mt-3 ms-5">Fale Com Nossos Especialistas</button>
            </div>
        </div>
    </section>
    )
}