import React from 'react';

export default function Conheca() {
    return (
    <section className='conheca container me-5 mt-5'>
       
        <h1 className="text-center">Mais de <span className="text_destaque">800+ </span>
        Empresas que confiam nas nossas soluções</h1>

        <div id="carouselExampleInterval" className="carousel slide mt-4 p-4" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="2000">
                    <div className="row">
                        <div className="col w-100"><img src="./images/logo-clientes-1.png" alt="Logo 1"/></div>
                        <div className="col w-100"><img src="./images/logo-clientes-2.png" alt="Logo 2"/></div>
                        <div className="col w-100"><img src="./images/logo-clientes-3.png" alt="Logo 3"/></div>
                        <div className="col w-100"><img src="./images/logo-clientes-4.png" alt="Logo 4"/></div>
                        <div className="col w-100"><img src="./images/logo-clientes-5.png" alt="Logo 5"/></div>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <div className="row">
                        <div className="col w-100"><img src="./images/logo-clientes-6.png" alt="Logo 6"/></div>
                        <div className="col w-100"><img src="./images/logo-clientes-7.png" alt="Logo 7"/></div>
                        <div className="col w-100"><img src="./images/logo-clientes-8.png" alt="Logo 8"/></div>
                        <div className="col w-100"><img src="./images/logo-clientes-9.png" alt="Logo 9"/></div>
                        <div className="col w-100"><img src="./images/logo-clientes-1.png" alt="Logo 1"/></div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="row">
                        <div className="col w-100"><img src="./images/logo-clientes-1.png" alt="Logo 1"/></div>
                        <div className="col w-100"><img src="./images/logo-clientes-2.png" alt="Logo 2"/></div>
                        <div className="col w-100"><img src="./images/logo-clientes-3.png" alt="Logo 3"/></div>
                        <div className="col w-100"><img src="./images/logo-clientes-4.png" alt="Logo 4"/></div>
                        <div className="col w-100"><img src="./images/logo-clientes-5.png" alt="Logo 5"/></div>
                    </div>
                </div>
            </div>
        </div>

        <h1 className="mt-3 text-center">Sistema ERP 
        <span className="text_destaque"> Atacado, Distribuição, Indústria e Lojas de Varejo</span> 
        para  com recursos e ferramentas específicas</h1>

    </section>
    )
}