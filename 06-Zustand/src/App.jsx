//Zustand é uma biblioteca para gerenciamento de estado global no React
// É uma alternativa mais simples para o Redux
// É utilizado em projetos pequenos e médios
//Precisa ser instalado por ser uma biblioteca (npm install zustand)

import './App.css'
import useCounterStore from './components/store'
import { useAuthStore } from "./components/authStore";

function App() {
 const { count, increase, decrease } = useCounterStore()
 const { user, login, logout } = useAuthStore();

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>decrease</button>

      <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>Autenticação com Zustand</h1>

      {user ? (
        <>
          <p>Bem-vindo, {user.name}!</p>
          <button onClick={logout}>Sair</button>
        </>
      ) : (
        <>
          <p>Nenhum usuário logado.</p>
          <button onClick={() => login("Alice")}>Fazer Login</button>
        </>
      )}
    </div>
    </div>
  )
}

export default App
