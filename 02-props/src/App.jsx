
import './App.css'
import Card from './components/props'
import ButProp from './components/buttonProp'
import Contador from './components/stateProps';
import { useState } from "react"; 


//Componente pai

function App() {

  const alertFather = () => {
    alert("Evento disparado no componente pai!")
  }

  const [contar, setContar] = useState(0);

  const incrementar = () => {
    setContar(prev => prev + 1)
  }

  return (
    <div>
        <div>
          <Card name="Alice" age={25} />
          <Card name="Bob" age={30} />
          <Card name="Carol" age={22} />
        </div>

        <div>
          <ButProp onButtonClick={alertFather}/>
        </div>

        <div>
          <Contador count={contar} increment={incrementar}/>
        </div>

    </div>
  )
}

export default App
