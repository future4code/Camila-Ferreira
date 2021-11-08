import React from 'react';
import styled from 'styled-components'

const BigCardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
    background-color: white;

    h4 {
        margin-bottom: 15px;
    }    

    div {
        display: flex;
        flex-direction: column;
        justify-items: flex-start;
    `
const BigCardImgs = styled.div`

img {
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
}
` 


function CardGrande(props) {
    return (
        <BigCardContainer>
           <BigCardImgs> <img src={ props.imagem } /></BigCardImgs>
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </BigCardContainer>
    )
}

export default CardGrande;