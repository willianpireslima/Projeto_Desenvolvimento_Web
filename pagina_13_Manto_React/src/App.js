import React from 'react';
import Navbar from "./components/01_Navbar";
import Inicio from "./components/02_Inicio";
import Recursos from "./components/03_recursos";
import Conheca from "./components/04_Conheca";
import Servicos from "./components/05_Servicos";
import Blog from "./components/06_Blog";
import Faq from "./components/07_Faq";
import Footer from "./components/08_Footer";

function App() {
  return (
    <div className="conteiner">
      <Navbar/>
      <Inicio/>
      <Recursos/>
      <Conheca/>
      <Servicos/>
      <Blog/>
      <Faq/>
      <Footer/>
    </div>
   
  );
}

export default App;