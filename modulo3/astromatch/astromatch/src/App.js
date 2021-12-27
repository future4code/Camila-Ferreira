import React from 'react';
import styled from 'styled-components'
// import telamatches from './components/TelaMatches'
import heartbg from './imgs/heartbg.jpg'
import { createGlobalStyle } from 'styled-components';
import axios from 'axios'

const GlobalStyle = createGlobalStyle`
body{
  background-image: url(${heartbg})
  
}
  `

const AstromatchContainer = styled.section`
width: 500px;
height: 500px;
border: 3px solid #CD064D;
border-radius: 15px;
position: fixed;
left: 30%;
top: 10%;
background-color: #A2D3E9;
margin: auto 0px;
box-shadow: 3px 4px 2px 2px #D01110;
text-align: center;
margin: auto 0px;

p{
  text-align: center;
}

div{
border-bottom: solid 2px #CD064D;
background-color: #F7BEC0;

}

div>p{
color: #D01110;
font-size: 1.5em;
font-weight: bold;
animation-name: mymove;
animation-duration: 5s;
display: flex;
flex-direction: row;
justify-content: space-between;
align-content: center;
align-self: center;
align-items: center;
margin: 0px;

}

button{
  background-color: #D01110;
  color: white;
 
}
`
// const nomeMatch = () => {
// const [nomeMatch, setNomeMatch ] = useState()
// }

export default class App extends React.Component {


  pegaMatch = () => {
    const url =("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/camila")
    axios.get(url)
    .then((res)=>console.log(res))
    .catch((err) => console.log("deu erro"))
  };

  componentDidMount(){
    this.pegaMatch();
  }

render() {
  return <AstromatchContainer><GlobalStyle />
      <div>
        <p>ASTROMATCH <button onClick={() => this.props.mudarTela('telamatches')}>Ver Matchs</button> </p>
      </div>
      <p>Oi</p>
      <button>Like</button> <button>Dislike</button>
    </AstromatchContainer>
}
}

