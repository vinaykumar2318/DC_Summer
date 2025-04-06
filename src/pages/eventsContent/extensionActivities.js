import Image from 'next/image';
import React from 'react'

const extensionActivities = () => {
  return (
    <>
        <div className="flex flex-col w-3/4 rounded-xl mx-auto bg-white">
            <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
                <h2 className="text-3xl font-bold text-blue-700">Extension Activities: Training Program</h2>
                <p className="text-gray-700 text-xl mt-4">
                    As a part of extension activities, CETSD is conducting a five-day training program for participants from across India, which started on <strong>16 October 2023</strong>.
                </p>
                <p className="text-gray-700 text-xl mt-4">
                    Manufacturing of geotextile, geomats, organic nursery pouches, yarn production and artifacts from ropes of different natural fibers is being taught.
                </p>
                <p className="text-gray-700 text-xl mt-4">
                    The program is aimed at providing hands-on experience and valuable skills to the participants, contributing to their growth and development in the field.
                </p>
                <div className="w-full p-6 flex justify-center bg-[#E3F2FD] mb-8 rounded-2xl space-y-6">
                    <Image src="/events/extension.jpg" height={400} width={800} className='rounded-md'></Image>
                </div>
            </div>
        </div>
    </>
  )
}

export default extensionActivities;
