import React, { useState } from 'react'
import { FcNext } from "react-icons/fc";
import { FaTelegramPlane } from "react-icons/fa";
import './styleFumigacion.css';
import { Data } from './DataFumagacion';
import 'react-accessible-accordion/dist/fancy-example.css';
import HelicopteroFumigacion from '../../images/helicoptero1.jpeg';
import AvionFumigacion2 from '../../images/avimaq4.jpeg';




import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import {
    ContainerFumigacion,
    TitutoHfumigacion,
    HeaderFumigacion,
    TitleSection,
    Section1F,
    AcordionSection,
    Container,
    Wrap,
    Card,
    Small,
    Corner,
    Arrow,
    Content,
    ImgHelicoptero,
    ContainerImagen,
    VideoFum

} from './FumigacionElements';
import { WrapperOma } from '../Oma/OmaElements';
import { Dropdown } from 'bootstrap';

const FumigacionAerea = () => {
  
  return (
    <ContainerFumigacion>
        <HeaderFumigacion>
          <TitutoHfumigacion>Home <FcNext /> Fumigación <FaTelegramPlane /> </TitutoHfumigacion> 
        </HeaderFumigacion>
          <Container>
            <Card>
              <h3>Helicoptero</h3>
              <Small> Con el Bell 505, el cielo es el límite. Una cabina de mando de alta tecnología y un diseño de cabina adaptable hacen que sea un helicóptero extremadamente rentable y esté a la altura de cualquier desafío.</Small>
              <Corner>
                <Arrow>
                  →
                </Arrow>
              </Corner>
            </Card>

            <Card>
              <h3>Thrush 510G Switchback</h3>
              <Small> Lo que hace lo hace único es la capacidad de la aeronave al poder cambiar las tareas de fumigación agrícola a las capacidades de extinción de incendios en cuestión de minutos, gracias a su exclusivo sistema de puerta de entrega de incendio.</Small>
              <Corner>
                <Arrow>
                  →
                </Arrow>
              </Corner>
            </Card>

            <Card>
              <h3>GPS</h3>
              <Small>El sistema de posicionamiento global (GPS) permite registrar las parcelas donde se prevé aplicar tratamiento y calcular con mayor precisión los volúmenes de fungicida necesarios para cubrir el área objetivo.</Small>
              <Corner>
                <Arrow>
                  →
                </Arrow>
              </Corner>
            </Card>

            <Card>
              <h3>Control tiempo real</h3>
              <Small>Esta herramienta controla automáticamente el volumen de fungicida aplicado por hectárea. Dependiendo de la velocidad y la posición del avión, el software calcula y ajusta, en tiempo real, el volumen de fungicida que se debe aplicar. Esta herramienta hace la cobertura más homogénea y el tratamiento más eficaz. La tecnología ya está disponible para otros cultivos.</Small>
              <Corner>
                <Arrow>
                  →
                </Arrow>
              </Corner>
            </Card>
          </Container>
          <ContainerImagen>
            <ImgHelicoptero src={HelicopteroFumigacion} />
            <ImgHelicoptero src={AvionFumigacion2} />

          </ContainerImagen>
    </ContainerFumigacion>
  );
};

export default FumigacionAerea