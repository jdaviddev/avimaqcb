import styled from 'styled-components';
import ImgFheader from '../../images/herofumigacion.jpg'

export const ContainerFumigacion = styled.div`
    width: 100%;
    height: 100%;;
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

{ /*export const Container = styled.div`
    position: absolute;
    top: 30%;
    box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`;
*/}
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

/* cards diseño flip */

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

export const Card = styled.div`
    display: block;
    position: relative;
    max-width: 300px;
    height: 400px;
    background-color: #f2f8f9;
    border-radius: 4px;
    padding: 32px 24px;
    margin: 12px;
    text-decoration: none;
    z-index: 0;
    overflow: hidden;
    

    &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: -16px;
    right: -16px;
    background: #00838d;
    height: 50px;
    width: 50px;
    border-radius: 32px;
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: transform 0.25s ease-out;
    }

    &:hover:before {
    transform: scale(21);
    }
    
    h3 {
        color: #262626;
        font-size: 17px;
        line-height: 24px;
        font-weight: 700;
        margin-bottom: 4px;
      }

    p {
        font-size: 17px;
        font-weight: 400;
        line-height: 20px;
        color: #666666;
        }
    
    &:hover {
        p {
            transition: all 0.3s ease-out;
            color: rgba(255, 255, 255, 0.8);
          }
          h3 {
            transition: all 0.3s ease-out;
            color: #ffffff;
          }
    }      
`;

export const Corner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 32px;
    height: 32px;
    overflow: hidden;
    top: 0;
    right: 0;
    background-color: #00838d;
    border-radius: 0 4px 0 32px;
`;

export const Arrow = styled.div`
    margin-top: -4px;
    margin-right: -4px;
    color: white;
    font-family: courier, sans;
`;

export const Small = styled.p`
    font-size: 14px;
`;

export const ContainerImagen = styled.div`
    display: felx;
    align-items: center;
    justify-content: center;
   // top: 0;
   // right: 0;
    //bottom: 0;
    //left: 0;
    //width: 100%;
    //height: 100%;
    //overflow: hidden;
`;

export const ImgHelicoptero = styled.img`
    width: 800px;
    height: 600px;
    margin: 20px;
    border-weight: 2px;

    &:hover {
        background: $gradient;
        opacity: 0;
        transition: all .3s ease;
    }
`;

export const VideoFum = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;