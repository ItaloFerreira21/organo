import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";

function App() {
  const time = [
    {
      nome: "Saiyajin",
      corPrimaria: "#f2b691",
      corSecundaria: "#f3c8ac",
    },
    {
      nome: "Terráqueo",
      corPrimaria: "#c4c93e",
      corSecundaria: "#a8ac53",
    },
    {
      nome: "Androide",
      corPrimaria: "#f2b691",
      corSecundaria: "#f3c8ac",
    },
    {
      nome: "Namekuseijin",
      corPrimaria: "#c4c93e",
      corSecundaria: "#a8ac53",
    },
    {
      nome: "Outros",
      corPrimaria: "#f2b691",
      corSecundaria: "#f3c8ac",
    },
  ];

  const [personagens, setPersonagens] = useState([]);

  const aoNovoPersonagemAdicionado = (personagem) => {
    console.log(personagem);
    setPersonagens([...personagens, personagem]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        times={time.map((time) => time.nome)}
        aoPersonagemCadastrado={(personagem) =>
          aoNovoPersonagemAdicionado(personagem)
        }
      />

      {time.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          // aqui se passa todos os personagens, não precisa filtrar ainda, filtra dentro de Time
          personagens={personagens}
        />
      ))}
    </div>
  );
}

export default App;
