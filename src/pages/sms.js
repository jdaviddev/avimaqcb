import React,  {useState} from 'react'
import GestionSegridad from '../components/Sms'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Sms = () => {
    const[isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <>
        <Sidebar isOpen = {isOpen} toggle = {toggle} />
        <Navbar toggle = {toggle} />
        <GestionSegridad />
        <Footer />
    </>
  )
}

export default Sms