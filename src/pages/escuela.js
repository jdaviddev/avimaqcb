import React, {useState} from 'react'
import EscuelaAvimaq from '../components/Escuela'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Escuela = () => {
  const[isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen = {isOpen} toggle = {toggle} />
      <Navbar toggle = {toggle} />
      <EscuelaAvimaq />
      <Footer />
    </>
  )
}

export default Escuela