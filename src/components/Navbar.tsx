import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='py-4 bg-black  font-bold text-2xl space-x-4   flex ml-auto  flex justify-center text-white hover-underLine
    '>
        <Link href="/" className='hover:underline'>Home</Link>
        <Link href="about"  className='hover:underline'>About</Link>
        <Link href="/contact"  className='hover:underline'>Contact</Link>
        <Link href="/service"  className='hover:underline'>Services</Link>
        
        
    </div>
  )
}

export default Navbar