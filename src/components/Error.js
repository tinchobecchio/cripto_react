import styled from "@emotion/styled";
import PropTypes from "prop-types";

const MensajeError = styled.p`
    background-color: #b7322c;
    padding: 1rem;
    color: #fff;
    font-size: 30px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    font-family: 'Bebas Neue', cursive;
    text-shadow: 2px 2px 5px black;

`


const Error = ({mensaje}) => {
    return (
        <MensajeError>{mensaje}</MensajeError>
    );
}
 
Error.propTypes = {
    mensaje: PropTypes.string.isRequired
}
export default Error;