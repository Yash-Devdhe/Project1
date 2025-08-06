
import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavbarComp from './Navbar'
import HomeComponent from './home'
import Button from '@/Layouts/Button'
import Plans from '@/Components/Plans'
import About from '@/Components/About'
import Trainers from '@/Components/Trainers'
import Contact from '@/Components/Contact'
import Footer from '@/Components/Footer'
function RoutingComp() {
  return (
    <div>
      <div className="">
        <NavbarComp />
        <main>
          <div id="home">
            <HomeComponent />
          </div>
          <div id="plans">
            <Plans></Plans>
          </div>
          <div id="about">
            <About />
          </div>
          <div id="trainers">
            <Trainers />
          </div>
          <div id="contact">
            <Contact />
          </div>
          <div id='footer'>
            <Footer></Footer>
          </div>
        </main>
      </div>
    </div>
  );
}

export default RoutingComp;
