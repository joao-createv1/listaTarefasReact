import { useState } from "react";
import { ThemeProvider } from "styled-components";

import Header from "./components/Header";
import FormularioTarefa from "./components/FormularioTarefa";
import TarefaItem from "./components/TarefaItem";
import Filtros from "./components/Filtros";

import GlobalStyle from "./styles/GlobalStyle";
import { lightTheme, darkTheme } from "./styles/themes";

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [filtro, setFiltro] = useState("todas");
  const [temaEscuro, setTemaEscuro] = useState(false);

  const adicionarTarefa = (texto) => {
    setTarefas([
      ...tarefas,
      {
        id: Date.now(),
        texto,
        concluida: false,
      },
    ]);
  };

  const concluir = (id) => {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id
          ? {
              ...tarefa,
              concluida: !tarefa.concluida,
            }
          : tarefa
      )
    );
  };

  const remover = (id) => {
    setTarefas(
      tarefas.filter(
        (tarefa) => tarefa.id !== id
      )
    );
  };

  const tarefasFiltradas = tarefas.filter(
    (tarefa) => {
      if (filtro === "ativas")
        return !tarefa.concluida;

      if (filtro === "concluidas")
        return tarefa.concluida;

      return true;
    }
  );

  return (
    <ThemeProvider
      theme={
        temaEscuro
          ? darkTheme
          : lightTheme
      }
    >
      <GlobalStyle />

      <div
        style={{
          maxWidth: "600px",
          margin: "40px auto",
          padding: "20px",
        }}
      >
        <Header />

        <button
          onClick={() =>
            setTemaEscuro(!temaEscuro)
          }
          style={{
            marginTop: "15px",
            marginBottom: "15px",
          }}
        >
          {temaEscuro
            ? "Tema Claro"
            : "Tema Escuro"}
        </button>

        <FormularioTarefa
          adicionarTarefa={adicionarTarefa}
        />

        <Filtros
          setFiltro={setFiltro}
        />

        <ul
          style={{
            marginTop: "20px",
            listStyle: "none",
          }}
        >
          {tarefasFiltradas.map(
            (tarefa) => (
              <TarefaItem
                key={tarefa.id}
                tarefa={tarefa}
                concluir={concluir}
                remover={remover}
              />
            )
          )}
        </ul>
      </div>
    </ThemeProvider>
  );
}

export default App;