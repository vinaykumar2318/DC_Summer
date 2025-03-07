"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Navbar = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="w-full max-w-fit mt-4 mx-10">
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

            <nav className="w-full bg-white shadow-md mt-6 mb-6 p-2 rounded-xl">
                <div className="flex justify-evenly items-center text-lg font-medium text-gray-700">
                    <a href="#" className="px-4 py-2 hover:text-blue-600 transition duration-300">
                        Sustainability Plan
                    </a>
                    <a href="#" className="px-4 py-2 hover:text-blue-600 transition duration-300">
                        Seminars
                    </a>

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
                                <a
                                    href="https://www.mysiteroodiya.com/"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition duration-300"
                                >
                                    UBA
                                </a>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition duration-300"
                                >
                                    STI
                                </a>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition duration-300"
                                >
                                    RUTAG
                                </a>
                            </div>
                        )}
                    </div>

                    <a href="#" className="px-4 py-2 hover:text-blue-600 transition duration-300">
                        Events
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
