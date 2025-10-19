// O React.memo é uma forma de otimização de performance
//Ele guarda a ultima renderização de um componente para que não renderize sem uma mudança de props
// Ex: quando renderizamos uma variavel clicando em um botão, o botão re-renderiza também
//Exemplo clássico: botões, cards, tabelas, listas grandes.

import React, { useState, useCallback } from "react";
import UserList from "./components/UserList"
import './App.css'

export default function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", count: 0 },
    { id: 2, name: "Bob", count: 0 },
    { id: 3, name: "Charlie", count: 0 },
  ])

  const [globalCount, setGlobalCount] = useState(0)

  // useCallback evita recriar a função cada render
  const incrementUser = useCallback((id) => {
    setUsers((prev) => 
      prev.map((user) =>
        user.id === id ? { ...user, count: user.count} : user))
  }, [])
  return (
    <div>
      <h1>Lista de Usuários</h1>
      <button onClick={() => setGlobalCount(globalCount + 1)}>
        Incrementar contador Global : {globalCount}
      </button>

      <UserList users={users} incrementUser={incrementUser}/>
    </div>
  )
}
