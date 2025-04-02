import Link from 'next/link'
import React from 'react'

const News = () => {
  return (
    <>
        <div className="flex flex-col w-3/4 rounded-xl mx-auto bg-white">
            <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
                <h2 className="text-3xl font-bold text-blue-700">News</h2>
                <p className="text-gray-700 text-xl mt-2">
                    Latest updates on PhD admissions, shortlisted candidates, and MS by Research admissions.
                </p>
            </div>

            <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
                <h2 className="text-3xl font-bold text-blue-700">Latest Updates</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-4 text-xl">
                <li className='underline'>
                        <Link href="https://cetsd.iitj.ac.in/wp-content/uploads/2024/05/Corrigendum-2-in-shortlisted-candidates_final-1.pdf" className="text-blue-600 hover:text-blue-800">
                        Update on Shortlisted Candidates for PhD Interviews
                        </Link>
                    </li>
                    <li className='underline'>
                        <Link href="https://cetsd.iitj.ac.in/wp-content/uploads/2024/04/Shortlisted-candidates_Ph.d._cetsd-1-1.pdf" className="text-blue-600 hover:text-blue-800">
                        Shortlisted Candidates for PhD Interviews
                        </Link>
                    </li>
                    <li className='underline'>
                        <Link href="/newsContent/phdAdmission" className="text-blue-600 hover:text-blue-800">
                        PhD Admissions 2024
                        </Link>
                    </li>
                    <li className='underline'>
                        <Link href="/newsContent/msResearch" className="text-blue-600 hover:text-blue-800">
                        MS by Research Admissions 2024
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default News
