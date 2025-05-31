"use client"

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import Link from 'next/link';

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const projectsDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
      if (projectsDropdownRef.current && !projectsDropdownRef.current.contains(event.target)) {
        setProjectsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full max-w-fit mt-4 mx-4 sm:mx-6 md:mx-10">
      
      <Link href="/" className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-12 z-20 bg-[#bcdef7] rounded-md p-1 sm:p-2 md:p-2.5 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className=" text-blue-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      </Link>

      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
        className="rounded-lg overflow-hidden"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((index) => (
          <div key={index} className="relative w-full h-24 sm:h-44 md:h-64 lg:h-96 rounded-md">
            <Image
              src={`/carousel/carousel-image${index}.jpg`}
              alt={`Slide ${index}`}
              priority
              width={1000}
              height={200}
            />
          </div>
        ))}
      </Carousel>
      <div className="flex justify-center w-full h-20 sm:h-24 md:h-24 lg:h-28">
        <nav className="w-full max-w-7xl mx-auto bg-[#E3F2FD] shadow-md mt-6 mb-6 p-1 sm:p-2 rounded-xl relative">
            <div className="flex justify-between items-center px-2">
            <div className="relative md:hidden flex flex-row justify-between items-center w-full px-2" ref={dropdownRef}>
                <Link href="/" className='text-black font-semibold'>CETSD</Link>
                <button
                className="text-gray-700"
                onClick={() => setMenuOpen(prev => !prev)}
                >
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {menuOpen && (
                <div className="absolute left-0 mt-2 w-52 bg-white border border-gray-200 rounded-lg shadow-md z-50 py-2">
                    <Link href="/people/main" onClick={() => setMenuOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100">People</Link>
                    <Link href="/academics/main" onClick={() => setMenuOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100">Academic Programs</Link>
                    <Link href="/publications" onClick={() => setMenuOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100">Publication</Link>
                    <div className="relative">
                      <div className="flex items-center">
                        <Link href="/projects/main" onClick={() => setMenuOpen(false)} className="flex-1 px-4 py-2 text-sm text-gray-700 hover:bg-blue-100">Projects</Link>
                        <button 
                          onClick={(e) => {
                            e.preventDefault();
                            setProjectsOpen(!projectsOpen);
                          }}
                          className="px-2 py-2 text-gray-700"
                        >
                          {projectsOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </button>
                      </div>
                      {projectsOpen && (
                        <div className="pl-4">
                          <Link href="/projects/ongoing" onClick={() => {setMenuOpen(false); setProjectsOpen(false);}} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100">On going projects</Link>
                          <Link href="/projects/experiment-plots" onClick={() => {setMenuOpen(false); setProjectsOpen(false);}} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100">Experiment plots</Link>
                          <Link href="/projects/aspiration-districts" onClick={() => {setMenuOpen(false); setProjectsOpen(false);}} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100">Aspiration Districts</Link>
                          <Link href="/projects/kvic" onClick={() => {setMenuOpen(false); setProjectsOpen(false);}} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100">KVIC</Link>
                          <Link href="/projects/c-ganga" onClick={() => {setMenuOpen(false); setProjectsOpen(false);}} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100">C Ganga</Link>
                        </div>
                      )}
                    </div>
                    <Link href="/outreach/main" onClick={() => setMenuOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100">Outreach</Link>
                </div>
                )}
            </div>
            </div>

            <div className="hidden md:flex justify-between items-center text-sm lg:text-lg font-medium text-gray-700 px-8 mt-4 space-x-4 md:space-x-6">
                <Link href="/people/main" className="hover:text-blue-600">People</Link>
                <Link href="/academics/main" className="hover:text-blue-600">Academic Programs</Link>
                <Link href="/publications" className="hover:text-blue-600">Publication</Link>
                <div className="relative" ref={projectsDropdownRef}>
                  <div className="flex items-center">
                    <Link href="/projects/main" className="hover:text-blue-600">Projects</Link>
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        setProjectsOpen(!projectsOpen);
                      }}
                      className="ml-1 text-gray-700 hover:text-blue-600"
                    >
                      {projectsOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>
                  </div>
                  {projectsOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-md z-50 py-2">
                      <Link href="https://iitj.ac.in/CETSD/index.php?id=ongoing_projects" onClick={() => setProjectsOpen(false)} className="block px-4 py-2 text-sm hover:bg-blue-100">On going projects</Link>
                      <Link href="https://iitj.ac.in/CETSD/index.php?id=experimental_plot" onClick={() => setProjectsOpen(false)} className="block px-4 py-2 text-sm hover:bg-blue-100">Experiment plots</Link>
                      <Link href="https://iitj.ac.in/techscape/vol01/issue01/issue01/impacting-life-in-rural-rajasthan-through-emerging-technologies/" onClick={() => setProjectsOpen(false)} className="block px-4 py-2 text-sm hover:bg-blue-100">Aspiration Districts</Link>
                      <Link href="https://iitj.ac.in/CETSD/index.php?id=SFURTI_cluster" onClick={() => setProjectsOpen(false)} className="block px-4 py-2 text-sm hover:bg-blue-100">KVIC</Link>
                      <Link href="/projects/cGanga" onClick={() => setProjectsOpen(false)} className="block px-4 py-2 text-sm hover:bg-blue-100">C Ganga</Link>
                    </div>
                  )}
                </div>
                <Link href="/outreach/main" className="hover:text-blue-600">Outreach</Link>
            </div>
        </nav>
      </div>
    </div>
  );
}

export default NavbarMain;