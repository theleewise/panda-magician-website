'use client'

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header(){
  const [top, setTop] = useState(true);
  
  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return(
    <header className={`fixed w-full z-50 ${!top ? 'bg-white shadow-md' : ''}`}>
      <div className="container">
        <nav className="flex gap-5 justify-end items-center py-6">
          <a href="#shows" className="text-inherit no-underline text-lg font-bold">Shows</a>
          <a href="#contact" className="text-inherit no-underline text-lg font-bold">Contact</a>
          <a
            href="https://www.instagram.com/panda.magician/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Image
              aria-hidden
              src="./images/icon-instagram.svg"
              alt="File icon"
              width={18}
              height={18}
            />
          </a>
        </nav>
      </div>
    </header>
  )
}