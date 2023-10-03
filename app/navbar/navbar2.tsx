"use client"
import React from 'react'
import Link from 'next/link'
export default function leftNavbar() {
  return (
    <div className='sticky top-0 z-10'> <div className="flex bg-gray-500 h-20 items-center p-5 uppercase" >
      <div>
        <Link href="#" className="p-5 text-xl font-semibold  ">Panding</Link>
        <div className="mr-5 ml-5 bg-[#014164] h-1 "></div>
      </div>
      <div>
        <Link href="#" className="p-5 text-xl font-semibold  ">Completed</Link>
        <div className="mr-5 ml-5 bg-[#014164] h-1 "></div>
      </div>
    </div></div>
  )
}