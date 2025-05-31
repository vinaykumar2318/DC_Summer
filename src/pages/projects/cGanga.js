import Link from 'next/link'
import React from 'react'

const CGanga = () => {
  return (
    <div className="flex flex-col w-11/12 sm:w-4/5 md:w-3/4 rounded-xl mx-auto bg-white">
        <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-700">C Ganga</h2>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">IIT Jodhpur's MOU with cGANGA</h3>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl">
                All the IIT Jodhpurresearchers interested in the area are encouraged to work towards the submitting projects aligned with the vision and mission of cGANGA. Please see
            </p>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl">
                <Link href="http://cganga.org" className='text-blue-700 hover:underline'>http://cganga.org</Link>
            </p>

            <p className="text-gray-700 text-base sm:text-lg md:text-xl">
                Towards doing so, they would like to know the guidelines, and rules through which they can contribute to the purpose. 
                In this regard, you are requested to browse through the process to participate in working groups as elaborated here
            </p>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl">
                <Link href="http://cganga.org/engage-with-us/working-groups-task-forces/" className='text-blue-700 hover:underline'>http://cganga.org/engage-with-us/working-groups-task-forces/</Link>
            </p>

            <p className="text-gray-700 text-base sm:text-lg md:text-xl">
                Furthermore we can also look into Environment Technology Verification Proposals here
            </p>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl">
                <Link href="http://cganga.org/engage-with-us/etv/" className='text-blue-700 hover:underline'>http://cganga.org/engage-with-us/etv/</Link>
            </p>

            <p className="text-gray-700 text-base sm:text-lg md:text-xl">
                An internship opportunity can also availed by the students.
            </p>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl">
                <Link href="http://cganga.org/engage-with-us/internship-program/" className='text-blue-700 hover:underline'>http://cganga.org/engage-with-us/internship-program/</Link>
            </p>
        </div>

        <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-4 shadow-md">
            <h2 className="text-xl sm:text-2xl font-bold text-blue-700">Note to IITJ Faculty</h2>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl">
                Please do write to cGanga directly for research proposal submission
            </p>
        </div>

        <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-4 shadow-md">
            <h2 className="text-xl sm:text-2xl font-bold text-blue-700">Jojari River</h2>
        </div>

        <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-4 shadow-md">
            <h2 className="text-xl sm:text-2xl font-bold text-blue-700">Thesis Work</h2>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl">
                Aman Kumar Meena (M20CI051), Modeling of Jojari river in semi-arid western Rajasthan, India using the geospatial technique and hydrodynamic 
                modeling, Master’s Thesis, Department of Civil and Infrastructure Engineering, May 2022, IT Jodhpur. Jodhpur, Rajasthan
            </p>
        </div>

        <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-4 shadow-md">
            <h2 className="text-xl sm:text-2xl font-bold text-blue-700">International Conference Paper</h2>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl">
                Himanchal, Aman Meena, Sunil Duhan, Meraj Ahmad, Pankaj Jakhar, Aswathy Puthukkulam, Vinayak Shedekar, AsmitaMurumkar, AnandPlappally, 
                2021 Modelling of Jojari river in semi-arid western Rajasthan, India using the geospatial techniques and 1D flow model analysis, 
                BRICS NUs: Water Resource and Pollution Treatment [WRPT-21] International Conference, 6th-8th July, 2021.
            </p>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl">
                <Link href="BRICS NUs: WATER RESOURCES AND POLLUTION TREATMENT [WRPT-21]" className='text-blue-700 hover:underline'>BRICS NUs: WATER RESOURCES AND POLLUTION TREATMENT [WRPT-21]</Link>
            </p>
        </div>
    </div>
  )
}

export default CGanga