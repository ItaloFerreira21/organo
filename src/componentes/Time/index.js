import Personagem from "../Personagem";
import "./Time.css";

const Time = (props) => {
  const css = { backgroundColor: props.corSecundaria };
  // Essa função verifica se a raça do personagem que o usuario colocou é igual ao props.nome (que se refere ao time/raça), se for ele guarda os dados desse personagem, se não for descarta.

  const teamCharacter = props.personagens.filter(
    //              o principal é entender que props.nome é diferente a cada vez que esse componente é montado, por exemplo:
    //    ao montar componente sayajin:  sayajin = sayajin : sim, então é adicionado
    //    ao montar o compoenente terráqueo= sayajin = terráqueo: não, é descartado
    (personagem) => personagem.raca === props.nome
  );
  return (
    <section className="time" style={css}>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      <div className="personagens">
        {/* Agora ao invés de mapear todos os personagenms que vieram com props.personagens, mapeia só os que a variavel teamCharater guardou */}
        {teamCharacter.map((personagem) => (
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
