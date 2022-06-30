import React from 'react'
import HeaderService from '../../images/service/headerservice.jpg'
import {
    ContainerServicios,
    WrapperServicios,
    ImgServicios,
    TituloServicios,
    TagService,
    TituloH1,
    TarjetaServ
} from './ServiceElements'

const ServiciosAvimaq = () => {
  return (
    <ContainerServicios>
        <WrapperServicios>
            <ImgServicios src={HeaderService} />
            <TituloServicios>

            </TituloServicios>
            <TagService>
                <TituloH1>

                </TituloH1>
                <TarjetaServ>

                </TarjetaServ>
            </TagService>
        </WrapperServicios>
    </ContainerServicios>
  )
}

export default ServiciosAvimaq