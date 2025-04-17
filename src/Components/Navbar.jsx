import React, { useEffect, useState } from 'react'
import {assets} from '../assets/assets.js';
const Navbar = () => {
    const [expandMenu,setExpandMenu]=useState(false);
    useEffect(()=>{
        if(expandMenu){
            document.body.style.overflow='hidden'
        }
        else{
            document.body.style.overflow='auto'
        }
        return ()=>{
            document.body.style.overflow='auto'
        }
    },[])


  return (
    <div className='absolute top-0 left-0 w-full z-10 '>
        <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent '>
            <img src={assets.logo} alt="logo icon" />
            <ul className='hidden md:flex gap-7 text-white'>
                <a className='cursor-pointer hover:text-gray-400' href="#header">Home</a>
                <a className='cursor-pointer hover:text-gray-400' href="#About">About</a>
                <a className='cursor-pointer hover:text-gray-400' href="#Projects">Projects</a>
                <a className='cursor-pointer hover:text-gray-400' href="#Testimonials">Testimonials</a>
            </ul>
            <button className='hidden md:block bg-white py-2 rounded-full px-8 '>Sign up</button>
            <img className='md:hidden w-7 cursor-pointer' src={assets.menu_icon} alt="menu_icon" onClick={()=>{setExpandMenu(true)}} />
        </div>
        {/* -----------------Mobile Menu-------------- */}
        <div className={`md:hidden ${expandMenu?' fixed w-full':'h-0 w-0'} top-0 right-0 bottom-0 overflow-hidden transition-all bg-white`}>
            <div className='flex justify-end p-6 cursor-pointer'>
                <img className='w-6 cursor-pointer' src={assets.cross_icon} alt="cross_icon" onClick={()=>{setExpandMenu(false)}} />
            </div>
            <ul className='flex flex-col items-center gap-2 mt-5 mx-5 text-lg font-medium'>
                <a onClick={()=>{setExpandMenu(false)}}  href="#Header" className='px-4 py-2 rounded-full inline-block'>Home</a>
                <a onClick={()=>{setExpandMenu(false)}} href="#Header" className='px-4 py-2 rounded-full inline-block'>About</a>
                <a onClick={()=>{setExpandMenu(false)}} href="#Header" className='px-4 py-2 rounded-full inline-block'>Projects</a>
                <a onClick={()=>{setExpandMenu(false)}} href="#Header" className='px-4 py-2 rounded-full inline-block'>Testimonials</a>
            </ul>
        </div>
      
    </div>
  )
}

export default Navbar