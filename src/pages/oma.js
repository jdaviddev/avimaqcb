import React, {useState} from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import TallerAvimaq from '../components/Oma';
import Sidebar from '../components/Sidebar';

const Oma = () => {
    const[isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
  return (
    <>
        <Sidebar isOpen = {isOpen} toggle = {toggle} />
        <Navbar toggle = {toggle} />
        <TallerAvimaq />
        <Footer />
    </>
  )
}
export default Oma