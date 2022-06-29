import styled from 'styled-components'
import ImgHeader from '../../images/escuelaservice.jpg'


export const EscuelaContainer = styled.div`
    background: #fff;
    width: 100%;
    height: 100%;
`;

export const ImagenHeader = styled.img`
    background-size: cover;
    width: 100%;
    height: 400px;
   
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 450px;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;

export const InfoContainer = styled.div`
    display: grid;
    align-content: center;
   // background: red;
    height: 100%;
    padding: 10px;

`;

export const InfoWrapper = styled.div`
    
    background: #fff;
    display: grid;
    align-items: center;
    justify-content: center;
    width: 950px;
    height: 100%;
    margin: 0 auto;
    
`;

export const TituloEscuela = styled.h1`
    color: #000;
    padding: 20px;
    font-size: 2rem;
    font-weight: bold;
    
`;

export const ImagenEscuela = styled.img`
    width: 400px;
    right: 0;
    left: 0;
    margin: 0 auto;
    
`;