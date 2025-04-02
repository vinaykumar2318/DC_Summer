import Link from 'next/link'
import React from 'react'

const phdAdmission = () => {
    return (
        <>
            <div className="flex flex-col w-3/4 rounded-xl mx-auto bg-white">
                <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
                    <h2 className="text-3xl font-bold text-blue-700">Ph.D. Admission</h2>
                    <p className="text-gray-700 text-xl mt-2">
                        The Ph.D. program offered by the <strong>Center for Emerging Technologies for Sustainable Development (CETSD)</strong> at IIT Jodhpur aims to equip post-graduates with expertise in new and emerging areas of Technologies for Sustainable Development.
                    </p>
                    <p className="text-gray-700 text-xl">
                        The program focuses on sustainability within the realms of <strong>Water, Solid Waste Management, Wastewater, Public Health, Urban Planning, and Energy.</strong> It encompasses a wide range of traditional and emerging technologies, including energy-efficient water treatment, wastewater treatment, solid waste management, and natural resource management.
                    </p>
                    <p className="text-gray-700 text-xl">
                        Students will be encouraged to work on projects aligned with the <strong>United Nations Sustainable Development Goals (SDGs)</strong>, utilizing innovative sustainable technologies and fostering participatory processes. These initiatives aim to integrate sustainability into new product and technology developments.
                    </p>
                    <p className="text-gray-700 text-xl">
                        More information on the specific SDGs addressed by students in their research projects can be found <Link href="/sdgs" className="text-blue-600 hover:text-blue-800 underline">here</Link>.
                    </p>
                </div>

                <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
                    <h2 className="text-3xl font-bold text-blue-700">Application Details</h2>
                    <p className="text-gray-700 text-xl">
                        Applicants are requested to use the following links to fill and submit the application form online:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-4 text-xl">
                        <li className='underline'>
                            <Link href="https://oa.iitj.ac.in/PG_ADMISSION" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                                Apply Here (For Indian Nationals Only)
                            </Link>
                        </li>
                        <li className='underline'>
                            <Link href="https://oa.iitj.ac.in/OA_PG_ADMISSION_INTRNL/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                                Apply Here (For INRA and Foreign Applicants Only)
                            </Link>
                        </li>
                    </ul>
                    <p className="text-gray-700 text-xl font-semibold">
                        <strong>Application Deadline:</strong> The deadline to submit online applications for the Ph.D. program in CETSD for AY 2024-25 (session starting in July 2024) is <span className="text-red-600">20 April 2024</span>.
                    </p>
                </div>

                <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
                    <h2 className="text-3xl font-bold text-blue-700">Additional Information</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-4 text-xl">
                        <li className='underline'>
                            <Link href="https://drive.google.com/file/d/177072UOU5WK5-BgmE-ywvqJ637neayN3/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                                Ph.D. Admission Details (PDF 1)
                            </Link>
                        </li>
                        <li className='underline'>
                            <Link href="https://drive.google.com/file/d/1kRBGN5yTke4wgnLJ-V2C5VJ1XleD91ZI/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                                Ph.D. Admission Details (PDF 2)
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default phdAdmission
