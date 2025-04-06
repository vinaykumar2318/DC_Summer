import Image from 'next/image'
import React from 'react'

const AiisVisit = () => {
  return (
    <>
      <div className="flex flex-col w-3/4 rounded-xl mx-auto bg-white">
        <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
          <h2 className="text-3xl font-bold text-blue-700">American Institute of Indian Studies Visit</h2>
          <p className="text-gray-700 text-xl mt-2">
            We extend our heartfelt appreciation to the AIIS delegates for their visit on <strong>8th January 2024</strong> to <strong>CETSD, IIT Jodhpur</strong>. 
            The day was a confluence of ideas, expertise, and collaborative spirit. Here’s a brief recap:
          </p>
        </div>

        <div className="w-full p-6 bg-[#E3F2FD] text-gray-700 text-xl mb-8 rounded-2xl space-y-6 shadow-md">
            <h2 className="text-3xl font-bold text-blue-700">Sessions</h2>
            <h3 className="text-2xl font-bold text-gray-800">Morning Session (Senate Room)</h3>
            <p>
                The event commenced with a warm welcome note by Prof. Meenu Chhabra, followed by an inspiring address from Prof. Santanu Chaudhury, the Director of IITJ. AIIS guests introduced themselves, setting the stage for a day of insightful discussions.
            </p>
            <ul className="list-disc list-outside pl-5 space-y-2">
                <li>
                <strong>10:40 AM:</strong> Prof. Meenu Chhabra delivered a talk about CETSD, offering valuable insights into cutting-edge research.
                </li>
                <li>
                <strong>11:20 AM:</strong> The morning continued with engaging research talks covering diverse topics, from Waterscape in Thar Desert to Universal Health Coverage in India, and discussions on Ethics, Unnat Bharat Abhiyan, G-Filters, and more.
                </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-800">Afternoon Session (Jodhpur Club)</h3>
            <p className="text-gray-700 text-xl mt-2">
                The afternoon featured cluster talks from AIIS delegates. These sessions encouraged in-depth dialogue, 
                allowing participants to exchange ideas and discuss potential collaborations.
            </p>

            <h3 className="text-2xl font-bold text-gray-800">Late Afternoon Session</h3>
            <p className="text-gray-700 text-xl mt-2">
                The day concluded with a visit to <strong>Banar</strong>, providing guests with an opportunity to experience local heritage and connect with the broader social and cultural environment of Jodhpur.
            </p>
        </div>
        <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
            <h2 className="text-3xl font-bold text-blue-700">AIIS at CETSD, IIT Jodhpur</h2>
            <div className="flex flex-col items-center space-x-4 mt-4">
                <Image src="/events/aiis/first.jpg" width={800} height={800} alt="AIIS Image 2" className="rounded-xl mb-5 shadow-md"/>
                <Image src="/events/aiis/second.jpg" width={800} height={200} alt="AIIS Image 2" className="rounded-xl shadow-md"/>
            </div>
        </div>
      </div>
    </>
  )
}

export default AiisVisit
