import Link from 'next/link'
import React from 'react'

const MSResearch = () => {
    return (
        <>
            <div className="flex flex-col w-full sm:w-4/5 md:w-3/4 rounded-xl mx-auto bg-white">
                <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
                    <h2 className="text-3xl font-bold text-blue-700">M.S. by Research Program</h2>
                    <p className="text-gray-700 text-xl mt-2">
                        The M.S. (by Research) program offered by the Center for Emerging Technologies for Sustainable Development (CETSD) at IIT Jodhpur aims to equip graduates with expertise in new and emerging areas of Technologies for Sustainable Development.
                    </p>
                    <p className="text-gray-700 text-xl">
                        The program focuses on sustainability within the realms of Water, Solid Waste Management, Public Health, Urban Planning, Wastewater, and Energy. It includes a range of technologies such as energy-efficient water treatment, wastewater treatments, solid waste management, and natural resource management.
                    </p>
                    <p className="text-gray-700 text-xl">
                        Students will be encouraged to work on projects aligned with the United Nations Sustainable Development Goals (SDGs), utilizing innovative sustainable technologies and participatory processes. These initiatives aim to integrate sustainability into new product and technology developments.
                    </p>
                    <p className="text-gray-700 text-xl">
                        More information on the specific SDGs addressed by students in their research projects can be found <Link href="/newsContent/msStudents" className="text-blue-600 hover:text-blue-800 underline">here</Link>.
                    </p>
                </div>

                <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
                    <h2 className="text-3xl font-bold text-blue-700">Important Links</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-4 text-xl">
                        <li className='underline'>
                            <Link target="_blank" href="https://drive.google.com/file/d/1Ly8yisV0jVso2zabdoUEsdCSbTbLjRfm/view" className="text-blue-600 hover:text-blue-800">
                                Shortlisted Candidates - MS by Research CETSD (Jan 2024)
                            </Link>
                        </li>
                        <li className='underline'>
                            <Link target="_blank" href="https://drive.google.com/file/d/15_M4W79KCtT3rvCtvHMIq6uT9nYi4Z2h/view" className="text-blue-600 hover:text-blue-800">
                                Interview Reporting Details - MS by Research CETSD (Jan 2024)
                            </Link>
                        </li>
                        <li className='underline'>
                            <Link target="_blank" href="https://drive.google.com/file/d/1_UQo6HevzBb55l45EysSLgnyfyR1aELT/view" className="text-blue-600 hover:text-blue-800">
                                Syllabus for Interview - MS by Research CETSD (Jan 2024)
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MSResearch
