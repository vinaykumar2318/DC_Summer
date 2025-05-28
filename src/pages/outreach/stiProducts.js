import Image from 'next/image'
import React from 'react'

const STIHUBPRODUCT = () => {
    return (
      <>
        <div className="flex flex-col w-3/4 rounded-xl mx-auto bg-white">

            <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl shadow-md">

                <h3 className="text-2xl font-semibold text-gray-800 mt-2">Corridor Mat</h3>

                <div className="max-w-3xl mx-auto space-y-8">
                    <Image 
                        src="/STIHUB/p1.jpg" 
                        width={700} 
                        height={300} 
                        className="rounded-2xl object-contain w-full"
                        alt="Workflow Diagram"
                    />
                    <Image 
                        src="/STIHUB/p2.jpg" 
                        width={700} 
                        height={300} 
                        className="rounded-2xl object-contain w-full"
                        alt="Workflow Diagram"
                    />
                </div>

            </div>

            <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl shadow-md">

                <h3 className="text-2xl font-semibold text-gray-800 mt-2">Table Mat</h3>

                <div className="max-w-3xl mx-auto space-y-8">
                    <Image 
                        src="/STIHUB/p3.jpg" 
                        width={700} 
                        height={300} 
                        className="rounded-2xl object-contain w-full"
                        alt="Workflow Diagram"
                    />
                    <Image 
                        src="/STIHUB/p4.jpg" 
                        width={700} 
                        height={300} 
                        className="rounded-2xl object-contain w-full"
                        alt="Workflow Diagram"
                    />
                </div>

            </div>

            <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl shadow-md">

                <h3 className="text-2xl font-semibold text-gray-800 mt-2">Mesh Mat</h3>

                {/* Centered Image Wrapper with Same Width as Text */}
                <div className="max-w-3xl mx-auto space-y-8">
                    <Image 
                        src="/STIHUB/p5.jpg" 
                        width={700} 
                        height={300} 
                        className="rounded-2xl object-contain w-full"
                        alt="Workflow Diagram"
                    />
                    <Image 
                        src="/STIHUB/p6.jpg" 
                        width={700} 
                        height={300} 
                        className="rounded-2xl object-contain w-full"
                        alt="Workflow Diagram"
                    />
                    <Image 
                        src="/STIHUB/p7.jpg" 
                        width={700} 
                        height={300} 
                        className="rounded-2xl object-contain w-full"
                        alt="Workflow Diagram"
                    />
                </div>

            </div>

            <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl shadow-md">

                <h3 className="text-2xl font-semibold text-gray-800 mt-2">Chain Carpet Mat</h3>

                {/* Centered Image Wrapper with Same Width as Text */}
                <div className="max-w-3xl mx-auto space-y-8">
                    <Image 
                        src="/STIHUB/p8.jpg" 
                        width={700} 
                        height={300} 
                        className="rounded-2xl object-contain w-full"
                        alt="Workflow Diagram"
                    />
                </div>

            </div>

            <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl shadow-md">

                <h3 className="text-2xl font-semibold text-gray-800 mt-2">Nursery Pouches Using Different Natural Fiber</h3>

                {/* Centered Image Wrapper with Same Width as Text */}
                <div className="max-w-3xl mx-auto space-y-8">
                    <Image 
                        src="/STIHUB/p9.jpg" 
                        width={700} 
                        height={300} 
                        className="rounded-2xl object-contain w-full"
                        alt="Workflow Diagram"
                    />
                </div>

            </div>

            <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl shadow-md">

                <h3 className="text-2xl font-semibold text-gray-800 mt-2">Tea Coaster</h3>

                <div className="max-w-3xl mx-auto space-y-8">
                    <Image 
                        src="/STIHUB/p10.jpg" 
                        width={700} 
                        height={300} 
                        className="rounded-2xl object-contain w-full"
                        alt="Workflow Diagram"
                    />
                </div>

            </div>

        </div>
      </>
    )
}

export default STIHUBPRODUCT