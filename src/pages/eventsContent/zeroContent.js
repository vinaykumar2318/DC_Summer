import Image from 'next/image';
import React from 'react'

const ZeroWaste = () => {
  return (
    <>
      <div className="flex flex-col w-3/4 rounded-xl mx-auto bg-white">
        <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
          <h2 className="text-3xl font-bold text-blue-700">International Day of Zero Waste</h2>
          <div className='rounded-2xl overflow-hidden'>
            <Image src="/events/zerocontent.jpg" height={150} width={1200} className='rounded-2xl' alt="Zero Content" />
          </div>
          <p className="text-gray-700 text-xl mt-2">
            The International Day of Zero Waste, adopted by the United Nations General Assembly on December 14, 2022, is observed annually on March 30. It promotes awareness of national, regional, and local zero-waste initiatives and their contributions to sustainable development.
          </p>
        </div>

        <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
          <h2 className="text-3xl font-bold text-blue-700">Webinar Details</h2>
          <p className="text-gray-700 text-xl mt-2">
            <strong>Title:</strong> A Multidimensional Perspective on Waste Management in India<br />
            <strong>Date:</strong> March 30, 2024<br />
            <strong>Time:</strong> 10:00 am to 12:30 pm IST<br />
            <strong>Mode:</strong> Online
          </p>
        </div>

        <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
          <h2 className="text-3xl font-bold text-blue-700">Speakers</h2>
          <ul className="list-disc list-inside text-gray-700 text-xl space-y-2">
            <li>
              <a href="https://rguktn.ac.in/administration/director" className="text-blue-600 hover:underline" target="_blank">Prof. Chandra Sekhar</a>, Director, IIIT Nuzvid
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ghoshananya/" className="text-blue-600 hover:underline" target="_blank">Ananya Ghoshal</a>, Development Professional
            </li>
            <li>
              <a href="https://www.linkedin.com/in/atun-roy-choudhury-a64a3b116/" className="text-blue-600 hover:underline" target="_blank">Atun Roy Choudhury</a>, Sr. Manager-Technical, Cube Bio Energy Pvt. Ltd.
            </li>
            <li>
              <a href="https://wicci.in/priti-rao" className="text-blue-600 hover:underline" target="_blank">Priti Rao</a>, President BEAI, National President WICCI
            </li>
          </ul>
          <h2 className="text-3xl font-bold text-blue-700">Moderation</h2>
          <ul className="list-disc list-inside text-gray-700 text-xl space-y-2">
            <li>Chandana N, Assistant Professor, CETSD</li>
          </ul>
        </div>

        <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
            <h2 className="text-3xl font-bold text-blue-700">Agenda</h2>
            <table className="min-w-full text-left text-gray-700 text-xl border border-gray-300 rounded-md">
                <thead className="bg-blue-100 text-blue-700">
                    <tr>
                        <th className="px-4 py-3 border-b border-gray-300">Time</th>
                        <th className="px-4 py-3 border-b border-gray-300">Session</th>
                        <th className="px-4 py-3 border-b border-gray-300">Speaker</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                        <td className="px-4 py-3">10:00 – 10:10</td>
                        <td className="px-4 py-3">Welcome and Introduction</td>
                        <td className="px-4 py-3">—</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-3">10:10 – 10:30</td>
                        <td className="px-4 py-3">Smart Technologies for Waste Management</td>
                        <td className="px-4 py-3">Prof. Chandra Sekhar</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-3">10:30 – 11:00</td>
                        <td className="px-4 py-3">Solid Waste Management of Urban Odisha</td>
                        <td className="px-4 py-3">Ananya Ghoshal</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-3">11:00 – 11:30</td>
                        <td className="px-4 py-3">Biomining as a Solution for Legacy Waste in India</td>
                        <td className="px-4 py-3">Atun Roy Choudhury</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-3">11:30 – 12:00</td>
                        <td className="px-4 py-3">Bioenzyme for Food Waste Management</td>
                        <td className="px-4 py-3">Priti Rao</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-3">12:00 – 12:15</td>
                        <td className="px-4 py-3">Q&amp;A Session and Closing</td>
                        <td className="px-4 py-3">—</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
          <h2 className="text-3xl font-bold text-blue-700">Registration</h2>
          <p className="text-gray-700 text-xl mt-2">
            Seize the opportunity to learn about Sustainable Waste Management.<br />
            Register now and join the conversation:
          </p>
          <a
            href="https://forms.gle/bWJzyhLKJoKqfUodA"
            className="text-blue-600 hover:text-blue-800 text-xl hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://forms.gle/bWJzyhLKJoKqfUodA
          </a>
        </div>
      </div>
    </>
  )
}

export default ZeroWaste;
