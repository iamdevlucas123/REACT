import { useState } from 'react'
import ConditionCount from './components/conditional'
import './App.css'

function App() {

  const [count, setCount] = useState(0);

  const increment = () => {setCount(prev => prev + 1)}
  const decrement = () => {setCount(prev => prev - 1)}

  return (
    <>
      <button onClick={increment}>increment</button>
      <ConditionCount count={count}/>
      <button onClick={decrement}>decrement</button>
    </>
  )
}

export default App
