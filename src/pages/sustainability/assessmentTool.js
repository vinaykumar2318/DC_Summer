import Link from 'next/link';
import React from 'react'

const AssessmentTool = () => {
  return (
    <div className="flex flex-col w-11/12 sm:w-4/5 md:w-3/4 rounded-xl mx-auto bg-white">
      <div className="w-full p-4 sm:p-6 bg-[#E3F2FD] mb-6 sm:mb-8 rounded-2xl space-y-4 shadow-md">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-700">
          IITJ Sustainability Assessment Tool
        </h2>
        
        <div className="space-y-4">
          <p className="text-base sm:text-lg md:text-xl text-gray-700">
            As part of IIT Jodhpur's ongoing commitment to environmental stewardship and sustainability leadership, the Sustainability Assessment Tool has been developed to evaluate and enhance awareness of key sustainability concepts across the campus community. This tool acts as an interactive educational resource that engages students, faculty, and staff in assessing their knowledge and everyday practices related to renewable energy, waste management, sustainable agriculture, climate change, and environmental impacts.
          </p>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-700">
            By promoting self-reflection and informed decision-making, the tool reinforces IIT Jodhpur's mission to foster a sustainable, climate-resilient campus and to cultivate environmentally conscious leaders who contribute meaningfully to national and global sustainability goals.
          </p>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-700">
            Access the tool here:
          </p>
          
          <Link 
            href="https://docs.google.com/forms/d/e/1FAIpQLSeiF84Qbt4IydHr08r9dHiFMv60CjNvD8ZJep8gRed3JMYrfg/viewform" 
            className="text-base sm:text-lg md:text-xl text-blue-600 hover:text-blue-800 hover:underline transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 IITJ Sustainability Assessment Tool
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AssessmentTool;