import React from 'react';
import Link from 'next/link';
import { HeartHandshake, Home } from 'lucide-react';
export default function SideBar() {
  return (
    <div className='flex flex-col gap-4 p-3'>
      <Link href='/'>
        <HeartHandshake className='w-16 h-16 cursor-pointer duration-300 hover:bg-emerald-400 rounded-full transition-all p-2' />
      </Link>
      <Link
        href='/'
        className='flex items-center p-3 hover:bg-emerald-400 rounded-full transition-all duration-300 gap-2'
      >
        <Home className='w-7 h-7' /> <span className='font-bold hidded xl:inline'>Home</span>
      </Link>

      <button className='w-48 font-semibold bg-emerald-400 hover:brightness-90 shadow-md text-white p-2 rounded-full hidden xl:inline'>
        Sign In
      </button>
    </div>
  );
}
