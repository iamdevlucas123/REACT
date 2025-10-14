import { useState } from "react";   

//Armazenando estado em um objeto

function StorageOnObject() {

    const [user, setUser] = useState({
        nome: '',
        age: 0,
        email: ''
    })

    return (
        <div>
            <input 
                type="text" 
                placeholder="nome" 
                value={user.name} 
                onChange={(e) => setUser({...user, nome: e.target.value})}/>
            <input 
                type="number" 
                placeholder="idade" 
                value={user.age} 
                onChange={(e) => setUser({...user, age: e.target.value})}/>
            <input 
                type="email" 
                placeholder="email" 
                value={user.email} 
                onChange={(e) => setUser({...user, email: e.target.value})}/>
            <p>Nome: {user.nome}</p>
            <p>Idade: {user.age}</p>
            <p>Email: {user.email}</p>
        </div>
    )
}

export default StorageOnObject;