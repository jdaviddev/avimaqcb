import styled from 'styled-components';
import ImgOmaHeader from '../../images/headeroma.jpg'

export const ContainerTaller = styled.div`

`;

export const HeaderOma = styled.div`
    width: 100%;
    height: 350px;
    position: relative;
    display: inline-block;
    text-align: center;
    background: linear-gradient(to bottom, rgb(0 0 0 / .3), rgba(85 35 00 / 1)), url(${ImgOmaHeader});
    background-size: cover;
    background-position: center;
`;

export const TituloOma = styled.h1`
    font-size: 3rem;
    font-weight: bold;
    color: white;
    position: absolute;
    top: 50%;
    left: 25%;
    right: 25%;
    transform: traslate(-50%, -50%);
    text-shadow: 0 0 8px rgba(0, 0, 0, 0.8);
`;

export const WrapperOma = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin -0.5rem;
`;

export const TituloSeccion = styled.h1`
    margin: 0 auto;
    border: 0;
    color: #b59214;
    padding: 3rem;
    font-size: 3rem;
    text-align: center;
    font-weight: bold;

    @media screen and (max-width: 768px) {
        font-size: 1.2rem;
    }
`;
export const ItemParrafo = styled.p`
    margin: 0.5rem;
    background: #f3edd6;
    border: 0;
    color: #b59214;
    padding: 3rem;
    font-size: 1.3rem;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 0.7rem;
    }
`;

export const ItemImg = styled.img`
    width: 100%;
    display: flex;
   justify-content: center;
   align-items: center;
    margin: 0px auto;
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const GridInfo = styled.div`
    display: grid;
    grid-template-columns: 65% 35%;
    

    &:hover {
        
        border: 1px solid #f1c40f;
    }
    
    @media screen and (max-width: 768px) {
        display: grid;
        grid-template-columns: 100%;

    }
`;

export const FeaturesOma = styled.div`
    width: 900px;
    height: 350px;
    margin: 10px auto;
    padding: 10px;
`;

export const RowsFeature = styled.div`
    width: 100%;
    display: flex;
    flex-direction: colum;
    //border-width: 5px;
    //border-color: black;
    //border-style: solid;
    //margin: 5px;
    align-content: center;
    align-items: center;
    
`;

export const IconDiv = styled.div`
    witdh: 90px;
    height: 100%;
    align-content: center;
    align-items: center;
`;

export const ContFeature = styled.h5`
    font-size: 1.1rem;
    justify-content: center;
    align-items: left;
    margin: 5px;
`;

export const ServiciosOMA = styled.div`
    width: 100%;
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
`;

/* sección de imágenes de taller oma */

export const ImgDetailsOma = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: colum;
    justify-content: space-around;
    align-items: stretch;
    margin: 20px;
`;

export const ImgCard = styled.img`
    width: 450px;
    justify-content: center;
    align-items: center;
    object-fit: cover;
    border-width: 2px;
    border-color: green;
    border-style: solid;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        border-width: 4px;
        border-color: #81D8D0;
    }
`;

export const Pcard = styled.h4`
    text-align: center;

`;
