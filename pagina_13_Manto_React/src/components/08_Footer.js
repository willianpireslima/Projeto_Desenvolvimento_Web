import React from 'react';

export default function Footer() {
    return (
        <section className="footer container-fluid me-5 mt-5">
            <div className='row'>
                <div className='col'>
                    <img src="./images/logo-mantobranca.png" alt=""/>
                </div>
                <div className='col'>
                    <strong>Empresa</strong>

                    <ul className="mt-3">
                        <li>Blog</li>
                        <li>Política de Privacidade</li>
                        <li>Política de Privacidade Aplicativos</li>
                        <li>Sobre</li>
                    </ul>
                </div>

                <div className='col'>
                    <strong>Materiais</strong>

                    <ul className="mt-3">
                        <li>Planilha Preço de Venda</li>
                        <li>Planilha de Sugestão de Compras</li>
                    </ul>
                </div>

                <div className='col'>
                    <strong>Segmentos</strong>

                    <ul className="mt-3">
                        <li>Atacadistas</li>
                        <li>Distribuidoras</li>
                        <li>Indústria</li>
                        <li>Varejo</li>
                    </ul>
                </div>

                <div className='col'>
                    <strong>Suporte</strong>

                    <ul className="mt-3">
                        <li>Central de Chamados</li>
                        <li>Suporte Remoto</li>
                        <li>Indústria</li>
                        <li>Varejo</li>
                    </ul>
                </div>

                <div className='col text-center'>
                    <strong>Social</strong>

                    <div className='footer_social row mt-3'>
                        <div className='col'>
                            <img src="./images/icone_instagram.png" alt=""/>
                        </div>
                        <div className='col'>
                            <img src="./images/icone_youtube.png" alt=""/>
                        </div>
                        <div className='col'>
                            <img src="./images/icone_facebook.png" alt=""/>
                        </div>
                    </div>
                </div>

                <p className="footer_rodape text-center mt-5">Manto Sistemas Softwares Empresariais <br/> 
                Todos os direitos reservados - 2024</p>
            </div>
        </section>
    )
}









