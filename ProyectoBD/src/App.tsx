import { useEffect, useState } from "react";

interface Usuario {
  id: number;
  nombre: string;
}

function App() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/getUsers")
      .then((res) => res.json())
      .then((data) => {
        setUsuarios(data);
      })
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Usuarios desde el Backend</h1>

      {usuarios.map((u) => (
        <p key={u.id}>
          {u.id} - {u.nombre}
        </p>
      ))}
    </div>
  );
}

export default App;
