import Link from 'next/link'
import React from 'react'

const Events = () => {
    return (
        <>
            <div className="flex flex-col w-3/4 rounded-xl mx-auto bg-white">
                <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
                    <h2 className="text-3xl font-bold text-blue-700">Events</h2>
                    <p className="text-gray-700 text-xl mt-2">
                        Stay updated with our latest events, seminars, and workshops.
                    </p>
                </div>

                {/* Event List */}
                <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
                    <h2 className="text-3xl font-bold text-blue-700">Upcoming Events</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-4 text-xl">
                        <li className='underline'>
                            <Link href="https://cetsd.iitj.ac.in/wp-content/uploads/2024/04/ETSD_Public-health-by-CETSD-UBA.pdf" className="text-blue-600 hover:text-blue-800">
                                World Health Day
                            </Link>
                        </li>
                        <li className='underline'>
                            <Link href="/zero-waste-day" className="text-blue-600 hover:text-blue-800">
                                The International Day of Zero Waste
                            </Link>
                        </li>
                        <li className='underline'>
                            <Link href="/shilp-samagam-mela-2024" className="text-blue-600 hover:text-blue-800">
                                Shilp Samagam Mela 2024
                            </Link>
                        </li>
                        <li className='underline'>
                            <Link href="/aiis-visit" className="text-blue-600 hover:text-blue-800">
                                AIIS Visit
                            </Link>
                        </li>
                        <li className='underline'>
                            <Link href="/etsd-seminars" className="text-blue-600 hover:text-blue-800">
                                ETSD Seminars
                            </Link>
                        </li>
                        <li className='underline'>
                            <Link href="/uba-workshop" className="text-blue-600 hover:text-blue-800">
                                UBA Workshop
                            </Link>
                        </li>
                        <li className='underline'>
                            <Link href="/extension-activities" className="text-blue-600 hover:text-blue-800">
                                Extension Activities
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Events
