import styled from 'styled-components';

export const ContainerSms = styled.div`
    width: 100%;
    height: 100%;
    background-image: repeating-linear-gradient(36deg, rgba(255,255,255, 0.1), rgba(255,255,255, 0.1) 1px, transparent 0px, transparent 2px);
`;

export const WrapperHeaderSms = styled.div`
    width: 100%;
    height: 350px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
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
`;

export const IconSms = styled.img`
   width: 100%;
   height: 300px;
`;

export const ContenidoMsn = styled.h1`
    font-style: bold;
    text-align: justify;
    margin 0px 50px 0 0;
    
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