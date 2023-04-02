import { useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
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

const APIKey = 'c618b9e5c7fcbd1ed8e01fea87cc34423f1e7337fe1be103308e38d75500478d'


const useCriptomoneda = (label, stateInicial, opciones) => {
    
    // State de nuestro custom hook
    const [state, actualizarState] = useState(stateInicial)

    const SelectCripto = () => (
        <>
            <Label>{label}</Label>
            <Select
                onChange={e => actualizarState(e.target.value)}
                value={state}
            >
                <option value="">-- Seleccione --</option>
                {opciones.map(opcion => (
                    <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}>{opcion.CoinInfo.FullName}</option>
                ))}
                
            </Select>
        </>
    )
    
    // Retornar state, interfaz y funcion que modifica el state
    return [state, SelectCripto, actualizarState]

}
 
export default useCriptomoneda;