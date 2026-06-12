function Filtros({ setFiltro }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <button onClick={() => setFiltro("todas")}>
        Todas
      </button>

      <button onClick={() => setFiltro("ativas")}>
        Ativas
      </button>

      <button onClick={() => setFiltro("concluidas")}>
        Concluídas
      </button>
    </div>
  );
}

export default Filtros;