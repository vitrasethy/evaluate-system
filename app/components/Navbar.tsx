"use client"
import { useEffect, useState } from 'react';
import Drop from './dropdown'
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="sticky top-0 bg-[#014164]">
      <div className={`bg-[#014164] transition-all ${scrolling ? '-translate-y-full' : 'translate-y-0'
        }  shadow-md z-50`}>

        <div className="Desktop text-white h-20 justify-between items-center hidden md:flex mr-5 ml-5">
          <div>
            <Image src="/logoFE.webp" alt='' width={50} height={50} />
          </div>
          <div className="flex justify-around w-2/2 focus:outline-none focus:ring uppercase">
            <Link className=" hover:bg-white hover:text-black pr-2 pl-2 pt-5 pb-5 rounded-lg transition ease-in-out delay-50 focus:outline-none focus:ring" href=" ">Engineering day</Link>
            <Link className=" hover:bg-white hover:text-black pr-2 pl-2 pt-5 pb-5 rounded-lg transition ease-in-out delay-50 focus:outline-none focus:ring" href="https://www.google.com">Project Practicum</Link>
            <Link className=" hover:bg-white hover:text-black pr-2 pl-2 pt-5 pb-5 rounded-lg transition ease-in-out delay-50 focus:outline-none focus:ring" href="https://www.google.com">Defence</Link>
            <Link className=" hover:bg-white hover:text-black pr-2 pl-2 pt-5 pb-5 rounded-lg transition ease-in-out delay-50 focus:outline-none focus:ring" href="https://www.google.com">Account</Link>
          </div>
        </div>
        <div className="Mobile text-white flex h-20 items-center ml-5 justify-between md:hidden transition duration-200 z-50">
          <Image src="/logoFE.webp" alt='' width={50} height={50} />
          <Drop />
        </div>
      </div>

      <div>

      </div>

    </div>

  );
}
