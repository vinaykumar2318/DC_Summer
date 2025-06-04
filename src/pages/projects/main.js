import Link from 'next/link'
import React from 'react'
import { Hourglass, IndianRupee } from 'lucide-react'

const Projects = () => {
  return (
    <div className="flex flex-col w-11/12 sm:w-4/5 md:w-3/4 rounded-xl mx-auto bg-white">
      
      <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-4 shadow-md">
        
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-700">Projects</h2>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl mt-2">
          CETSD has developed various sustainable technologies, some of which have been successfully implemented, while others are on their way to implementation. 
          This includes drinking water plants at schools and a sewage treatment plant at a military station.
        </p>

        <p className="text-gray-700 text-base sm:text-lg md:text-xl mt-2">
          The <Link href="/outreach/stihub" className='text-blue-700 hover:underline'>Science and Technology Innovation (STI) Hub</Link> at CETSD contributes to SDG 4 
          (Quality Education) and SDG 11 (Sustainable Cities and Communities) through a 'lab-to-land' approach intended to benefit individuals and communities from 
          the districts of Jaisalmer, Jodhpur, Nagaur, Barmer, and Bikaner.
        </p>

        <p className="text-gray-700 text-base sm:text-lg md:text-xl mt-2">
          In addition, several <Link href="/sustainability/projectsOIE" className='text-blue-700 hover:underline'>campus sustainability initiatives </Link>
          — including an innovative water irrigation system, thatched pathway roofing, soil restoration, waste segregation, wetland restoration and design, digital 
          archiving of flora and fauna, carbon capture from flue gas, natural vegetation spatial analysis, Khamba composters, and G-filters — have benefitted 
          the entire IIT Jodhpur community.
        </p>

      </div>

      <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
        
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-700">Scientific Social Responsibility Projects</h2>

        <div className="mt-6 space-y-8">
          <h3 className="mb-2 text-xl sm:text-2xl font-semibold text-gray-800 mt-2">CSR</h3>
          <div className="bg-white p-4 rounded-lg shadow">
            <a
              href="https://cetsd.iitj.ac.in/wp-content/uploads/2024/04/Technologies-for-Sustainability.pdf"
              target="_blank"
              className="text-blue-700 text-base sm:text-lg md:text-xl mt-2 hover:underline"
            >
              Project Umang: Creating Vibrant School Cultures in Selected Government Schools in Nagaur District of Rajasthan
            </a>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl mt-2">
              <span className='font-semibold'>Timeline:</span> 2023-2026
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <a
              href="http://172.16.100.160:8080/uploaded_docs/HEFA%20CSR%20CETSD_31072023.pdf"
              target="_blank"
              className="text-blue-700 text-base sm:text-lg md:text-xl mt-2 hover:underline"
            >
              UF Membrane-Assisted Sorption-Based Water Purification Systems in Rural Village Schools of Jodhpur District, Rajasthan
            </a>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl mt-2">
              <span className="font-semibold">Timeline:</span> 2021-2024
            </p>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl">
              <span className="font-semibold">Cost:</span> ₹40 Lakh
            </p>
          </div>

          <h3 className="mb-2 text-xl sm:text-2xl font-semibold text-gray-800 mt-2">Work Order</h3>
          <div className="bg-white p-4 rounded-lg shadow">
            <a
              href="#"
              target="_blank"
              className="text-blue-700 text-base sm:text-lg md:text-xl mt-2 cursor-not-allowed"
            >
              GIS Survey of Waqf Properties and Updation in an Online Waqf Assets Management System of India (WAMSI) — For State of Rajasthan
            </a>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl mt-2">
              <span className='font-semibold'>Timeline:</span> 2022
            </p>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl">
              <span className="font-semibold">Cost:</span> ₹110.62 Lakh
            </p>
          </div>

          <h3 className="mb-2 text-xl sm:text-2xl font-semibold text-gray-800 mt-2">Science and Technology Innovation Hub</h3>
          <div className="bg-white p-4 rounded-lg shadow">
            <a
              href="/outreach/stihub"
              target="_blank"
              className="text-blue-700 text-base sm:text-lg md:text-xl mt-2 hover:underline"
            >
              Science, Technology and Innovation Hub in IIT Jodhpur, Karwar Block, Jodhpur District, Rajasthan State
            </a>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl mt-2">
              <span className='font-semibold'>Timeline:</span> 2023-2026
            </p>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl">
              <span className="font-semibold">Cost:</span> ₹2.1 Crores
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <a
              href="#"
              target="_blank"
              className="text-blue-700 text-base sm:text-lg md:text-xl mt-2 cursor-not-allowed"
            >
              Hybrid Organic-Inorganic Membranes With Tunable Pore Sizes and Physico-Chemical Properties for Energy-Efficient Separation Technologies
            </a>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl mt-2">
              <span className='font-semibold'>Timeline:</span> 2023-2028
            </p>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl">
              <span className="font-semibold">Cost:</span> ₹35 Lakh
            </p>
          </div>

          <h3 className="mb-2 text-xl sm:text-2xl font-semibold text-gray-800 mt-2">Industry-Sponsered Research Project</h3>
          <div className="bg-white p-4 rounded-lg shadow">
            <a
              href="#"
              target="_blank"
              className="text-blue-700 text-base sm:text-lg md:text-xl mt-2 cursor-not-allowed"
            >
              Transport Mechanism in Plants
            </a>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl mt-2">
              <span className='font-semibold'>Timeline:</span> 2023-2024
            </p>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl">
              <span className="font-semibold">Cost:</span> ₹31 Lakh
            </p>
          </div>

        </div>

      </div>

    </div>  
  )
}

export default Projects