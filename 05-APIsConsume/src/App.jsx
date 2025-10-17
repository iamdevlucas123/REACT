/*
API consume significa fazer requisições HTTP (GET, POST, PUT ou DELETE) para um servidor externo ou backEnd para:
    - Buscar dados (ex: Lista de Usúarios)
    - Enviar Informações
    - Atualizar ou remover algo no banco de Dados

No React fazemos isso usando funções de rede do JavaScript como:
    - fetch() (nativa do JS)
    - axios: Biblioteca

*/

import './App.css'
import DataSeek from './components/fetch'
import DataSeekAxios from './components/axios'

function App() {
  

  return (
    <>
    <DataSeek/>
    <DataSeekAxios/>
    </>
  )
}

export default App
