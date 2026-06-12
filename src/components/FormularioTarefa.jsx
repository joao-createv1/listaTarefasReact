import { useState } from "react";

function FormularioTarefa({ adicionarTarefa }) {
  const [texto, setTexto] = useState("");

  const enviar = (e) => {
    e.preventDefault();

    if (texto.trim() === "") return;

    adicionarTarefa(texto);
    setTexto("");
  };

  return (
    <form onSubmit={enviar}>
      <input
        type="text"
        placeholder="Digite uma tarefa"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />

      <button type="submit">
        Adicionar
      </button>
    </form>
  );
}

export default FormularioTarefa;