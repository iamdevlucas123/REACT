import UseStateFunction from './components/useState'
import StorageOnObject from './components/stateObject'
import StateArray from './components/stateArray'
import UseEffectComponent from './components/useEffect'
import CountWithEffects from './components/cleanupEffect'
import APIEffect from './components/APIEffects'
import UseRefComponent from './components/useRef'
import { ThemeProvider } from './components/useContext/useContext'
import Header from './components/useContext/HeaderContext'

import './App.css'

function App() {

  return(
  <div>

    <div style={{
      backgroundColor: "lightblue",
      color: "black", 
      padding: "20px", 
      marginBottom: "20px", 
      borderRadius: "10px"
    }}>
      <h3>Using states</h3>
      <UseStateFunction />
      <StorageOnObject />
      <StateArray/>
    </div>

    <div style={{
      backgroundColor: "lightgreen",
      color: "black", 
      padding: "20px", 
      marginBottom: "20px", 
      borderRadius: "10px"
    }}>
      <h3>Using useEffect</h3>
      <UseEffectComponent />
      <CountWithEffects/>
      <APIEffect/>
    </div>

    <div style={{backgroundColor: "lightcoral",
      color: "black", 
      padding: "20px", 
      marginBottom: "20px", 
      borderRadius: "10px"
    }}>
      <h3>UseRef</h3>
      <UseRefComponent/>
    </div>


    <div style={{
      marginBottom: "20px", 
      borderRadius: "15px"
    }}>
      <ThemeProvider>
        <Header/>
      </ThemeProvider>
    </div>
  </div>
  
  )
}

export default App
