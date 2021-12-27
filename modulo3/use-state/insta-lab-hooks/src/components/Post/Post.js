import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {


  const [curtido, setCurtido] = useState(false)

  const [numeroCurtidas, setnumeroCurtidas] = useState(0)

  const [enviarComentario, setEnviarComentario] = useState(false)

  const [numeroComentarios, setnumeroComentarios] = useState(0)

  const [todosComentarios, setTodosComentarios] = useState([]);


  const onClickCurtido = () => {
    if (curtido) {
      setCurtido(false);
      setnumeroCurtidas(0);
    } else {
      setCurtido(true);
      setnumeroCurtidas(1);
    }
  };

  const onClickComentario = () => {
    setEnviarComentario(!enviarComentario);
  }


  const enviarComentarios = (comentario) => {
    setnumeroComentarios(numeroComentarios + 1);
    const novaListaComentarios = [...todosComentarios, enviarComentario]
    setEnviarComentario(false);
    setTodosComentarios(novaListaComentarios);

  };

  const iconeCurtida = curtido ? iconeCoracaoPreto : iconeCoracaoBranco;

 const SecaocomComentario = enviarComentario ? (
    <SecaoComentario enviarComentarios={enviarComentario}/>
    ) : (
      todosComentarios.map((comentario) => {
        return (
          <CommentContainer>
            <p>{comentario}</p>
          </CommentContainer>
        );
      })
    );

  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'} />
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'} />

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtido}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
      </PostFooter>
      {SecaocomComentario}
    </PostContainer>
  )
}

export default Post