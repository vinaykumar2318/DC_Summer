"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Menu, X } from "lucide-react"; // Import icons
import Link from 'next/link';

const Navbar = () => {
    const [showModal, setShowModal] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="w-full max-w-fit mt-4 mx-10">
            {/* Carousel */}
            <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                interval={3000}
                className="rounded-lg overflow-hidden"
            >
                {[1, 2, 3].map((index) => (
                    <div key={index} className="relative w-full h-96 sm:h-96">
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

            {/* Navbar */}
            <nav className="w-full bg-white shadow-md mt-6 mb-6 p-2 rounded-xl">
                <div className="flex justify-between items-center px-4">
                    {/* Logo (Optional) */}
                    <div className="text-lg font-bold text-gray-700">CETSD</div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6 text-lg font-medium text-gray-700">
                        <a href="#" className="px-4 py-2 hover:text-blue-600 transition duration-300">
                            Sustainability Plan
                        </a>
                        <a href="#" className="px-4 py-2 hover:text-blue-600 transition duration-300">
                            Seminars
                        </a>

                        {/* Dropdown */}
                        <div
                            className="relative px-4 py-2 transition duration-300 group"
                            onMouseEnter={() => setShowModal(true)}
                            onMouseLeave={() => setShowModal(false)}
                        >
                            <span className="text-gray-700 group-hover:text-blue-600 transition duration-300">
                                Local, Sub-National and National Policy Alignment
                            </span>

                            {showModal && (
                                <div className="absolute right-0 top-full w-48 bg-white shadow-lg border rounded-lg p-2">
                                    <a href="https://www.mysiteroodiya.com/"
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition duration-300">
                                        UBA
                                    </a>
                                    <a href="#"
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition duration-300">
                                        STI
                                    </a>
                                    <a href="#"
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition duration-300">
                                        RUTAG
                                    </a>
                                </div>
                            )}
                        </div>

                        <a href="#" className="px-4 py-2 hover:text-blue-600 transition duration-300">
                            Events
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-lg text-gray-700 focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden mt-4`}>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                        Sustainability Plan
                    </a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                        Seminars
                    </a>

                    {/* Mobile Dropdown */}
                    <div className="relative">
                        <button
                            className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                            onClick={() => setShowModal(!showModal)}
                        >
                            Local, Sub-National and National Policy Alignment
                        </button>
                        {showModal && (
                            <div className="bg-white shadow-lg border rounded-lg p-2">
                                <a href="https://www.mysiteroodiya.com/"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                    UBA
                                </a>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                    STI
                                </a>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                    RUTAG
                                </a>
                            </div>
                        )}
                    </div>

                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                        Events
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;