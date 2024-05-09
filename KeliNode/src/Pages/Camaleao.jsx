// Importa o módulo React do pacote react
import React from 'react';
// Importa o hook useNavigate do pacote react-router-dom
import { useNavigate } from 'react-router-dom';
import '../App.css'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Sobre from '../components/Sobre'
import Galeria from '../components/Galeria'
import Titulo from '../components/Titulo'



function Home() {

const irPara = useNavigate()    
  // Define a função handleClick que será chamada ao clicar no botão
  const handleClick = () => {
    // Navegar para a página Sobre ao clicar em algum botão
    irPara('/sobre');
  };

  return (
    <div>
     <Header/>
     <Banner/>
     <Sobre/>
     <Galeria/>
     <button onClick={handleClick}>Saiba mais</button>
     <Titulo/>

  </div>
  )
}
export default Home
