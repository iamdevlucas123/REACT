import { useState, useEffect } from "react";    

function APIEffects() {
    const [usuario, setUsuario] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => setUsuario(data));
    }, [])

    return (
        <ul>
            {usuario.map((user) => (
                <li key={user.id}>{user.name} - {user.email}</li>))}
        </ul>
    )
}

export default APIEffects;