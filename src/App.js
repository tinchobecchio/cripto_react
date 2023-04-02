import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import imagen from "./cryptomonedas.png"
import Formulario from "./components/Formulario";
import Cotizacion from "./components/Cotizacion";
import Spinner from "./components/Spinner";



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
  text-shadow: 2px 2px 5px black;


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
  const [ resultado, guardarResultado ] = useState({})
  const [ cargando, guardarCargando ] = useState(false)

  useEffect( () => {

    // para que scrollee al final
    const scrollToElement = () => {
      let elmnt = document.querySelector("#jump");
      elmnt.scrollIntoView({behavior:'smooth', block:'end'});
    }


    const cotizarCriptomoneda = async () => {
      if(moneda === '') return

      // consultar la api para obtener la cotizacion
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`

      const resultado = await axios.get(url)

      // mostrando el spinner
      guardarCargando(true)
      scrollToElement()
      // ocultar el spinner y mostrar el resultado
      setTimeout(() => {

        // cambiar el stado de cargando
        guardarCargando(false)

        // guardar cotizacion
        guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda]);
      }, 3000)
      setTimeout(() => {scrollToElement()},3100)
    }
    cotizarCriptomoneda()

  },[moneda, criptomoneda])

  // Mostrar spinner o resultado
  const componente = (cargando) ? <Spinner /> : <Cotizacion resultado={resultado}/>

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

        {componente}
      <div id="jump"></div>
      </div>
    </Contenedor>
  );
}

export default App;
