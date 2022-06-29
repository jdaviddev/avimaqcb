import React from 'react';
import Video from '../../videos/video.mp4';
import ImgHeader from '../../images/escuelaservice.jpg';
import EscuelaImg from '../../images/avionetaescuela.jpg';
import Tab from '../Tab/index';
import {
    EscuelaContainer,
    ImagenHeader,
    InfoContainer,
    InfoWrapper,
    TituloEscuela,
    ImagenEscuela,
    VideoBg
} from './EscuelaElements';

const EscuelaAvimaq = () => {
   
  return (

    <EscuelaContainer> 
        { /* <ImagenHeader src = {ImgHeader} /> */ }
        <VideoBg autoPlay loop muted src = {Video} type='video/mp4' />
        <InfoContainer>
          <InfoWrapper>
            <TituloEscuela>
                ESCUELA DE PILOTOS AVIMAQ
            </TituloEscuela>
            <ImagenEscuela src = {EscuelaImg} />
            {/* aquí va el tabs */}
            <Tab />
          </InfoWrapper>    
        </InfoContainer>
    </EscuelaContainer>
  )
}

export default EscuelaAvimaq