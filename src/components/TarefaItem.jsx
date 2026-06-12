function TarefaItem({ tarefa, concluir, remover }) {
  return (
    <li
      style={{
        marginTop: "10px",
        display: "flex",
        gap: "10px",
        alignItems: "center",
      }}
    >
      <span
        style={{
          textDecoration: tarefa.concluida
            ? "line-through"
            : "none",
        }}
      >
        {tarefa.texto}
      </span>

      <button
        onClick={() => concluir(tarefa.id)}
      >
        ✔
      </button>

      <button
        onClick={() => remover(tarefa.id)}
      >
        ❌
      </button>
    </li>
  );
}

export default TarefaItem;