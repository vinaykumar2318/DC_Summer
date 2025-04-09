import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const STIHUB = () => {
    return (
      <>
        <div className="flex flex-col w-3/4 rounded-xl mx-auto bg-white">
            <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
                <h2 className="text-3xl font-bold text-blue-700">STI HUB IIT Jodhpur</h2>
                <h3 className="text-2xl font-semibold text-gray-800 mt-2">AIM and OBJECTIVE</h3>
                <p className="text-gray-700 text-xl mt-2">
                    This project aims to design and implement techno-social interventions in the livelihood systems of the 
                    SC communities belonging to Western Rajasthan to create positive impactful solutions in enhancing their 
                    quality of life. The project focuses on four areas: 
                </p>
                <p className="text-gray-700 text-xl mt-2">
                    The Rope and Geotextile Manufacturing vertical focuses on training communities on making yarns using 
                    natural fibers and its value addition by converting it into products. These products include meshmats, 
                    nursery pouches, corridor mats, table mats and tea coasters.
                </p>
                <p className="text-gray-700 text-xl mt-2">
                    The SSPV or subsurface porous vessel technology is used for irrigation in arid soil. This encourages vegetable 
                    cultivation within the residential premises thereby directly contributing to the health of the family.
                </p>
                <p className="text-gray-700 text-xl mt-2">
                    The Water Purification vertical focuses on distributing low cost highly efficient g-filters to the villagers and 
                    simultaneously training potter communities on its manufacturing. G-filters also directly contribute to the health 
                    of the people by providing portable water.
                </p>
                <div className="max-w-3xl mx-auto">
                    <Image 
                        src="/STIHUB/verticals.jpg" 
                        width={700} 
                        height={300} 
                        className="rounded-2xl object-contain w-full"
                        alt="Workflow Diagram"
                    />
                </div>
            </div>

            <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
                <h2 className="text-3xl font-bold text-blue-700">STI HUB IIT Jodhpur</h2>
                <h3 className="text-2xl font-semibold text-gray-800 mt-2">AIM and OBJECTIVE</h3>

                {/* Centered Container but Left-Aligned Text */}
                <div className="max-w-3xl mx-auto text-left space-y-6">
                    <p className="text-gray-700 text-xl">
                        This project aims to design and implement techno-social interventions in the livelihood systems of the 
                        SC communities belonging to Western Rajasthan to create positive impactful solutions in enhancing their 
                        quality of life. The project focuses on four areas: 
                    </p>

                    <p className="text-gray-700 text-xl">
                        The Rope and Geotextile Manufacturing vertical focuses on training communities on making yarns using 
                        natural fibers and its value addition by converting it into products. These products include meshmats, 
                        nursery pouches, corridor mats, table mats and tea coasters.
                    </p>

                    <p className="text-gray-700 text-xl">
                        The SSPV or subsurface porous vessel technology is used for irrigation in arid soil. This encourages vegetable 
                        cultivation within the residential premises thereby directly contributing to the health of the family.
                    </p>

                    <p className="text-gray-700 text-xl">
                        The Water Purification vertical focuses on distributing low cost highly efficient g-filters to the villagers and 
                        simultaneously training potter communities on its manufacturing. G-filters also directly contribute to the health 
                        of the people by providing portable water.
                    </p>

                    <div className="mt-4">
                        <Image 
                            src="/STIHUB/verticals.jpg" 
                            width={700} 
                            height={300} 
                            className="rounded-2xl object-contain w-full"
                            alt="Map of project locations in Western Rajasthan"
                        />
                    </div>
                </div>
            </div>

            <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
                <h2 className="text-3xl font-bold text-blue-700 text-center">STI HUB IIT Jodhpur</h2>
                <h3 className="text-2xl font-semibold text-gray-800 mt-2 text-center">AIM and OBJECTIVE</h3>

                {/* Centered Container but Left-Aligned Text */}
                <div className="max-w-3xl mx-auto text-left space-y-6">
                    <p className="text-gray-700 text-xl">
                        This project aims to design and implement techno-social interventions in the livelihood systems of the 
                        SC communities belonging to Western Rajasthan to create positive impactful solutions in enhancing their 
                        quality of life. The project focuses on four areas: 
                    </p>

                    <p className="text-gray-700 text-xl">
                        The Rope and Geotextile Manufacturing vertical focuses on training communities on making yarns using 
                        natural fibers and its value addition by converting it into products. These products include meshmats, 
                        nursery pouches, corridor mats, table mats and tea coasters.
                    </p>

                    <p className="text-gray-700 text-xl">
                        The SSPV or subsurface porous vessel technology is used for irrigation in arid soil. This encourages vegetable 
                        cultivation within the residential premises thereby directly contributing to the health of the family.
                    </p>

                    <p className="text-gray-700 text-xl">
                        The Water Purification vertical focuses on distributing low cost highly efficient g-filters to the villagers and 
                        simultaneously training potter communities on its manufacturing. G-filters also directly contribute to the health 
                        of the people by providing portable water.
                    </p>

                    <div className="mt-4">
                        <Image 
                            src="/STIHUB/verticals.jpg" 
                            width={700} 
                            height={300} 
                            className="rounded-2xl object-contain w-full"
                            alt="Map of project locations in Western Rajasthan"
                        />
                    </div>
                </div>
            </div>



            <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl shadow-md">
                <h2 className="text-3xl font-bold text-blue-700 mb-4">WORKFLOW</h2>

                {/* Centered Image Wrapper with Same Width as Text */}
                <div className="max-w-3xl mx-auto">
                    <Image 
                        src="/STIHUB/workflow.jpg" 
                        width={700} 
                        height={300} 
                        className="rounded-2xl object-contain w-full"
                        alt="Workflow Diagram"
                    />
                </div>
            </div>

            {/* <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl shadow-md">
                <h2 className="text-3xl font-bold text-blue-700 mb-4">LOCATIONS</h2>
                
                <p className="text-gray-700 text-xl text-center">
                    The project focuses on 5 remote districts located in the Thar desert region of India including:
                </p>

                <div className="flex flex-wrap justify-center gap-4 mt-4">
                    <span className="px-4 py-2 bg-red-100 text-red-600 rounded-full text-xl font-semibold">Bikaner</span>
                    <span className="px-4 py-2 bg-green-100 text-green-600 rounded-full text-xl font-semibold">Barmer</span>
                    <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-xl font-semibold">Jaisalmer</span>
                    <span className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-xl font-semibold">Jodhpur</span>
                    <span className="px-4 py-2 bg-yellow-100 text-yellow-600 rounded-full text-xl font-semibold">Nagaur</span>
                </div>

                <h3 className="text-2xl font-bold text-blue-800 text-center mt-6">Project Map</h3>
                <div className="flex justify-center mt-4">
                    <Image 
                        src="/STIHUB/location.jpg" 
                        width={400} 
                        height={200} 
                        className="rounded-2xl object-contain"
                        alt="Map of project locations in Western Rajasthan"
                    />
                </div>
            </div> */}

            <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl shadow-md">
                <h2 className="text-3xl font-bold text-blue-700 mb-4">LOCATIONS</h2>
                
                {/* Centered Content Wrapper */}
                <div className="max-w-3xl mx-auto text-center">
                    {/* Text Section */}
                    <p className="text-gray-700 text-xl">
                        The project focuses on 5 remote districts located in the Thar desert region of India including:
                    </p>

                    {/* Pills List */}
                    <div className="flex flex-wrap justify-center gap-4 mt-4">
                        <span className="px-4 py-2 bg-red-100 text-red-600 rounded-full text-xl font-semibold">Bikaner</span>
                        <span className="px-4 py-2 bg-violet-300 text-violet-600 rounded-full text-xl font-semibold">Barmer</span>
                        <span className="px-4 py-2 bg-sky-200 text-sky-600 rounded-full text-xl font-semibold">Jaisalmer</span>
                        <span className="px-4 py-2 bg-yellow-200 text-yellow-500 rounded-full text-xl font-semibold">Jodhpur</span>
                        <span className="px-4 py-2 bg-green-200 text-green-600 rounded-full text-xl font-semibold">Nagaur</span>
                    </div>

                    {/* Project Map Section */}
                    {/* <h3 className="text-2xl font-bold text-blue-800 mt-6">Project Map</h3> */}
                    
                    {/* Image Area Matching Paragraph Width */}
                    <div className="mt-4">
                        <Image 
                            src="/STIHUB/location.jpg" 
                            width={700} 
                            height={300} 
                            className="rounded-2xl object-contain w-full"
                            alt="Map of project locations in Western Rajasthan"
                        />
                    </div>
                </div>
            </div>

            <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
                <h2 className="text-3xl font-bold text-blue-700">TRAINING DETAILS</h2>
                <p className="text-gray-700 text-xl mt-2">
                    Conducted more than 40 training sessions in various villages of Jodhpur, Bikaner and Jaisalmer. 
                    Trained villagers mostly women in rope making, mesh mat making, ring mat making and nursery pouch making. 
                </p>
                <h3 className="text-2xl font-semibold text-gray-800 mt-2">Clusters</h3>
                <p className="text-gray-700 text-xl mt-2">
                    Formed 3 clusters in Jodhpur with women working on different artifacts based on natural fiber
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2 text-xl">
                      <li>Bhawad cluster: 4-5 women</li>
                      <li>Moklawas Cluster: 3-4 women</li>
                      <li>Jheepasani Cluster: 3 women</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-800 mt-2">Satellite Center</h3>
                <p className="text-gray-700 text-xl mt-2">
                    Formed a satellite center at Arna Jharna Museum.
                </p>

                <h3 className="text-2xl font-semibold text-gray-800 mt-2">NGO Associations</h3>
                <p className="text-gray-700 text-xl mt-2">
                    Working with local NGOs for community outreach and training support.
                </p>

                <h3 className="text-2xl font-semibold text-gray-800 mt-2">Sale Locations for STI Products</h3>
                {/* <p className="text-gray-700 text-xl mt-2">
                    Formed a satellite center at Arna Jharna Museum.
                </p> */}
                <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2 text-xl">
                    <li>Arna Jharna Museum</li>
                    <li>Ajju Nursery, Paota</li>
                </ul>
            </div>

            <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
                <h2 className="text-3xl font-bold text-blue-700">REPORTS</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2 text-xl">
                    {/* <li>
                        <a href="/pdfs/report1.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            Annual Report 2024
                        </a>
                    </li> */}
                    <li>
                        <a href="https://cetsd.iitj.ac.in/wp-content/uploads/2024/06/STI_Y1_Report_updated.pdf" target="_blank" className="text-gray-700 hover:underline">
                            Report - 2023-24
                        </a>
                    </li>
                    <li>
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