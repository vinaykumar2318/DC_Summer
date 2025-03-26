import Image from 'next/image'
import React from 'react'


const UBA = () => {
  return (
    <>
      <div className="flex w-3/4 rounded-xl mx-auto min-h-screen">
        <div className="w-full p-6 bg-white rounded-2xl space-y-6">

            <Image src="/UBA/mainImage.jpg" width={1200} height={200} className='rounded-2xl'></Image>

            <div className="bg-[#E3F2FD] p-4 rounded-lg shadow flex flex-col items-center">
                {/* <h2 className="text-3xl font-bold text-blue-700">Unnat Bharat Abhiyan (UBA)</h2>
                <p className="text-gray-700 mt-2 text-xl">
                    Unnat Bharat Abhiyan is inspired by the the vision of transformational change in rural development processes by leveraging knowledge institutions to help build the architecture of an Inclusive India.
                </p> */}
                <div>
                    <h2 className="text-3xl font-bold text-blue-700">Unnat Bharat Abhiyan (UBA)</h2>
                    <p className="text-gray-700 mt-2 text-xl">
                        Unnat Bharat Abhiyan is inspired by the vision of transformational change in rural development processes by leveraging knowledge institutions to help build the architecture of an Inclusive India.
                    </p>
                </div>
                <a href="https://www.mysiteroodiya.com/" target="_blank" rel="noopener noreferrer" className="w-40 flex flex-row bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 shadow-md ml-4 mt-5">
                    Visit UBA Site
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </a>
            </div>

            <div className="bg-[#E3F2FD] p-4 rounded-lg shadow">
                <h2 className="text-3xl font-bold text-blue-700 mb-5">Our Inspirations</h2>
                <Image src="/UBA/quote.avif" width={1200} height={200} className='rounded-2xl'></Image>
            </div>

            <div className="flex justify-between items-center border-b pb-4">
                <div className="flex items-center space-x-3">
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-12 w-12 text-black" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={1.5} 
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
                    />
                    </svg>
                    <div>
                    <div className="font-bold text-blue-700 text-lg">Unnat Bharat Abhiyan</div>
                    <div className="text-sm text-gray-600">Regional Coordinating Institute</div>
                    <div className="text-sm text-gray-600">E 14 Berm, CETSD IIT, Jodhpur</div>
                    </div>
                </div>

                <div className="flex items-center space-x-3">
                    <div className="text-left">
                    <div className="text-sm text-gray-600 flex items-center justify-end">
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-12 w-12 mr-1.5 text-black" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                        >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={1.5} 
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                        />
                        </svg>
                        <div className='flex flex-col'>
                            <div className="font-bold text-blue-700 text-lg">Contact</div>
                            <div>ngehlot@iitj.ac.in</div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default UBA
