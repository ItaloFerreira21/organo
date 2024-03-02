import Personagem from "../Personagem";
import "./Time.css";


const Time = (props) => {
  const css = { backgroundColor: props.corSecundaria };

  return (
    <section className="time" style={css}>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      <div className="personagens">
        {props.personagens.map((personagem) => (
          <Personagem
            key={personagem.nome}
            nome={personagem.nome}
            raca={personagem.raca}
            imagem={personagem.imagem} //  acessar colaborador.imagem
          />
        ))}
      </div>
    </section>
  );
};

export default Time;
