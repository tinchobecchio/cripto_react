import { useState } from "react";


const useMoneda = () => {
    
    // State de nuestro custom hook
    const [state, actualizarState] = useState('')

    const Seleccionar = () => (
        <>
            <label>Moneda</label>
            <select>
                <option value="MXN">Peso Mexicano</option>
            </select>
        </>
    )
    
    // Retornar state, interfaz y funcion que modifica el state
    return [state, Seleccionar, actualizarState]

}
 
export default useMoneda;