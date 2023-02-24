import './App.css'
import Card from './components/Card'

function App() {
let numeros = [10, 20, 30];

  return (
    <>
      <Card elemento = {numeros[0]}/>
      <Card elemento = {numeros[1]}/>
      <Card elemento = {numeros[2]}/>
    </>
  )
}

export default App
