import React, { useState } from 'react';
import Nota from './Nota';
import '../styles/Lista.css';

function Lista() {
    const [notas, setNotas] = useState([]);
    const [nuevaNota, setNuevaNota] = useState('');

    const agregarNota = () => {
        if (nuevaNota.trim() === '') return;
        setNotas([...notas, { id: Date.now(), texto: nuevaNota }]);
        setNuevaNota('');
    };

    const eliminarNota = (id) => {
        setNotas((prevNotas) => prevNotas.filter((nota) => nota.id !== id));
    };

    return (
        <div className='contenedor-principal'>
            <div className='texto'>
                <input
                    className="input"
                    type="text"
                    value={nuevaNota}
                    onChange={(e) => setNuevaNota(e.target.value)}
                />
                <button className='boton' onClick={agregarNota}>Agregar Nota</button>
            </div>
            <div className='boton-eliminar'>
                
                {notas.map((nota) => (
                    <Nota
                        key={nota.id}
                        nota={nota}
                        onDelete={eliminarNota}
                    />
                ))}
            </div>
            
            
        </div>
    );
}

export default Lista;