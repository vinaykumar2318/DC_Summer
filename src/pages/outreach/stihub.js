import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const STIHUB = () => {
    return (
      <>
        <div className="flex flex-col w-11/12 sm:w-4/5 md:w-3/4 rounded-xl mx-auto bg-white">
            <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-700">STI HUB IIT Jodhpur</h2>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-2">Aim and Objective</h3>
                <p className="text-gray-700 text-base sm:text-lg md:text-xl mt-2">
                    This project aims to design and implement techno-social interventions in the livelihood systems of the 
                    SC communities belonging to Western Rajasthan to create positive impactful solutions in enhancing their 
                    quality of life. The project focuses on four areas: 
                </p>
                <p className="text-gray-700 text-base sm:text-lg md:text-xl mt-2">
                    The Rope and Geotextile Manufacturing vertical focuses on training communities on making yarns using 
                    natural fibers and its value addition by converting it into products. These products include<Link href="/outreach/stiProducts" 
                    className="px-4 py-2 hover:text-blue-600 transition duration-300 hover:underline">
                    meshmats, nursery pouches, corridor mats, table mats and tea coasters.</Link>
                </p>
                <p className="text-gray-700 text-base sm:text-lg md:text-xl mt-2">
                    The SSPV or subsurface porous vessel technology is used for irrigation in arid soil. This encourages vegetable 
                    cultivation within the residential premises thereby directly contributing to the health of the family.
                </p>
                <p className="text-gray-700 text-base sm:text-lg md:text-xl mt-2">
                    The Water Purification vertical focuses on distributing low cost highly efficient g-filters to the villagers and 
                    simultaneously training potter communities on its manufacturing. G-filters also directly contribute to the health 
                    of the people by providing portable water.
                </p>
                <div className="max-w-3xl mx-auto">
                    <Image 
                        src="/STIHUB/verticals.png" 
                        width={700} 
                        height={300} 
                        className="rounded-2xl object-contain w-full"
                        alt="Workflow Diagram"
                    />
                </div>
            </div>

            <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-700">WORKFLOW</h2>

                {/* Centered Image Wrapper with Same Width as Text */}
                <div className="max-w-3xl mx-auto">
                    <Image 
                        src="/STIHUB/workflow.png" 
                        width={700} 
                        height={300} 
                        className="rounded-2xl object-contain w-full"
                        alt="Workflow Diagram"
                    />
                </div>
            </div>

            <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-700">LOCATIONS</h2>
                
                {/* Centered Content Wrapper */}
                <div className="max-w-3xl mx-auto text-center">
                    {/* Text Section */}
                    <p className="text-gray-700 text-base sm:text-lg md:text-xl mt-2">
                        The project focuses on 5 remote districts located in the Thar desert region of India including:
                    </p>

                    {/* Pills List */}
                    <div className="flex flex-wrap justify-center gap-4 mt-4">
                        <span className="px-4 py-2 rounded-full text-xl font-semibold" style={{ backgroundColor: '#CCDFFC', color: '#060D17', border: '2px solid #1447E6' }}>Bikaner</span>
                        <span className="px-4 py-2 rounded-full text-xl font-semibold" style={{ backgroundColor: '#CCDFFC', color: '#060D17', border: '2px solid #1447E6' }}>Barmer</span>
                        <span className="px-4 py-2 rounded-full text-xl font-semibold" style={{ backgroundColor: '#CCDFFC', color: '#060D17', border: '2px solid #1447E6' }}>Jaisalmer</span>
                        <span className="px-4 py-2 rounded-full text-xl font-semibold" style={{ backgroundColor: '#CCDFFC', color: '#060D17', border: '2px solid #1447E6' }}>Jodhpur</span>
                        <span className="px-4 py-2 rounded-full text-xl font-semibold" style={{ backgroundColor: '#CCDFFC', color: '#060D17', border: '2px solid #1447E6' }}>Nagaur</span>
                    </div>


                    {/* Project Map Section */}
                    {/* <h3 className="text-2xl font-bold text-blue-800 mt-6">Project Map</h3> */}
                    
                    {/* Image Area Matching Paragraph Width */}
                    <div className="mt-4">
                        <Image 
                            src="/STIHUB/map.png" 
                            width={700} 
                            height={300} 
                            className="rounded-2xl object-contain w-full"
                            alt="Map of project locations in Western Rajasthan"
                        />
                    </div>
                </div>
            </div>

            <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-700">TRAINING DETAILS</h2>
                <p className="text-gray-700 text-base sm:text-lg md:text-xl mt-2">
                    Conducted more than 40 training sessions in various villages of Jodhpur, Bikaner and Jaisalmer. 
                    Trained villagers mostly women in rope making, mesh mat making, ring mat making and nursery pouch making. 
                </p>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-2">Clusters</h3>
                <p className="text-gray-700 text-base sm:text-lg md:text-xl mt-2">
                    Formed 3 clusters in Jodhpur with women working on different artifacts based on natural fiber
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2 text-base sm:text-lg md:text-xl">
                      <li>Bhawad cluster: 4-5 women</li>
                      <li>Moklawas Cluster: 3-4 women</li>
                      <li>Jheepasani Cluster: 3 women</li>
                </ul>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-2">Satellite Center</h3>
                <p className="text-gray-700 text-base sm:text-lg md:text-xl mt-2">
                    Formed a satellite center at Arna Jharna Museum.
                </p>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-2">NGO Associations</h3>
                <p className="text-gray-700 text-base sm:text-lg md:text-xl mt-2">
                    Working with local NGOs for community outreach and training support.
                </p>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-2">Sale Locations for STI Products</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2 text-base sm:text-lg md:text-xl">
                    <li>Arna Jharna Museum</li>
                    <li>Ajju Nursery, Paota</li>
                </ul>
            </div>

            <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-700">REPORTS</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2 text-base sm:text-lg md:text-xl">
                    <li className='underline'>
                        <a href="https://cetsd.iitj.ac.in/wp-content/uploads/2024/06/STI_Y1_Report_updated.pdf" target="_blank" className="text-gray-700 hover:underline">
                            Report - 2023-24
                        </a>
                    </li>
                    <li className='underline'>
                        <a href="https://cetsd.iitj.ac.in/wp-content/uploads/2025/04/STI-24-25-website-report.pdf" target="_blank" className="text-gray-700 hover:underline">
                            Report - 2024-25
                        </a>
                    </li>
                </ul>
            </div>

        </div>
      </>
    )
}

export default STIHUB