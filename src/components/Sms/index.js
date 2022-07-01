import React from 'react'
import ImagenHeaderSms from '../../images/sms/smsheader.png'
import Check from '../../images/sms/smsCheck.svg'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Icon2 from '../../images/svg/tar.svg';
import {
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from '../Services/ServicesElements';
import {
    ContainerSms,
    ImgHeaderSms,
    WrapperHeaderSms,
    PoliticasSms,
    TituloPoliticas,
    ParrafoPoliticas,
    MensajeSms,
    IconSms,
    ContenidoMsn,
    ServiciosSms,
    TituloServicios,
    IconTargetSms
} from './SmsElements'

const GestionSeguridad = () => {
  return (
    <ContainerSms>
      <WrapperHeaderSms>
       { /* <ImgHeaderSms src={ImagenHeaderSms} /> */ }
      </WrapperHeaderSms>
      <PoliticasSms>
        <TituloPoliticas>Politicas de Seguridad Operacional</TituloPoliticas>
          <ParrafoPoliticas>
            POLÍTICA DE SEGURIDAD OPERACIONAL COMPAÑÍA AEROFUMIGACIONES AVIMAQ S.A., en sus unidades de negocio Aviación Agrícola, Centro de Instrucción y Taller Aeronáutico de Reparación, tiene como prioridad más alta la mejora de la seguridad en las operaciones; comprometiéndose con el suministro de los recursos humanos, técnicos y financieros necesarios para una gestión eficaz en la implementación, mantenimiento y mejora constante de las estrategias y procesos que el Sistema de Seguridad Operacional requiera.
          </ParrafoPoliticas>
      </PoliticasSms>
      <MensajeSms>
        <IconSms src={Check} /> 
        <ContenidoMsn>
          Somos la primera Empresa de fumigación en El Oro con un Sistema de Seguridad Operacional APROBADO por la Aeronáutica Civil.
        </ContenidoMsn>
      </MensajeSms>
      <ServiciosSms>
        <TituloServicios>
          COMPROMISOS DE LA COMPAÑÍA
        </TituloServicios>
        <IconTargetSms >
          <ServicesCard>
            <ServicesIcon src={Icon2} />
              <ServicesH2>Asegurar</ServicesH2>
            <ServicesP>
              Que todos los empleados se encuentran competentes en temas de Seguridad Operacional para que sean parte activa del sistema y desarrollen adecuadamente las funciones y responsabilidades asignadas.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
              <ServicesH2>Fortalecer</ServicesH2>
            <ServicesP>
              Constantemente la identificación de peligros y la gestión de los riesgos, para minimizarlos o eliminarlos de la operación.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
              <ServicesH2>Promover</ServicesH2>
            <ServicesP>
              La cultura del reporte voluntario “actos o condiciones inseguras en la operación” y reportes obligatorios Listado MOR “Informe obligatorio de sucesos” a todos los colaboradores de la Compañía; cumpliendo con lo descrito en el Protocolo de Confidencialidad.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
              <ServicesH2>Metas</ServicesH2>
            <ServicesP>
              Asegurar la mejora continua mediante el cumplimiento de las metas y objetivos propuestos para el Sistema de seguridad Operacional a través de indicadores de gestión.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
              <ServicesH2>Cumplir</ServicesH2>
            <ServicesP>
              Con los requisitos normativos, legislativos y reglamentarios que adquiera la Compañía con el fin de garantizar la Seguridad en la Operación.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
              <ServicesH2>DTO-SO-01</ServicesH2>
            <ServicesP>
              Versión: 01 - Mayo del 2022
            </ServicesP>
          </ServicesCard>
        </IconTargetSms>
      </ServiciosSms>
       
    </ContainerSms>
  )
}

export default GestionSeguridad