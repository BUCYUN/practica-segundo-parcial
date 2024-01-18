import '../styles/Nota.css';

function Nota({ nota, onDelete}) {

    return (
        <div className='contenedor-nota'>
            
                <ul>
                    <li>{nota.texto}</li>
                </ul>
            
                <button className='boton' onClick={() => onDelete(nota.id)}>X</button>
            
        </div>
    );
}

export default Nota;