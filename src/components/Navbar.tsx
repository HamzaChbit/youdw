
'use client'

import Image from "next/image"
import { logo } from "../../public"
import LocalSwitcher from "./LocalSwitcher"
import Link from "next/link"






const Navbar = () => {

    
   

  return (

<header className="bg-back">
  <div className="mx-auto max-w-screen-md px-4 sm:px-6 lg:px-8 ">
    <div className="flex h-16 items-center justify-between text-center">
       
        <Link href='/' className=" flex flex-row gap-x-2 cursor-pointer">

<Image
alt="logo"
title="logo"
width={25}
height={25}
src={logo}

/>
  
<h1 className="text-red-500 text-xl font-extrabold">YouDw</h1>

    </Link>



      
   

   
      <LocalSwitcher/>
 
  

    </div>


    
         

  </div>
</header>





 
  )
}

export default Navbar