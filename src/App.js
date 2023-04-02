import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import imagen from "./cryptomonedas.png"
import Formulario from "./components/Formulario";



const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width:992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`
const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`
const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: white;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`


function App() {

  const [ moneda, guardarMoneda ] = useState('')
  const [ criptomoneda, guardarCriptomoneda ] = useState('')

  useEffect(() => {
    if(moneda === '') return

    console.log('cotizando...');
  },[moneda, criptomoneda])


  return (
    <Contenedor>
      <div>
        <Imagen 
          src={imagen}
          alt="imagen crypto"
        />
      </div>
      <div>
        <Heading>Cotiza Criptomonedas al instante</Heading>
        <Formulario 
          guardarMoneda={guardarMoneda}
          guardarCriptomoneda={guardarCriptomoneda}
        />
      </div>
    </Contenedor>
  );
}

export default App;
