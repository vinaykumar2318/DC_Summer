import Link from 'next/link'
import React from 'react'

const NetZero = () => {
  return (
    <>
      <div className="flex flex-col w-3/4 rounded-xl mx-auto bg-white">
        <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
          <h2 className="text-3xl font-bold text-blue-700">Net Zero Commitment by IIT Jodhpur</h2>
          <p className="text-gray-700 text-xl mt-2">
            IIT Jodhpur has committed to achieving net-zero greenhouse gas emissions by 2050. This goal will be pursued through the mobilization of academic expertise, research and laboratory capabilities, dedicated funding, and the skills of students and personnel. The institute aims to advance emerging technologies for climate resilience, sustainable resource management, and water conservation while integrating social and scientific responsibility to support adaptive communities and long-term environmental sustainability.
          </p>
          <p className="text-gray-700 text-xl mt-2">
            To achieve its sustainability goals, IIT Jodhpur reports its carbon emissions in accordance with the GHG Protocol Corporate Standard and has a strategic plan to systematically reduce emissions, ensuring transparency and alignment with global best practices in greenhouse gas accounting and reporting.
          </p>
        </div>

        <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
          <h2 className="text-3xl font-bold text-blue-700">Reports on Managing Carbon Footprint</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2 text-xl">
            <li className='underline'>
              <Link target="_blank" href="https://cetsd.iitj.ac.in/wp-content/uploads/2024/04/Indian-Institute-of-Technology-Jodhpur_-Carbon-emission-calculation-2023_2024.pdf" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">Report on Managing Carbon Footprint 2023-2024</Link>
            </li>
            <li className='underline'>
              <Link target="_blank" href="https://iitj.ac.in/CETSD/Carbon%20footprint%202019-20%20IIT%20Jodhpur.pdf" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">Report on Managing Carbon Footprint 2019-2020</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default NetZero
