import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink} from './NavbarElements';

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);
    
    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [] );

    const toggleHome = () => {
        scroll.scrollToTop();
    };

  return (
   <>
   <IconContext.Provider value = {{ color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}>Avimaq</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks 
                            to="/"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                        >Inicio</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks 
                            to="discover"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                        >Nosotros</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks 
                            to="services"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                        >Servicios</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks 
                            to="areas"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                        >Informativo</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks 
                            to="/sms"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                        >SMS</NavLinks>
                    </NavItem>
                    
                    <NavItem>
                        <NavLinks 
                            to="/contact"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                        >Cont??ctenos</NavLinks>
                    </NavItem>
                </NavMenu>
               { /*
                <NavBtn>
                    <NavBtnLink 
                        to="/signin"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                    >Ingresar</NavBtnLink>
                </NavBtn>
                */ }
            </NavbarContainer>
        </Nav>
     </IconContext.Provider>
    </>
  )
}

export default Navbar