"use client"

import { useRouter } from 'next/navigation';
import { ChangeEvent, useState, useTransition } from 'react';

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();


  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };
 

  return (
    <div className='rounded-3xl border-none bg-title text-xl  md:text-2xl font-semibold '>
     
      <select
       
        className='bg-transparent  text-white  outline-none rounded-lg  border-black '
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value='en' className='text-black'>en</option>
        <option value='fr'  className='text-black'>fr</option>
      </select>
    </div>
  );
}