import { useEffect, useState } from "react";
import { getUsers } from "./api/users";

function App() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  return (
    <div>
      <h1>Usuarios</h1>
      {users.map((u) => (
        <p key={u.id}>{u.nombre}</p>
      ))}
    </div>
  );
}
export default App;
