import Link from 'next/link'
import React from 'react'

const NetZero = () => {
  return (
    <div className="flex flex-col w-11/12 sm:w-4/5 md:w-3/4 rounded-xl mx-auto bg-white">
      
      <div className="w-full p-4 sm:p-6 bg-[#E3F2FD] mb-6 sm:mb-8 rounded-2xl space-y-4 shadow-md">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-700">
          Net Zero Commitment by IIT Jodhpur
        </h2>
        <div className="space-y-4">
          <p className="text-base sm:text-lg md:text-xl text-gray-700">
            IIT Jodhpur has committed to achieving net-zero greenhouse gas emissions by 2050. This goal will be pursued through the mobilization of academic expertise, research and laboratory capabilities, dedicated funding, and the skills of students and personnel. The institute aims to advance emerging technologies for climate resilience, sustainable resource management, and water conservation while integrating social and scientific responsibility to support adaptive communities and long-term environmental sustainability.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-700">
            To achieve its sustainability goals, IIT Jodhpur reports its carbon emissions in accordance with the GHG Protocol Corporate Standard and has a strategic plan to systematically reduce emissions, ensuring transparency and alignment with global best practices in greenhouse gas accounting and reporting.
          </p>
        </div>
      </div>

      <div className="w-full p-4 sm:p-6 bg-[#E3F2FD] mb-6 sm:mb-8 rounded-2xl space-y-4 shadow-md">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-700">
          Reports on Managing Carbon Footprint
        </h2>
        <ul className="list-disc list-inside text-base sm:text-lg md:text-xl text-gray-700 space-y-2 pl-2">
          <li>
            <Link 
              target="_blank" 
              href="https://cetsd.iitj.ac.in/wp-content/uploads/2024/04/Indian-Institute-of-Technology-Jodhpur_-Carbon-emission-calculation-2023_2024.pdf" 
              className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
            >
              Report on Managing Carbon Footprint 2023-2024
            </Link>
          </li>
          <li>
            <Link 
              target="_blank" 
              href="https://iitj.ac.in/CETSD/Carbon%20footprint%202019-20%20IIT%20Jodhpur.pdf" 
              className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
            >
              Report on Managing Carbon Footprint 2019-2020
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NetZero