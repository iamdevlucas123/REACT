// Redux Toolkit é um conjunto de funções que facilita a criação, atualização e gerenciamento de estados globais
// npm install @reduxjs/toolkit react-redux
/*
createSlice → define estado + ações.
configureStore → junta tudo.
Provider → conecta a store à aplicação.
useSelector → lê o estado.
useDispatch → dispara ações.
*/

import {useSelector, useDispatch} from "react-redux";
import {increment, decrement, reset} from "./components/counterSlice"
import './App.css'

export default function App() {
  const count = useSelector((state => state.counter.value))
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Contados com Redux Toolkit</h1>
      <h2>{count}</h2>

      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(reset())}>reset</button>
    </div>
  )
}

