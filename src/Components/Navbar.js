import React from 'react'
import {Link} from "react-scroll"
import { AiOutlineMenu } from "react-icons/ai";
function Navbar() {
    const [menu, setChange] = React.useState(false);
    const handleChange =()=>{
        setChange(!menu);
    }
  return (
    <div>
      <div className='md:fixed flex flex-row justify-between md:px-32 px-5 gap-16'> 
        <div className='flex p-2 items-center'>
            <Link to='/' spy = {true} smooth = {true} duration={500}>
                <h1 className='font-semibold text-3xl text-brightRed'>FitZone</h1>
            </Link>
        </div>
        <nav className='hidden md:flex items-center p-2 gap-5'>
            <Link to="home" spy = {true} smooth = {true} duration = {1000} className='hover:text-brightRed transition-all cursor-pointer text-xl' >Home</Link>
            <Link to="plans" spy = {true} smooth = {true} duration = {1000} className = "hover:text-brightRed transition-all cursor-pointer text-xl">Plans</Link>
            <Link to="about" spy = {true} smooth = {true} duration = {1000} className = "hover:text-brightRed transition-all cursor-pointer text-xl">About Us</Link>
            
            <Link to="trainers" spy = {true} smooth = {true} duration = {1000} className = "hover:text-brightRed transition-all cursor-pointer text-xl">Trainers</Link>
            <Link to="contact" spy = {true} smooth = {true} duration = {1000} className = "hover:text-brightRed transition-all cursor-pointer text-xl">Contact Us</Link>
            <a href="/login" spy = {true} smooth = {true} duration = {1000} className = "hover:text-brightRed transition-all cursor-pointer text-xl">Logout</a>

        </nav>
        <div className='md:hidden flex p-2 items-center' onClick={handleChange}>
            <AiOutlineMenu size={28}/>
        </div>
      </div>
        <div className={`${menu ? "translate-x-0": "-translate-x-full"} md:hidden flex flex-col absolute bg-white text-black left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition duration-300`}>
            <Link to="home" spy = {true} smooth = {true} duration = {500} className='hover:text-brightRed transition-all cursor-pointer'>Home</Link>
            <Link to="plans" spy = {true} smooth = {true} duration = {500} className = "hover:text-brightRed transition-all cursor-pointer">Plans</Link>
            <Link to="aboutus" spy = {true} smooth = {true} duration = {500} className = "hover:text-brightRed transition-all cursor-pointer">About Us</Link>
            <Link to="trainers" spy = {true} smooth = {true} duration = {500} className = "hover:text-brightRed transition-all cursor-pointer">Trainers</Link>
            <Link to="contact" spy = {true} smooth = {true} duration = {1000} className = "hover:text-brightRed transition-all cursor-pointer text-xl">Contact Us</Link>
            <a href="/login" spy = {true} smooth = {true} duration = {1000} className = "hover:text-brightRed transition-all cursor-pointer text-xl">Logout</a>
        </div>
    </div>
  )
}

export default Navbar
