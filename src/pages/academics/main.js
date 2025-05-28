import Link from 'next/link'
import React from 'react'

const AcademicPrograms = () => {
  return (
    <div className="flex flex-col w-11/12 sm:w-4/5 md:w-3/4 rounded-xl mx-auto bg-white">
      <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-700">Academic Programs</h2>
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">Core Sustainability Programs at IIT Jodhpur</h3>
      </div>

      <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-4 shadow-md">
        <h2 className="text-xl sm:text-2xl font-bold text-blue-700">Ph.D. Program</h2>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl">
          The <Link href="/academics/phdStudents" className='text-blue-700 hover:underline'>Ph.D. program</Link> offered by the Center for Emerging Technologies for Sustainable Development (CETSD) at IIT Jodhpur aims to equip post-graduates with expertise in new and emerging areas of Technologies for Sustainable Development. The program focuses on sustainability within the realms of Water, Solid Waste Management, Wastewater, Public Health, Urban Planning, and Energy.
        </p>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl">
          It encompasses a wide range of technologies including energy-efficient water treatment, solid waste management, sustainable urban development, and natural resource management. Students will engage in projects aligned with the United Nations Sustainable Development Goals (SDGs), fostering innovation and participatory processes.
        </p>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl">
          More information on the specific SDGs addressed by students in their research projects can be found <Link href="/people/phd" className='text-blue-700 hover:underline'>here</Link>.
        </p>
      </div>

      <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-4 shadow-md">
        <h2 className="text-xl sm:text-2xl font-bold text-blue-700">M.S. (by Research) / Masters Program</h2>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl">
          The <Link href="/academics/msStudents" className='text-blue-700 hover:underline'>M.S. (by Research)</Link> program is designed for graduates aiming to gain expertise in sustainable technologies. The focus remains on critical sectors like Water, Wastewater, Solid Waste Management, Energy, Urban Planning, and Public Health.
        </p>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl">
          The curriculum integrates traditional and cutting-edge technologies, and students are encouraged to work on SDG-aligned projects emphasizing innovative and sustainable solutions through participatory methods.
        </p>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl">
          More information on the specific SDGs addressed by students in their research projects can be found <Link href="/people/ms" className='text-blue-700 hover:underline'>here</Link>.
        </p>
      </div>

      <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-4 shadow-md">
        <h2 className="text-xl sm:text-2xl font-bold text-blue-700">Other Programs at IIT Jodhpur with Sustainability Components</h2>
        <ul className="list-disc list-inside text-gray-700 text-base sm:text-lg md:text-xl space-y-2 mt-2">
          <li>
            <Link href="https://iitj.ac.in/uploaded_docs/dept_upload/cvl/Environmental%20Engg.%20curriculum_document-2020-08-25-17-52-pm.pdf" className='text-black hover:underline'>
                <strong>M. Tech. and M. Tech. – Ph.D. Dual Degree</strong> in Infrastructure Engineering with Specialization in Environmental Engineering
            </Link>
          </li>
          <li>
            <Link href="https://iitj.ac.in/uploaded_docs/MTech_MTech-PhD_%20programme%20in%20Energy%20Engg_FINAL_01052020.pdf" className='text-black hover:underline'>
                <strong>M. Tech.</strong> in Infrastructure Engineering with specialization in Energy
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default AcademicPrograms
