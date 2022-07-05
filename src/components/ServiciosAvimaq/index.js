import React from 'react';
import ImgCard1 from '../../images/avion6.jpg';
import ImgCard2 from '../../images/mecanico.jpg';
import ImgCard3 from '../../images/piloto.jpg';
import {
  LinkCard
} from '../Services/ServicesElements'

import {
    ContainerServicios,
    WrapperServicios,
    TitutoHeader,
    HeaderService,
    TituloH3,
    ContainerTag,
    TarjetaServ,
    CuadroInfo,
    SubtituloCuadro,
    InfoTag
} from './ServiceElements'

const ServiciosAvimaq = () => {
  return (
    <ContainerServicios>
        <WrapperServicios>
          <HeaderService>
            <TitutoHeader>
              Servicios Avimaq Cia. Ltda.
            </TitutoHeader>
          </HeaderService>
          
          <ContainerTag>
            { /* primer tag service  */ }
            <LinkCard to="/fumigacion" >
              <TarjetaServ>
                <CuadroInfo src={ImgCard1}>

                </CuadroInfo>
                <TituloH3>
                  Fumigación Aérea
                </TituloH3>
                <SubtituloCuadro>
                  Aplicaciones Monitoreadas
                </SubtituloCuadro>
                <InfoTag>
                  Etiam auctor diam tortor, et molestie metus lacinia et. Integer congue metus odio, vel tempus felis ultricies ultrices. Aliquam tempus augue lorem, sed semper metus sodales eget.
                </InfoTag>
              </TarjetaServ>
            </LinkCard>
            { /* segundo tag service  */ }
            <LinkCard to="/oma" >
              <TarjetaServ>
                <CuadroInfo src={ImgCard2}>

                </CuadroInfo>
                <TituloH3>
                  Taller de Reparación Aeronáutica
                </TituloH3>
                <SubtituloCuadro>
                  OMA - Reparación de aeronaves
                </SubtituloCuadro>
                <InfoTag>
                  Etiam auctor diam tortor, et molestie metus lacinia et. Integer congue metus odio, vel tempus felis ultricies ultrices. Aliquam tempus augue lorem, sed semper metus sodales eget.
                </InfoTag>
              </TarjetaServ>
            </LinkCard>
            { /* tercer tag service  */ }
            <LinkCard to="/escuelaavimaq" >
              <TarjetaServ>
                <CuadroInfo src={ImgCard3}>

                </CuadroInfo>
                <TituloH3>
                  Escuela de Pilotos Agrícolas
                </TituloH3>
                <SubtituloCuadro>
                  Formación de Pilotos
                </SubtituloCuadro>
                <InfoTag>
                  Etiam auctor diam tortor, et molestie metus lacinia et. Integer congue metus odio, vel tempus felis ultricies ultrices. Aliquam tempus augue lorem, sed semper metus sodales eget.
                </InfoTag>
              </TarjetaServ>
            </LinkCard>
          </ContainerTag>
        </WrapperServicios>
    </ContainerServicios>
  )
}

export default ServiciosAvimaq