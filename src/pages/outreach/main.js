import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const Main = () => {
  return (
    <div className="flex flex-col w-11/12 sm:w-4/5 md:w-3/4 rounded-xl mx-auto bg-white min-h-screen">
      
      <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-700">About CETSD</h2>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl mt-2">
          Center for Emerging Technologies for Sustainable Development (CETSD) is the center at IIT Jodhpur which puts on the ground viable solutions through schemes combining the technology, funding, management, social, data and environmental touchstones. Communities, industries, government, students, academic institutes, individuals, and non-governmental organizations are a part of this trans-disciplinary center. Center for Emerging Technologies for Sustainable Development is the scientific social responsibility arm of IIT Jodhpur.
        </p>
      </div>

      <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-700">Vision</h2>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl mt-2">
          The vision of CETSD is “To be a partner in tapping the potential of emerging technologies for creating a sustainable and prosperous future India”.
        </p>
      </div>

      <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-700">Mission</h2>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl mt-2">
          There are five major broad missions on which CETSD is working. These are as follows:
        </p>
        <ul className="list-decimal list-inside text-gray-700 space-y-2 mt-2 text-base sm:text-lg md:text-xl">
          <li>To provide a platform for non-governmental and governmental collaborators to work together to apply emerging technologies for finding and implementing solutions towards achieving SDG targets.</li>
          <li>To help develop scientific temper societies to understand technologies that are sustainable or technologies that are using sustainability aspects.</li>
          <li>To innovate solutions and strategies towards challenges in location-specific problems related to energy use, education, water management, infrastructure, traditional livelihood skills, and health.</li>
          <li>To perform applied research in areas such as agriculture, environment, healthcare, waste management, pollution, livelihood, knowledge dissemination, and rural development.</li>
          <li>To make synergistic policy suggestions to handle issues in energy use, agriculture, water management, local pollution in a region and its influences on health.</li>
        </ul>
      </div>

      <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-700">Partnerships & Programs</h2>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl mt-2">
          CETSD is the Center for Rural Development and Technology (CRDT) at IIT Jodhpur in line with the decree of the Ministry of Human Resource and Development (now Ministry of Education) to be set at all IITs. It therefore partners with RuTAG Center IIT Delhi (from the Office of PSA) and UBA program, CRDT, IIT Delhi.
        </p>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl mt-2">
          It is also a Science and Technology Innovation hub (STI Hub from March 2023) after the grant support from DST-SEED Division.
        </p>
      </div>
    </div>
  );
};

export default Main;
