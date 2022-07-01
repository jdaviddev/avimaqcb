import styled from 'styled-components';
import ImgFondo from '../../images/fondo/fondotextura.jpg'
import SmsImageHeader from '../../images/img2.jpeg'
export const ContainerSms = styled.div`
    background-image: url(${ImgFondo});
    background-size: cover;
    background-repeat: no-repeat;
`;

export const WrapperHeaderSms = styled.div`
    width: 100%;
    height: 350px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to bottom, rgb(0 0 0 / .3), rgba(5 100 50 / 1)), url(${SmsImageHeader});
    background-size: cover;
    background-position: center;
`;

export const ImgHeaderSms = styled.img`
    margin-top: 100px;
    
`;

export const PoliticasSms = styled.div`
    width: 100%;
    height: 250px;
    display: block;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px) {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 1fr;
        padding: 0px 20px 20px 20px;
    }
`;

export const TituloPoliticas = styled.h1`
    text-align: center;
    font-weight: bold;

    
`;

export const ParrafoPoliticas = styled.p`
    margin: 0 15% 0 15%;
    text-align: left;
    align-content: center;
`;

/* Sección de Mensaje con Icon de SMS */

export const MensajeSms = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media screen and (max-width: 768px) {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 1fr;
        padding: 0px 20px 20px 20px;
    }
`;

export const IconSms = styled.img`
   width: 100%;
   height: 300px;
   @media screen and (max-width: 768px) {
        
        height: 150px;
   }
`;

export const ContenidoMsn = styled.h1`
    font-style: bold;
    text-align: justify;
    margin 0px 50px 0 0;
    @media screen and (max-width: 768px) {
        font-size: 1.2em;
        text-align: center;
    }
    
`;

/*  área de servicios del SMS  */

export const ServiciosSms = styled.div`
    
`;

export const TituloServicios = styled.h2`
    text-align: center;
    font-weight: bold;
`;

export const IconTargetSms = styled.div`
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 20px 20px 20px 20px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
        width: 100%;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
        grid-template-columns: 1fr;
        padding: 0px 20px 20px 20px;
    }
`;