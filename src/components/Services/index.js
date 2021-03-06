import React from 'react';
import Icon1 from '../../images/svg/aereo.svg';
import Icon2 from '../../images/svg/tar.svg';
import Icon3 from '../../images/svg/escuela.svg';

import { 
    ServicesContainer,
    ServicesH1,
    ServicesH2,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesP,
    LinkCard
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>Nuestros Servicios</ServicesH1>
        <ServicesWrapper>
            <LinkCard to="/fumigacion" >
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Fumigación Aérea</ServicesH2>
                    <ServicesP>
                    En Avimaq nos tomamos muy en serio la protección del medio ambiente.
                    </ServicesP>
                </ServicesCard>
            </LinkCard>
            <LinkCard to="/oma" >
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>OMA</ServicesH2>
                    <ServicesP>
                        Amplia experiencia en mantenimiento de línea y reparación estructural de aeronaves de fumigación.
                    </ServicesP>
                </ServicesCard>
            </LinkCard>
            <LinkCard to="/escuelaavimaq" >
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Escuela</ServicesH2>
                    <ServicesP>
                        Institución orientada a la formación integral del talento humano del sector de aviación agrícola.
                    </ServicesP>
                </ServicesCard>
            </LinkCard>
        </ServicesWrapper>

    </ServicesContainer>
  )
}

export default Services