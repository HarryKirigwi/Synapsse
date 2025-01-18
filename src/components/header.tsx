import * as React from 'react'
import { FaBars } from 'react-icons/fa6'
import { Button } from './ui/button'

function Header() {
  return (
    <>
      <div className="flex justify-between py-4 lg:py-8 content-center">
        <div>
          <a className="cursor-pointer"><h1 className="font-bold text-xl text-txtColor">Synapsse University</h1></a>
        </div>
        <div className="flex justify-end content-center">
          <Button className="text-black-700 bg-btnColor rounded-3xl">Contact us</Button>
          <FaBars className="mx-2 text-3xl text-txtColor cursor-pointer"/>
        </div>
      </div>
    </>
  )
}

export default Header