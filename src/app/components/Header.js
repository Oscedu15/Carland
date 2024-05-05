"use client";

import { useContext, useEffect, useState } from "react";

//next image
import Image from "next/image";

//react scroll
import { Link } from "react-scroll";

//components
import SearchMobile from "./SearchMobile";

//media query hook
import { useMediaQuery } from "react-responsive";

//icons 
import {BiMenuAltRight, BiX} from "react-icons/bi";

//SearchContext
import { SearchContext } from "../context/search";

export default function Header() {

  const {setSearchActive} = useContext(SearchContext)

  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);

  const desktopMode = useMediaQuery({
    query: "(min-width: 1300px)",
    //cuando tiene mas de 1300px arroja true
    //cuando tiene menos de 1300px arroja false
  });

  useEffect(() => {
    const handleScroll = () => {
      //Header
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }

      //search
      //el scroll donde le decimos a que altura se fija el panel del buscador
      if(window.scrollY > 400) {
        setSearchActive(true)
      } else {
        setSearchActive(false)
      }
    };

    //Add event listener
    window.addEventListener("scroll", handleScroll);

    //Remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  //console.log(header);
  //cuando hace scroll hacia abajo es true.

  return (
    <header
      className={`${
        header ? "bg-white shadow-md py-2" : "bg-transparent shadow-none py-4"
      }
   fixed w-full max-w-[1920px] mx-auto z-20 transition-all duration-300`}
    >
      <div
        className="xl:container mx-auto flex flex-col xl:flex-row xl:items-center
    xl:justify-between"
      >
        <div className="flex justify-between items-center px-4">
          {/* Logo */}
          {/* smooth es para agregar desplazamiento en la pagina */}
          <Link
            to="home"
            smooth={desktopMode}
            spy={true}
            className="cursor-pointer"
          >
            <Image src={"/icons/logo.svg"} width={194} height={64} alt="" />
          </Link>
          {/* Nav Open Menu */}
          <div onClick={() => setNav(!nav)} className="cursor-pointer xl:hidden">
            {nav ? (<BiX className="text-4xl"/>) : (<BiMenuAltRight className="text-4xl"/>
          )}
          </div>
        </div>
        {/* Nav */}
        <nav className={`${nav ? 'max-h-max py-8 px-4 xl:py-0 xl:px-0' : 'max-h-0 xl:max-h-max'} flex 
        flex-col w-full bg-white gap-y-6 overflow-hidden font-bold xl:font-medium xl:flex-row xl:w-max 
        xl:gap-x-8 xl:h-max xl:bg-transparent xl:pb-0 transition-all duration-150 text-center xl:text-left
       uppercase text-sm xl:text-[15px] xl:normal-case`}>
          <Link className="cursor-pointer" to="home" activeClass="active" 
          smooth={desktopMode} spy={true} onClick={() => setNav(false)}>
            Home
          </Link>
          <Link className="cursor-pointer" to="cars" activeClass="active" 
          smooth={desktopMode} spy={true} onClick={() => setNav(false)}>
            Cars
          </Link>
          <Link className="cursor-pointer" to="about" activeClass="active" 
          smooth={desktopMode} spy={true} onClick={() => setNav(false)}>
            About
          </Link>
          <Link className="cursor-pointer" to="why" activeClass="active" 
          smooth={desktopMode} spy={true} onClick={() => setNav(false)}>
            Why Us
          </Link>
          <Link className="cursor-pointer" to="testimonials" activeClass="active" 
          smooth={desktopMode} spy={true} onClick={() => setNav(false)}>
            Testimonials
          </Link>
          <Link className="cursor-pointer" to="contact" activeClass="active" 
          smooth={desktopMode} spy={true} onClick={() => setNav(false)}>
            Contact
          </Link>
          <Link className="xl:hidden btn btn-primary btn-sm max-w-[164px] mx-auto" to="/" activeClass="active" smooth={desktopMode} spy={true} >
            See all Cars
          </Link>
          <SearchMobile />
        </nav>
      </div>
    </header>
  );
}
