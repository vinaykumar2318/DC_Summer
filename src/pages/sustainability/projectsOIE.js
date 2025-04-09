import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const projectsOIE = () => {
    return (
        <>
            <div className="flex flex-col w-3/4 rounded-xl mx-auto bg-white">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex justify-center rounded-xl overflow-hidden ml-56">
                        <Image src="/logo.png" width={200} height={400} className="rounded-xl" alt="Shilp Samagam Mela Image 1" />
                    </div>
                    <div className="flex justify-center rounded-xl overflow-hidden mr-56">
                        <Image src="/jckic.jpg" width={160} height={100} className="rounded-xl" alt="Shilp Samagam Mela Image 2" />
                    </div>
                </div>
                <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
                    <h2 className="text-3xl font-bold text-blue-700">Campus Sustainability Projects with OIE</h2>
                    <p className="text-gray-700 text-xl mt-2">
                        These projects are being implemented through the Office of Infrastructure and Center for Emerging Technologies for Sustainable Development (CETSD).
                    </p>
                    <Link target='_blank' href="https://iitj.ac.in/uploaded_docs/Campus%20Sustainability%20projects%202022_19062023.pdf" className="text-blue-600 text-xl hover:text-blue-800 hover:underline transition-colors">SEE AND HOLA PROJECTS-CSP IMPLEMENTATION</Link>
                </div>

                <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
                    <h2 className="text-3xl font-bold text-blue-700">Projects</h2>
                    <h3 className="text-2xl font-bold text-gray-800">Horticulture and Landscaping (HoLa) Related Projects</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2 text-xl">
                        <li>Development and maintenance of Horticulture</li>
                        <li>Smart Water Irrigation System</li>
                        <li>Installation of Plant Fiber Mincing Machine</li>
                        <li>Thatched Pathway Roofing</li>
                        <li>Soil restoration</li>
                        <li>Waste Segregation at Source</li>
                    </ul>

                    <h3 className="text-2xl font-bold text-gray-800">Society, Energy, and Environment (SEE) Projects</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2 text-xl">
                        <li>Electric Vehicle Popularization – Battery Recharging Station</li>
                        <li>Wetland Restoration and Design</li>
                        <li>Digital Archiving of Flora and Fauna</li>
                        <li>Carbon and Water footprint of IITJ campus</li>
                        <li>Farmers Market</li>
                        <li>Energy Audit</li>
                        <li>Virtual connection of nearby village with doctors for Covid 19 awareness</li>
                        <li>Natural Vegetation Spatial Analysis</li>
                    </ul>
                </div>
                <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
                    <h2 className="text-3xl font-bold text-blue-700">Campus Sustainability Projects – Snapshot – 2021-22</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex justify-center rounded-xl overflow-hidden">
                            <Image src="/sustain/first.jpeg" width={600} height={400} className="rounded-xl" alt="Shilp Samagam Mela Image 1" />
                        </div>
                        <div className="flex justify-center rounded-xl overflow-hidden">
                            <Image src="/sustain/second.png" width={600} height={400} className="rounded-xl" alt="Shilp Samagam Mela Image 2" />
                        </div>
                        <div className="flex justify-center rounded-xl overflow-hidden">
                            <Image src="/sustain/third.png" width={600} height={400} className="rounded-xl" alt="Shilp Samagam Mela Image 3" />
                        </div>
                    </div>
                    <p className="text-gray-700 text-md mt-2">
                        Energy and Water Audit of Campus – Completed by Prof. Sudipta Das and Team – B.Tech. Projects.
                    </p>
                </div>
            </div>
        </>
    )
}

export default projectsOIE;
