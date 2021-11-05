import React from 'react';
import styled from 'styled-components';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno'
import camila from './imgs/camila.jpg'
import labenu from './imgs/labenu.jpg'
import seccultura from './imgs/seccultura.png'
import email from './imgs/email.jpg'
import endereco from './imgs/endereco.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={camila}
          nome="Camila Santos Ferreira" 
          descricao="Oi, eu sou a Camila Santos Ferreira.
          Sou aluna do curso Dev Full Stack na Labenu. Amo aprender coisas novas :)"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>


     <div className="page-section-container">
       <CardPequeno
       imagem={email} nome="Email" descricao="Email: caliopeferrer@gmail.com"
       />
       </div> 

       <div className="page-section-container">
       <CardPequeno
       imagem={endereco}
       descricao="Avenida Senador Ricardo Batista"
       />
       </div> 

      <div className="page-section-container">
        <h2>Experiências</h2>
        <CardGrande 
          imagem={labenu} 
          nome="Labenu" 
          descricao="Aluna Dev Full Stack" 
        />
        
        <CardGrande 
          imagem={seccultura} 
          nome="Secretaria de Cultura e Economia Criativa" 
          descricao="Estágiaria Administrativa na Unidade de Monitoramento" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
