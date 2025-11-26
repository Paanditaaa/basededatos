import { useEffect, useState } from "react";
import { getUsers } from "./api/users.ts";

function App() {
    const [users, setUsers] = useState<any[]>([]);

    useEffect(() => {
        getUsers().then((data) => setUsers(data));
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
            <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
                <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                    Lista de Usuarios
                </h1>

                {users.length === 0 ? (
                    <p className="text-center text-gray-500">Cargando usuarios...</p>
                ) : (
                    <ul className="space-y-3">
                        {users.map((u) => (
                            <li
                                key={u.id}
                                className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 shadow-sm hover:bg-gray-100 transition"
                            >
                                <p className="font-medium text-gray-700">{u.nombre}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default App;