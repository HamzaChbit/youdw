import Image from 'next/image'
import React from 'react'
import { logo } from '../../public'
import Link from 'next/link'

const Footer = () => {
  return (
<footer className="bg-gray-100">
  <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="flex justify-center text-teal-600">
    <Link href='/' title='download video youtube' className=" flex flex-row gap-x-2 cursor-pointer">

<Image
alt="logo"
title="logo"
width={25}
height={25}
src={logo}

/>
  
<h1 className="text-red-500 text-xl font-extrabold">YouDw</h1>

    </Link>
    </div>

   

    <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
    
      <li>
        <a className="text-gray-700 transition hover:text-gray-700/75" href="#faq" title='Questions and Answers'> Questions and Answers </a>
      </li>

      <li>
        <a className="text-gray-700 transition hover:text-gray-700/75" href="#hero" title='services'> Services </a>
      </li>
      <li>
        <a className="text-gray-700 transition hover:text-gray-700/75" href="/privacy-policy" target='_blank' title='PRIVACY POLICY'>PRIVACY POLICY </a>
      </li>

      <li>
        <a className="text-gray-700 transition hover:text-gray-700/75" href="/terms-of-use" target='_blank' title='Terms of Use'> Terms of Use </a>
      </li>


   
    </ul>

  
  </div>
</footer>
  )
}

export default Footer