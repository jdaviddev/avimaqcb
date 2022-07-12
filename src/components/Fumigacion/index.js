import React, { useState } from 'react'
import { FcNext } from "react-icons/fc";
import { FaTelegramPlane } from "react-icons/fa";
import { Data } from './DataFumagacion';
import { IconContext } from 'react-icons/lib';
import { FiPlus, FiMinus } from 'react-icons/fi';
import 'react-accessible-accordion/dist/fancy-example.css';
import HelicopteroF from '../../images/helicoptero1.jpeg';
import Avion1 from '../../images/avimaq1.jpeg';
import Avion2 from '../../images/avimaq4.jpeg';
import Avion3 from '../../images/fumigacion2.jpg'

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
    SectionF,
    Card,
    FaceFront,
    ImgCard,
    H3Card,
    FaceBack,
    DetailsCard

} from './FumigacionElements';
import { WrapperOma } from '../Oma/OmaElements';
import { Dropdown } from 'bootstrap';

const FumigacionAerea = () => {
  
  return (
    <ContainerFumigacion>
        <HeaderFumigacion>
          <TitutoHfumigacion>Home <FcNext /> Fumigación <FaTelegramPlane /> </TitutoHfumigacion> 
        </HeaderFumigacion>
        <SectionF>
          <Card>
            <FaceFront>
              <ImgCard src={HelicopteroF} />
              <H3Card>Helicoptero</H3Card>
            </FaceFront>
            <FaceBack>
              <H3Card>Helicoptero</H3Card>
              <DetailsCard>
                Los aviones y los helicópteros pueden tratar áreas grandes más rápido que los métodos de fumigación terrestre, disminuyendo así el desarrollo de la enfermedad.
              </DetailsCard>
            </FaceBack>
          </Card>
          <Card>
            <FaceFront>
              <ImgCard src={Avion1} />
              <H3Card>Helicoptero</H3Card>
            </FaceFront>
            <FaceBack>
              <H3Card>Helicoptero</H3Card>
              <DetailsCard>
                Los aviones y los helicópteros pueden tratar áreas grandes más rápido que los métodos de fumigación terrestre, disminuyendo así el desarrollo de la enfermedad.
              </DetailsCard>

            </FaceBack>
          </Card>
          <Card>
            <FaceFront>
              <ImgCard src={Avion2} />
              <H3Card>Helicoptero</H3Card>
            </FaceFront>
            <FaceBack>
              <H3Card>Helicoptero</H3Card>
              <DetailsCard>
                Los aviones y los helicópteros pueden tratar áreas grandes más rápido que los métodos de fumigación terrestre, disminuyendo así el desarrollo de la enfermedad.
              </DetailsCard>

            </FaceBack>
          </Card>
          <Card>
            <FaceFront>
              <ImgCard src={Avion3} />
              <H3Card>Helicoptero</H3Card>
            </FaceFront>
            <FaceBack>
              <H3Card>Helicoptero</H3Card>
              <DetailsCard>
                Los aviones y los helicópteros pueden tratar áreas grandes más rápido que los métodos de fumigación terrestre, disminuyendo así el desarrollo de la enfermedad.
              </DetailsCard>

            </FaceBack>
          </Card>
        </SectionF>
    </ContainerFumigacion>
  );
};

export default FumigacionAerea