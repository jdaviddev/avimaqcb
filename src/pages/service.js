import React,{useState} from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import ServiciosAvimaq from '../components/ServiciosAvimaq';


const Service = () => {
    const[isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
  return (
    <>
        <Sidebar isOpen = {isOpen} toggle = {toggle} />
        <Navbar toggle = {toggle} />
        <ServiciosAvimaq />
        <Footer />

    </>
  )
}

export default Service