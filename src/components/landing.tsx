import * as React from 'react'
import imageBg from '../assets/university-bg.jpg'
import Header from './header'
import { Button } from './ui/button'
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';


function Landing() {

  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/login');
  }


  return (

    <>
<div
  className="relative h-1/2 lg:h-screen bg-cover bg-center bg-no-repeat container lg:rounded-landing"
  style={{
    backgroundImage: `linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)), url(${imageBg})`
  }}
>
  {/* Content */}
  <div className="relative z-10 lg:h-full">
    <Header/>
  <div className='flex pb-4 lg:h-screen lg:mt-10'>
        <div>
        <h1 className='scroll-m-20 max-w-2xl text-2xl text-deepRed leading-10 font-extrabold tracking-tight md:text-3xl lg:text-5xl block'>Synapsse University: Where Innovation meets Excellence</h1>
        <p className='text-txtColor max-w-prose font-semibold  text-lg py-4 lg:text-2xl lg:py-10'>Discover the world of excellence, where students come together to create a brighter tomorrow.</p>
        <FaArrowRightLong className='text-deepRed inline-flex lg:text-2xl'/><Button className='text-deepRed lg:text-xl' variant='link' onClick={handleLogin}>Sign in</Button><br/>
        <FaArrowRightLong className='text-deepRed inline-flex lg:text-2xl'/><Button className='text-deepRed lg:text-xl'variant='link'>Apply Now</Button><br/>
        <FaArrowRightLong className='text-deepRed inline-flex lg:text-2xl'/><Button className='text-deepRed lg:text-xl'variant='link'>Explore Programs</Button><br/>
        </div>
        
    </div>
  </div>
</div>












     </>





   
  )
}

export default Landing