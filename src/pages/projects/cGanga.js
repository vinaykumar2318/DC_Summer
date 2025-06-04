import Link from 'next/link'
import React from 'react'

const CGanga = () => {
  return (
    <div className="flex flex-col w-11/12 sm:w-4/5 md:w-3/4 rounded-xl mx-auto bg-white">
        
        <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-700">C Ganga</h2>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">IIT Jodhpur's MoU with cGanga</h3>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl">
                All IIT Jodhpur researchers interested in this area are encouraged to work towards submitting projects aligned with the vision and mission of cGanga. Please see
            </p>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl">
                <Link href="http://cganga.org" target='_blank' className='text-blue-700 hover:underline'>http://cganga.org</Link>
            </p>

            <p className="text-gray-700 text-base sm:text-lg md:text-xl">
                Towards this, researchers are encouraged to review the guidelines and rules that will enable them to contribute effectively to the purpose. In this regard, you 
                are requested to browse through the participation process for working groups as elaborated here
            </p>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl">
                <Link href="http://cganga.org/engage-with-us/working-groups-task-forces/" target='_blank' className='text-blue-700 hover:underline'>http://cganga.org/engage-with-us/working-groups-task-forces/</Link>
            </p>

            <p className="text-gray-700 text-base sm:text-lg md:text-xl">
                Furthermore, we can also explore Environment Technology Verification proposals here
            </p>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl">
                <Link href="http://cganga.org/engage-with-us/etv/" target='_blank' className='text-blue-700 hover:underline'>http://cganga.org/engage-with-us/etv/</Link>
            </p>

            <p className="text-gray-700 text-base sm:text-lg md:text-xl">
                An internship opportunity can also be availed by the students.
            </p>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl">
                <Link href="http://cganga.org/engage-with-us/internship-program/" target='_blank' className='text-blue-700 hover:underline'>http://cganga.org/engage-with-us/internship-program/</Link>
            </p>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl">
                Please encourage everyone to submit team-based proposals.
            </p>
        </div>

        <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-700">Faculty Involvement and Research Contributions</h2>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">Note to IIT Jodhpur Faculty</h3>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl">
                Please write directly to cGanga for research proposal submission.
            </p>

            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">Jojari River</h3>

            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">Thesis Work</h3>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl">
                Aman Kumar Meena (M20CI051), "Modeling of Jojari River in Semi-Arid Western Rajasthan, India Using Geospatial Technique and Hydrodynamic Modeling," Master"s 
                Thesis, Department of Civil and Infrastructure Engineering, May 2022, IIT Jodhpur, Jodhpur, Rajasthan.
            </p>

            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">International Conference Paper</h3>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl">
                Himanchal, Aman Meena, Sunil Duhan, Meraj Ahmad, Pankaj Jakhar, Aswathy Puthukkulam, Vinayak Shedekar, Asmita Murumkar, Anand Plappally, 2021. "Modelling of 
                Jojari River in Semi-Arid Western Rajasthan, India Using Geospatial Techniques and 1D Flow Model Analysis." BRICS NUS: Water Resource and Pollution Treatment 
                (WRPT-21) International Conference, 6th-8th July 2021.
            </p>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl">
                <Link href="https://iitj.ac.in/uploaded_docs/Abstract%20Book%20BRICS%20WRPT-21_15072022.pdf" target='_blank' className='text-blue-700 hover:underline'>
                BRICS NUS: Water Resources and Pollution Treatment [WRPT-21]</Link>
            </p>
        </div>
        
    </div>
  )
}

export default CGanga