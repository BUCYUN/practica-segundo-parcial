import logo from './logo.svg';
import './App.css';
import Boton from './components/Boton'
import Texto from './components/Texto';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(true);
  const mostrar = () =>{
    setShow(!show)
  }
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <div className='contenedor-botones'>
          <Boton texto="Show / Hide" funcionClick={mostrar}/>
        </div>
        <Texto mostrar={show}/>
      </div>
    </div>
  );
}

export default App;
