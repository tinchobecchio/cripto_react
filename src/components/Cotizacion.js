import styled from "@emotion/styled";
import PropTypes from "prop-types";

const ResultadoDiv = styled.div`
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    text-shadow: 1px 2px black;
    background-color: teal;
    padding: 10px;
    border-radius: 20px;
    margin: 2rem 0;
    box-shadow: 0 3px 5px black;
`
const Info = styled.p`
    font-size: 18px;
    span {
        font-weight: bold;
    }
`
const Precio = styled.p`
    font-size: 30px;
    span {
        font-weight: bold;
    }
`


const Cotizacion = ({resultado}) => {

    if(Object.keys(resultado).length === 0) return null
    
    return (
        <ResultadoDiv>
            <Precio>El precio es: <span>{resultado.PRICE}</span></Precio>
            <Info>Precio más alto del día: <span>{resultado.HIGHDAY}</span></Info>
            <Info>Precio más bajo del día: <span>{resultado.LOWDAY}</span></Info>
            <Info>Variación últimas 24 horas: <span>{resultado.CHANGEPCT24HOUR}%</span></Info>
            <Info>Última Actualización: <span>{resultado.LASTUPDATE}</span></Info>
        </ResultadoDiv>
    );
}
 
Cotizacion.propTypes = {
    resultado: PropTypes.object.isRequired
}
export default Cotizacion;