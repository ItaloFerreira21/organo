import "./Personagem.css";
import Personagem from './index';

const personagem = ({nome, imagem, raca}) => {
  return (
    <div className="personagemm">
      <div className="cabecalho">
        <img src={imagem} alt={nome} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{raca}</h5>
      </div>
    </div>
  );
};

export default personagem;
