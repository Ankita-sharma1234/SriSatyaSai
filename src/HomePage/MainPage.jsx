import React from 'react'
import MainNavbar from './Navbar'
import Navbar2 from './Navbar2';
import Footer from './Footer';
import Box from './Box';
import Container from './Container';
import Container1 from './Container1';
import Slider from './Slider';
import Sliderimage from './Sliderimage';






function MainPage() {
  return (
    <div>
      <MainNavbar/>
      <Slider/>
       <Container/>
        <Sliderimage/>
        <Footer/>
    </div>
  )
}

export default  MainPage
