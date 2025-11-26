import { useState } from "react";

function App() {
  const [contador, setContador] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Página Simple en React</h1>

      <p>Contador: {contador}</p>

      <button
        onClick={() => setContador(contador + 1)}
        style={{
          padding: "10px 20px",
          background: "blue",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Aumentar contador
      </button>
    </div>
  );
}

export default App;

