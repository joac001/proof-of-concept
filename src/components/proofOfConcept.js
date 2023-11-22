import { useState, useEffect } from 'react';

import '../style/proofOfConcept.css';

function ProofOfConcept() {
    // Estado local para almacenar el valor
    const [value, setValue] = useState('');

    // Efecto para cargar el valor desde localStorage al montar el componente
    useEffect(() => {
        const storedValue = localStorage.getItem('value');
        if (storedValue) {
            setValue(storedValue);
        }
    }, []); // El array vacío asegura que el efecto se ejecute solo una vez al montar el componente

    // Función para manejar cambios en el valor y almacenar en localStorage
    const handleChange = (event) => {
        const newValue = event.target.value;
        setValue(newValue);
        localStorage.setItem('value', newValue);
    };

    return (
        <div className="poc-container">
            <div class="input-group">

                <textarea
                    class="form-control"
                    aria-label="With textarea"
                    id="input"
                    value={value}
                    onChange={handleChange}>
                </textarea>
            </div>
            <div className='savedText'>
                <h2>El mensaje guardado es: </h2>
                <hr />
                <p>{value}</p></div>
        </div>
    );
};

export default ProofOfConcept;