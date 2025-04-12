import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const ProjectsOIE = () => {
  return (
    <div className="flex flex-col w-11/12 sm:w-4/5 md:w-3/4 rounded-xl mx-auto bg-white">
      
      <div className="w-full p-4 sm:p-6 bg-[#E3F2FD] mb-6 sm:mb-8 rounded-2xl space-y-4 shadow-md">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-700">
          Campus Sustainability Projects with OIE
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-700">
          These projects are being implemented through the Office of Infrastructure and Center for Emerging Technologies for Sustainable Development (CETSD).
        </p>
        <Link 
          target='_blank' 
          href="https://iitj.ac.in/uploaded_docs/Campus%20Sustainability%20projects%202022_19062023.pdf" 
          className="inline-block text-base sm:text-lg md:text-xl text-blue-600 hover:text-blue-800 hover:underline transition-colors"
        >
          SEE AND HOLA PROJECTS-CSP IMPLEMENTATION
        </Link>
      </div>

      <div className="w-full p-4 sm:p-6 bg-[#E3F2FD] mb-6 sm:mb-8 rounded-2xl space-y-4 shadow-md">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-700">Projects</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
              Horticulture and Landscaping (HoLa) Related Projects
            </h3>
            <ul className="list-disc list-inside text-base sm:text-lg md:text-xl text-gray-700 space-y-2 mt-2 pl-2">
              <li>Development and maintenance of Horticulture</li>
              <li>Smart Water Irrigation System</li>
              <li>Installation of Plant Fiber Mincing Machine</li>
              <li>Thatched Pathway Roofing</li>
              <li>Soil restoration</li>
              <li>Waste Segregation at Source</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
              Society, Energy, and Environment (SEE) Projects
            </h3>
            <ul className="list-disc list-inside text-base sm:text-lg md:text-xl text-gray-700 space-y-2 mt-2 pl-2">
              <li>Electric Vehicle Popularization – Battery Recharging Station</li>
              <li>Wetland Restoration and Design</li>
              <li>Digital Archiving of Flora and Fauna</li>
              <li>Carbon and Water footprint of IITJ campus</li>
              <li>Farmers Market</li>
              <li>Energy Audit</li>
              <li>Virtual connection of nearby village with doctors for Covid 19 awareness</li>
              <li>Natural Vegetation Spatial Analysis</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full p-4 sm:p-6 bg-[#E3F2FD] mb-6 sm:mb-8 rounded-2xl space-y-4 shadow-md">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-700">
          Campus Sustainability Projects – Snapshot – 2021-22
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex justify-center rounded-xl overflow-hidden">
            <Image 
              src="/sustain/first.jpeg" 
              width={600} 
              height={400} 
              className="rounded-xl w-full h-auto object-cover"
              alt="Sustainability project image 1" 
            />
          </div>
          <div className="flex justify-center rounded-xl overflow-hidden">
            <Image 
              src="/sustain/second.png" 
              width={600} 
              height={400} 
              className="rounded-xl w-full h-auto object-cover"
              alt="Sustainability project image 2" 
            />
          </div>
          <div className="flex justify-center rounded-xl overflow-hidden sm:col-span-2">
            <Image 
              src="/sustain/third.png" 
              width={600} 
              height={400} 
              className="rounded-xl w-full h-auto object-cover max-w-md mx-auto"
              alt="Sustainability project image 3" 
            />
          </div>
        </div>
        <p className="text-base sm:text-lg text-gray-700 mt-2 text-center">
          Energy and Water Audit of Campus – Completed by Prof. Sudipta Das and Team – B.Tech. Projects.
        </p>
      </div>
    </div>
  );
};

export default ProjectsOIE;