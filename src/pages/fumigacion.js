import React, {useState} from 'react';
import Footer from '../components/Footer';
import FumigacionAerea from '../components/Fumigacion';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Fumigacion = () => {
    const[isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
  return (
    <>
        <Sidebar isOpen = {isOpen} toggle = {toggle} />
        <Navbar toggle = {toggle} />
        <FumigacionAerea />
        <Footer />

    </>
  )
}

export default Fumigacion