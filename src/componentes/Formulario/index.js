import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = (props) => {
  const [nome, setNome] = useState('')
  const [imagem, setImagem] = useState('')
  const [raca, setRaca] = useState('')


  const aoSalvar = (e) => {
    e.preventDefault()
    
    props.aoPersonagemCadastrado({
      nome, 
      imagem,
      raca
    })
  }
  return (
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card</h2>
        <CampoTexto 
          obrigatorio={true} 
          label="nome" 
          placeholder="Digite nome do personagem"
          valor={nome}
          aoAlterado={setNome} />

        <CampoTexto  
          label="Imagem" 
          placeholder= "Digite o endereço da imagem" 
          valor={imagem}
          aoAlterado={setImagem} />
           
        <ListaSuspensa 
          obrigatorio={true} 
          label="Raça" 
          itens={props.times}
          valor={raca}
          aoAlterado={setRaca} />

        <Botao span="Criar card" />
      </form>
    </section>
  )
}

export default Formulario