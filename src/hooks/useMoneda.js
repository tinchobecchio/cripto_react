import { useState } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
    text-shadow: 2px 2px 5px black;
`
const Select = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`


const useMoneda = (label, stateInicial, opciones) => {
    
    // State de nuestro custom hook
    const [state, actualizarState] = useState(stateInicial)

    const Seleccionar = () => (
        <>
            <Label>{label}</Label>
            <Select
                onChange={e => actualizarState(e.target.value)}
                value={state}
            >
                <option value="">-- Seleccione --</option>
                {opciones.map(opcion => (
                    <option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>
                ))}
                
            </Select>
        </>
    )
    
    // Retornar state, interfaz y funcion que modifica el state
    return [state, Seleccionar, actualizarState]

}
 
useMoneda.PropTypes = {
    label: PropTypes.string.isRequired,
    stateInicial: PropTypes.string.isRequired,
    opciones: PropTypes.array.isRequired
}
export default useMoneda;