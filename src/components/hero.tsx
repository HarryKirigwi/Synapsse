import * as React from 'react'
import synapsseImage from '../assets/synapsse.jpeg'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import CoursesList from '@/assets/cardData'
import { FaArrowRightLong } from "react-icons/fa6";

function Hero() {
    
  return (
    <>
    <div className="container py-8 flex justify-between lg:py-14">
    <div className='content-center items-center'>
      <Button className='hidden md:flex bg-btnColor rounded-3xl'>About Us <FaArrowRightLong/></Button>
    </div>
    <div className='md:max-w-lg lg:max-w-2xl'>
    <h1 className='text-xl lg:text-4xl'>Empower your future at Synapsse University</h1>
    <p className='text-md lg:text-lg lg:py-6'>Discover in-demand skills and transform your career with our immersive bootcamp programs in technology and design.</p>
    </div>
    </div>
    <div className='content-center items-center container'>
      <Button className='md:hidden lg:hidden mb-6 bg-btnColor rounded-3xl'>About Us <FaArrowRightLong/></Button>
    </div>

    <div className=' container lg:py-6'>
    <CoursesList/>
    </div>
    
    </>
  )
}

export default Hero