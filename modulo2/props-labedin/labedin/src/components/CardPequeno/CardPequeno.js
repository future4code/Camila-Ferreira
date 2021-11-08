import React from 'react';
import styled from 'styled-components';

const PequenoCardContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 10px;
    margin-bottom: 10px;
    border: 1px solid black;
    height: 100px;
    background-color: white;

    img{
        
        width: 30px;
    }    
`

function CardPequeno(props){
    return(
        <PequenoCardContainer>
            <div> 
            <img src={props.imagem}/>
            <p>{props.descricao}</p>
            </div>

        </PequenoCardContainer>
    )
}

export default CardPequeno;