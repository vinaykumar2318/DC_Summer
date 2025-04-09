import Image from 'next/image';
import React from 'react'

const shilpSamagam = () => {
  return (
    <>
        <div className="flex flex-col w-3/4 rounded-xl mx-auto bg-white">
            <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl shadow-md space-y-4">
                <h2 className="text-3xl font-bold text-blue-700">Shilp Samagam Mela 2024</h2>
                <p className="text-gray-700 text-xl">
                Glimpses from the Shilp Samagam Mela 2024 – a celebration of innovation, crafts, and rural ingenuity.
                </p>
                <div className="flex flex-col md:flex-col gap-6">
                    <div className="flex justify-center rounded-xl overflow-hidden">
                        <Image src="/events/samagam/first.jpg" width={600} height={400} className="rounded-xl" alt="Shilp Samagam Mela Image 1" />
                    </div>
                    <div className="flex justify-center rounded-xl overflow-hidden">
                        <Image src="/events/samagam/second.jpg" width={600} height={400} className="rounded-xl" alt="Shilp Samagam Mela Image 2" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default shilpSamagam;
