import React from 'react';
import ImgOInfo from '../../images/taller1.jpg';
import ImgCard1 from '../../images/taller1.jpg';
import ImgCard2 from '../../images/taller2.jpg';
import ImgCard3 from '../../images/taller3.jpg';
import ImgCard4 from '../../images/mecanico.jpg';
import {ImCheckboxChecked} from 'react-icons/ai';
import { FcWorkflow } from "react-icons/fc";
import { FcTimeline } from "react-icons/fc";
import {
    ContainerTaller,
    HeaderOma,
    TituloOma,
    WrapperOma,
    TituloSeccion,
    ItemParrafo,
    ItemImg,
    GridInfo,
    FeaturesOma,
    RowsFeature,
    ContFeature,
    IconDiv,
    ServiciosOMA,
    ImgDetailsOma,
    ImgCard,
    Pcard
} from './OmaElements'

const TallerAvimaq = () => {
  return (
    <ContainerTaller>
        <HeaderOma>
            <TituloOma>Avimaq OMA</TituloOma>
        </HeaderOma>
        <WrapperOma>
            <TituloSeccion>
                Taller de Reparación Aeronáutica - EC
            </TituloSeccion>
            <GridInfo>
                <ItemParrafo>
                Contamos con aplicación vía aérea de productos líquidos, sólidos y polvos diluibles usados como parte integral del control fitosanitario de cultivos y del agro. Existen tres categorías: los fertilizantes (alimentación foliar o edáficos), los fungicidas, y los pesticidas para el control de plagas y/o enfermedades.
                Contamos con aplicación vía aérea de productos líquidos, sólidos y polvos diluibles usados como parte integral del control fitosanitario de cultivos y del agro. Existen tres categorías: los fertilizantes (alimentación foliar o edáficos), los fungicidas, y los pesticidas para el control de plagas y/o enfermedades.
                Las aplicaciones aéreas sobre cultivos agrícolas ofrecen una mayor eficiencia y efectividad en el proceso de control fitosanitario, así como una mejor oportunidad en la intervención de plagas y enfermedades de cada cultivo, sin causar daño físico y propagación de patógenos sobre las unidades productivas o plantas que si ocasionan los equipos terrestres generando mermas en la producción agrícola.
                </ItemParrafo>
                <ItemImg src={ImgOInfo} />
            </GridInfo>
            <FeaturesOma>
                <ServiciosOMA>Servicios</ServiciosOMA>
                <RowsFeature>
                    <IconDiv> <FcWorkflow  style={{fontSize: '30px'}}/> </IconDiv>
                    <ContFeature>
                        Mantenimiento Y Reparación De S2R-T34, S2R, Cessna 188, Pijao, Piper PA18
                    </ContFeature>
                </RowsFeature>
                <RowsFeature>
                    <IconDiv> <FcTimeline  style={{fontSize: '30px'}}/> </IconDiv>
                    <ContFeature>
                        Mantenimiento rutinario o programado, servicios especiales, cumplimento de ADs y en especial el cumplimento de la AD # 2009-26-11 en cambio de bigas frontales inferiores (spar caps) a los planos, reglaje de superficies de control y reparaciones estructurales.
                    </ContFeature>
                </RowsFeature>
                <RowsFeature>
                    <IconDiv> <FcWorkflow  style={{fontSize: '30px'}}/> </IconDiv>
                    <ContFeature>
                        Inspección de sección caliente (HSI) y mantenimiento pesado (heavy maintenance) de acuerdo al manual de mantenimiento de la Pratt & Whitney, Servicio a inyectores de combustible, cambio de componentes básicos como son Gobernador de Hélices, bomba de presión de combustible y FCU por tiempo cumplido, ajuste, reglaje y "performance check" de la turbina.
                    </ContFeature>
                </RowsFeature>
                <RowsFeature>
                    <IconDiv> <FcTimeline  style={{fontSize: '30px'}}/> </IconDiv>
                    <ContFeature>
                    Remoción e instalación de hélices.
                    </ContFeature>
                </RowsFeature>
            </FeaturesOma>
            <ImgDetailsOma>
                <ImgCard src={ImgCard1} /> 
                <ImgCard src={ImgCard2} />
                <ImgCard src={ImgCard3} />
                <ImgCard src={ImgCard4} /> 
            </ImgDetailsOma>
        </WrapperOma>
    </ContainerTaller>
  )
}

export default TallerAvimaq