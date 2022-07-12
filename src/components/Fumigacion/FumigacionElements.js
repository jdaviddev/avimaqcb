import styled from 'styled-components';
import ImgFheader from '../../images/herofumigacion.jpg'

export const ContainerFumigacion = styled.div`
    width: 100%;
    height: 100vh;
    background: #fff;
    align-item: center;
    justify-content: center;
    
`;

export const HeaderFumigacion = styled.div`
    width: 100%;
    height: 350px;
    position: relative;
    display: inline-block;
    text-align: center;
    background: linear-gradient(to bottom, rgb(0 0 0 / .1), rgba(0 36 55 / 1)), url(${ImgFheader});
    background-size: cover;
    background-position: center;
    justify-content: center;
    align-item: center;
`;

export const TitutoHfumigacion = styled.h2`
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

export const Section1F = styled.div`
    width: 100%;
    height: 100vh;
    background: red;
`;

export const TitleSection = styled.h2`
    
`;

export const AcordionSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative; 
    height: 100vh;
    background: #fff;
`;

export const Container = styled.div`
    position: absolute;
    top: 30%;
    box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`;

export const Wrap = styled.div`
    background: #272727;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    text-align: left;
    cursor: pointer;

    h1 {
        padding: 0.8rem;
        font-size: 2rem;
    }

    span {
        margin-right: 1.5rem;
    }
`;

export const Dropdown = styled.div`
    background: #1c1c1c;
    color: #00ffb9;
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #00ffb9;
    border-top: 1px solid #00ffb9;

    p {
        font-size: 2rem;
    }
`;


// ------ Cards de Fumigación  -----------

export const SectionF = styled.div`
    display: flex;
    flex-direction: rows;
    justify-content: space-around;
    align-item: center;
    margin: auto;
    
`;

export const Card = styled.div`
    position: relative;
    width: 400px;
    height: 550px;
    transform-style: preserve-3d;
    transition: all 600ms;

    &:hover {
        transform: rotateY(180deg);
    }
`;

export const FaceFront = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    backface-visibility: visible;
    transform-style: preserve-3d;
    padding: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateZ(60px);

`;

export const ImgCard = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const H3Card = styled.h3`
    width: 100%;
    height: 45px;
    line-height: 45px;
    color: #fff;
    background: rgba(0,0,0, 0.4);
    text-align: center;
`;

export const FaceBack = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    backface-visibility: visible;
    transform-style: preserve-3d;
    transform: rotateY(180deg);
    padding: 40px;
    text-align: center;
    margin-top: 30px;
    font-size: 18px;
    cursor: pointer;
    visibility: visible;
    &:hover {
        visibility: hidden;
    }

    input {
        transition: box-shadow 600ms;
    }

`;

export const DetailsCard = styled.p`
    color: #fff;
    transform: traslate(-50%, -50%);
    text-shadow: 0 0 8px rgba(0, 0, 0, 0.8);
`;


