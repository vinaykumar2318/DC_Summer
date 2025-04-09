"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Menu, X } from "lucide-react";
import Link from 'next/link';

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

            <div className='flex justify-center w-full'>
                <nav className="w-4/5 bg-[#E3F2FD] shadow-md mt-6 mb-6 p-2 rounded-xl">
                    <div className="flex justify-between items-center text-md font-medium text-gray-700 px-6">
                        <Link href="/uba" className="px-4 py-2 hover:text-blue-600 transition duration-300">
                            UBA
                        </Link>
                        <Link href="/rutag" className="px-4 py-2 hover:text-blue-600 transition duration-300">
                            Rutag
                        </Link>

                        <div
                            className="relative px-4 py-2 transition duration-300 group"
                            onMouseEnter={() => setShowModal(true)}
                            onMouseLeave={() => setShowModal(false)}
                        >
                            <Link href="/sustainability" className="text-gray-700 group-hover:text-blue-600 transition duration-300">
                                SUSTAINABILITY PLAN
                            </Link>

                            {showModal && (
                                <div className="absolute right-0 top-full w-56 bg-white shadow-lg border rounded-lg p-2">
                                    <Link
                                        href="https://www.mysiteroodiya.com/"
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition duration-300"
                                    >
                                        Campus Sustainability Projects with OIE
                                    </Link>
                                    <Link
                                        href="#"
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition duration-300"
                                    >
                                        Sustainiability Plan and Policy
                                    </Link>
                                    <Link
                                        href="#"
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition duration-300"
                                    >
                                        Campus Sustainability
                                    </Link>
                                </div>
                            )}
                        </div>

                        <Link href="/stihub" className="px-4 py-2 hover:text-blue-600 transition duration-300">
                            STI HUB
                        </Link>
                        <Link href="/etsd" className="px-4 py-2 hover:text-blue-600 transition duration-300">
                            ETSD SEMINARS
                        </Link>
                        <Link href="/newsContent/news" className="px-4 py-2 hover:text-blue-600 transition duration-300">
                            NEWS
                        </Link>
                        <Link href="/events" className="px-4 py-2 hover:text-blue-600 transition duration-300">
                            EVENTS
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;