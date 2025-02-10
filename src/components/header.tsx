import * as React from 'react'
import { FaBars } from 'react-icons/fa6'
import { Button } from './ui/button'
import logo from '../assets/logo3.jpeg'

function Header() {
  return (
    <>
      <div className="flex justify-between py-4 lg:py-8 content-center">
        <div>
          {/* <a className="cursor-pointer"><h1 className="font-bold text-xl text-txtColor">Synapsse University</h1></a> */}
          <img src={logo} alt="Synapsse University" className="w-24 lg:w-44 rounded-logo rounded-lg"/>

        </div>
        <div className="flex justify-end content-center">
          <Button className="hidden md:block text-black-700 bg-btnColor rounded-3xl">Contact us</Button>
          <FaBars className="mx-2 text-3xl text-txtColor cursor-pointer"/>
        </div>
      </div>
    </>
  )
}

export default Header