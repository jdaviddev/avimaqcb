import React from 'react'
import { FcNext } from "react-icons/fc";

import {
    ContainerFumigacion,
    TitutoHfumigacion,
    HeaderFumigacion
} from './FumigacionElements';

const FumigacionAerea = () => {
  return (
    <ContainerFumigacion>
        <HeaderFumigacion>
            <TitutoHfumigacion>Home <FcNext /> Fumigación </TitutoHfumigacion>
        </HeaderFumigacion>
    </ContainerFumigacion>
  )
}

export default FumigacionAerea