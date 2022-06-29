import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import logo from '../../images/logo.png';
import baner1 from '../../images/img2.jpeg'
import baner2 from '../../images/AVION2.jpg'
import baner3 from '../../images/img2.jpeg'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel'
import './HeroStyled.css'
import { 
    HeroContainer, 
    HeroBg, 
    VideoBg,
    HeroContent,
    Logo,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight,
    HeroBtnReservas,
    ImgHeroCarousel
} from './HeroElements'
const HeroSection = ({isOpen, toggle}) => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover (!hover)
    }

  return (
    <HeroContainer isOpen={isOpen} onClick= {toggle}>
        { /* <HeroBg>
            <VideoBg autoPlay loop muted src = {Video} type='video/mp4' />
  </HeroBg>  */ }
        <Carousel>
            <Carousel.Item>
                <ImgHeroCarousel>
                    <img
                    
                    src={baner1}
                    alt="First slide"
                    />
                </ImgHeroCarousel>
                <Carousel.Caption>
                <h3>La mejor tecnología en fumigación área</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <ImgHeroCarousel>
                    <img
                    
                    src={baner2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Nuestros productores satisfechos con sus cosechas</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </ImgHeroCarousel>
            </Carousel.Item>
            <Carousel.Item>
                <ImgHeroCarousel>
                    <img
                    
                    src={baner3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Taller de aviones agrícolas</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </ImgHeroCarousel>
            </Carousel.Item>
        </Carousel>

        <HeroContent>
            <figure><Logo><img src={logo} alt='Logo'/> </Logo> </figure> 
                <HeroP>
                        Acompañamos al gremio Bananero 
                </HeroP>
            <HeroBtnWrapper>
                <HeroBtnReservas 
                        to='/'
                        onMouseEnter={onHover} 
                        onMouseLeave ={onHover}
                        primary='true'
                        dark='true'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                >        
                Escuela de Piloto, conoce más  {hover ? <ArrowForward/> : <ArrowRight/>}
                </HeroBtnReservas>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection