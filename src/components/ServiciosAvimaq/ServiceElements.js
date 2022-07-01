import styled from 'styled-components';
import ImgFondo from '../../images/fondo/fondotextura.jpg';
import SHeaderImg from '../../images/service/headerservice.png';

export const ContainerServicios = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${ImgFondo});
    background-size: cover;
    background-repeat: no-repeat;
`;

export const WrapperServicios = styled.div`
    width: 100%;
    height: 100vh;
   
`;

export const HeaderService = styled.div`
    width: 100%;
    height: 350px;
    position: relative;
    display: inline-block;
    text-align: center;
    background: linear-gradient(to bottom, rgb(0 0 0 / .3), rgba(0 25 110 / 1)), url(${SHeaderImg});
    background-size: cover;
    background-position: center;

`;

export const TitutoHeader = styled.h1`
    font-size: 3rem;
    font-weight: bold;
    color: white;
    position: absolute;
    top: 50%;
    left: 25%;
    right: 25%;
    transform: traslate(-50%, -50%);
    text-shadow: 0 0 8px rgba(0, 0, 0, 0.8);
    

`;

export const ImgServicios = styled.img`
    width: 100%;
    height: 100%;
    
    

`;

export const TituloServicios = styled.h1`
   
`;

export const ContainerTag = styled.div`
    width: 100%;
    max-width: 1100pz;
    display: flex;
    flex-direction: rows;
    align-content: center;
    align-items: center;
    justify-content: center;    
`;

export const TarjetaServ = styled.div`
    width: 100%;
    margin: 20px;
    border-radius: 6px;
    overflow: hidden;
    background: #fff;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
    justify-content: space-around;
    transition: all 0.25s;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

  

`;

export const CuadroInfo = styled.img`
    width: 100%;
    height: 400px;
    
`;

export const TituloH3 = styled.h3`
    color: #000;
    font-weight: bold;
    font-size: 1.2em;
    text-align: center;
    margin-top: 10px;
`;

export const SubtituloCuadro = styled.h4`
    color: green;
    font-size: 1em;
    text-align: center;
`;

export const InfoTag = styled.p`
    width: 100%;
    margin: 15px;
`;