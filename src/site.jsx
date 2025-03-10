import { useRef, useState } from "react";
import api from './services/api.js'
import './App.css'

function Site() {
  const menssageRef = useRef()
  const [description, setDescription] = useState("");

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      const response = await api.post('/1.0/analyze/', {
        text: menssageRef.current.value
      });
      
      setDescription(response.data.description)

    } catch (err) {
      alert('Erro')
    }
  }

  return (
    <div className='container'>
      <form>
        <p>Informe o texto</p>
        <input type="text" ref={menssageRef}/>
        <button onClick={handleSubmit}>Enviar</button>
      </form>
      
      {description && <p>Descrição: {description}</p>}

    </div>
  )
}

export default Site