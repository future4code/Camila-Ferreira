import React from 'react';
import './CardPequeno.css'

function CardPequeno(props){
    return(
        <div className="pequenocard-container">
            <div> 
            <img src={props.imagem}/>
            <p>{props.descricao}</p>
            </div>

        </div>
    )
}

export default CardPequeno;