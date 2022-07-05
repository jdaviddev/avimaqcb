import React, {useState} from 'react'
import CardPromociones from './Card'
import { ContainerTarj } from './PromoElements'
const DataPromociones = () => {
 
    return (
    <ContainerTarj>
        <CardPromociones 
            img= {""}
            titulo='Card 1'
            descripcion='Detalle de card 1 colocar bastante texto para el desatlle de la card y verificar si funciona'
        />

        <CardPromociones 
            img= {""}
            titulo='Card 1'
            descripcion='Detalle de card 1 colocar bastante texto para el desatlle de la card y verificar si funciona'
        />

        <CardPromociones 
            img= {""}
            titulo='Card 1'
            descripcion='Detalle de card 1 colocar bastante texto para el desatlle de la card y verificar si funciona'
        />

    </ContainerTarj>

  )
}

export default DataPromociones