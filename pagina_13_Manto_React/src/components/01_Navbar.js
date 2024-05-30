import React from 'react';

export default function Navbar () {
    return (
        <nav className="navbar navbar-expand-lg bg-light navbar-light">
        <div className="container-fluid">
            <div className="row w-100 align-items-center">
                <div className="col-lg-4 d-flex justify-content-center justify-content-lg-start">
                    <img src="./images/logo-mantosistemas-site.png" alt="logo" />
                </div>
                <div className="col-lg-4 d-flex justify-content-center">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item me-4">
                                <strong>Início</strong>
                            </li>
                            <li className="nav-item me-4">
                                <strong>Soluções</strong>
                            </li>
                            <li className="nav-item me-4">
                                <strong>Segmentos</strong>
                            </li>
                            <li className="nav-item me-4">
                                <strong>Planos</strong>
                            </li>
                            <li className="nav-item me-4">
                               <strong>Blog</strong>
                            </li>
                            <li className="nav-item me-4">
                                <strong>Sobre</strong>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 d-flex justify-content-center justify-content-lg-end">
                    <button type="button" className="btn btn-primary">Fale Conosco</button>
                </div>
            </div>
        </div>
    </nav>
    
    );
}