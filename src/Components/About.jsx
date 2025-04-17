import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2' >About <span className='underline underline-offset-4 under font-light text-blue-500'>Our Brand</span></h1>
        <p className='text-gray-500 md:max-w-80 text-center mb-8'>Passionate About Properties, Dedicated to Your Vision</p>
        <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
            <img className='w-full sm:w-1/2 max-w-lg' src={assets.brand_img} alt="brand-about-image" />
            <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
                <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                    <div>
                        <p className='text-3xl font-medium text-gray-800'>10+</p>
                        <p>Years of Experience</p>
                    </div>
                    <div>
                        <p className='text-3xl font-medium text-gray-800'>22+</p>
                        <p>Projects Completed</p>
                    </div>
                    <div>
                        <p className='text-3xl font-medium text-gray-800'>40+</p>
                        <p>Min.Sq.Ft.Delivered</p>
                    </div>
                    <div>
                        <p className='text-3xl font-medium text-gray-800'>30+</p>
                        <p>Ongoing Projects</p>
                    </div>
                </div>
                <p className='my-10 max-w-lg' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati quod laboriosam quasi excepturi eaque quia aliquid. Delectus temporibus beatae odit fuga modi quos! Mollitia perferendis corrupti incidunt natus, officiis similique.</p>
                <button className='bg-blue-600 text-white px-8 py-2 rounded'>Learn More</button>
            </div>
        </div>

    </div>
  )
}

export default About