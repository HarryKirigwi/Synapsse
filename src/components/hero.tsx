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
      <Button className='bg-btnColor rounded-3xl'>About Us <FaArrowRightLong/></Button>
    </div>
    <div className='max-w-2xl'>
    <h1 className='lg:text-4xl'>Empower your future at Synapsse University</h1>
    <p className='text-xl lg:py-6'>Discover in-demand skills and transform your career with our immersive bootcamp programs in technology and design.</p>
    </div>
    </div>

    <div className=' container py-6'>
    <CoursesList/>
    </div>
    
    </>
  )
}

export default Hero