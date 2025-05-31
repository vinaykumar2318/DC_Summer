import Link from 'next/link'
import React from 'react'

const Projects = () => {
  return (
    <div className="flex flex-col w-11/12 sm:w-4/5 md:w-3/4 rounded-xl mx-auto bg-white">

      <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-4 shadow-md">
        <h2 className="text-xl sm:text-2xl font-bold text-blue-700">Projects</h2>

        <p className="text-gray-700 text-base sm:text-lg md:text-xl">
          CETSD has developed various sustainable technologies, some of which have been successfully implemented, and others are on their way to implementation. This includes drinking water 
          plants at schools, and sewage treatment plant at military station.
        </p>

        <p className="text-gray-700 text-base sm:text-lg md:text-xl">The <Link href="/outreach/stihub" className='text-blue-700 hover:underline'>Science and Technology Innovation (STI) hub
          </Link> offered by the Center for Emerging Technologies for Sustainable Development (CETSD) at IIT Jodhpur aims to equip post-graduates with expertise in new and emerging areas of 
          Technologies for Sustainable Development. The program focuses on sustainability within the realms of Water, Solid Waste Management, Wastewater, Public Health, Urban Planning, and Energy.
          at CETSD contributes to SDG 4 (Quality education) and 11 (Sustainable cities and communities) with a laboratory to land thought intends to benefit individuals and communities from 
          Jaisalmer, Jodhpur, Nagaur, Barmer, and Bikaner Districts.
        </p>

        <p className="text-gray-700 text-base sm:text-lg md:text-xl">In addition, several <Link href="/sustainability/projectsOIE" className='text-blue-700 hover:underline'>campus sustainability 
          initiatives</Link> that include an innovative water irrigation system, thatched pathway roofing, soil restoration, waste segregation, wetland 
          restoration and design, Digital archiving of flora and fauna, Carbon capture from flue gas, natural vegetation spatial analysis, Khamba composters, G-filters have benefitted 
          the entire community of IIT Jodhpur.
        </p>

      </div>

      <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-700">Scientific Social Responsibility Projects</h2>

        <main className="container max-w-8xl mx-auto py-8 px-4">
          {/* CSR Section */}
          <section className="mb-12">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">CSR Projects</h3>

            <div className="bg-white p-5 mb-4 border border-gray-200 rounded-lg shadow-sm hover:-translate-y-0.5 transition-transform">
              <Link href="https://cetsd.iitj.ac.in/wp-content/uploads/2024/04/Technologies-for-Sustainability.pdf" className="text-lg font-semibold text-blue-600 hover:underline block mb-2">
                Project Umang: Creating Vibrant school cultures in select government schools in Nagaur district of Rajasthan
              </Link>
              <p className="text-gray-600 text-sm">⏳ Timeline: 2023–2026</p>
            </div>

            <div className="bg-white p-5 mb-4 border border-gray-200 rounded-lg shadow-sm hover:-translate-y-0.5 transition-transform">
              <Link href="#" className="text-lg font-semibold text-blue-600 hover:underline block mb-2">
                UF Membrane Assisted Sorption Based Water Purification Systems in Rural Village Schools of Jodhpur District, Rajasthan
              </Link>
              <p className="text-gray-600 text-sm">⏳ Timeline: 2021–2024</p>
              <p className="text-gray-600 text-sm">💰 Cost: ₹40 Lakh</p>
            </div>
          </section>

          {/* Work Order Section */}
          <section className="mb-12">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Work Order</h3>

            <div className="bg-white p-5 mb-4 border border-gray-200 rounded-lg shadow-sm hover:-translate-y-0.5 transition-transform">
              <Link href="#" className="text-lg font-semibold text-blue-600 hover:underline block mb-2">
                GIS Survey Of Waqf Properties & Updation In An Online Waqf Assets Management System Of India (WAMSI) –– For State of Rajasthan
              </Link>
              <p className="text-gray-600 text-sm">⏳ Timeline: 2022</p>
              <p className="text-gray-600 text-sm">💰 Cost: ₹110.62 Lakh</p>
            </div>
          </section>

          {/* Innovation Hub Section */}
          <section className="mb-12">
            <h3 className="text-2xl sm:text-2xl font-semibold text-gray-800 mb-4">Science and Technology Innovation Hub</h3>

            <div className="bg-white p-5 mb-4 border border-gray-200 rounded-lg shadow-sm hover:-translate-y-0.5 transition-transform">
              <Link href="#" className="text-lg font-semibold text-blue-600 hover:underline block mb-2">
                Science Technology and Innovation Hub in IIT Jodhpur, Karwar Block, Jodhpur District, Rajasthan State
              </Link>
              <p className="text-gray-600 text-sm">⏳ Timeline: March 2023 – March 2026</p>
              <p className="text-gray-600 text-sm">💰 Cost: ₹2.1 Crores</p>
            </div>
          </section>

          {/* Research Project Section */}
          <section className="mb-12">
            <h3 className="text-2xl sm:text-2xl font-semibold text-gray-800 mb-4">Industry Sponsered Research Project</h3>

            <div className="bg-white p-5 mb-4 border border-gray-200 rounded-lg shadow-sm hover:-translate-y-0.5 transition-transform">
              <Link href="#" className="text-lg font-semibold text-blue-600 hover:underline block mb-2">
                Transport Mechanism in Plants
              </Link>
              <p className="text-gray-600 text-sm">⏳ Timeline: March 2023 – March 2026</p>
              <p className="text-gray-600 text-sm">💰 Cost: ₹2.1 Crores</p>
            </div>
          </section>
        </main>
      </div>
    </div>  
  )
}

export default Projects