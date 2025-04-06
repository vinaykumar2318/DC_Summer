// import Image from 'next/image'
// import React from 'react'

// const Footer = () => {
//     return (
//         <footer className="text-white bg-[#BBDEFB] py-6 mt-10">
//             <div className="max-w-6xl text-black mx-auto flex flex-col md:flex-row items-center md:items-start justify-between px-6">

//                 <Image src="/logo.png" alt="CETSD Logo" width={200} height={200} />

//                 <div className="flex flex-wrap justify-between w-full md:w-2/3 mt-6 pt-8 md:mt-0">

//                     <div className="w-1/2 md:w-1/3 mb-4 md:mb-0">
//                         <h3 className="text-lg font-semibold border-b border-gray-600 pb-2">Events</h3>
//                         <ul className="mt-2 space-y-1 text-sm">
//                             <li>Shilp Samagam Mela 2024</li>
//                             <li>AIIS Visit</li>
//                             <li>ETSD Seminars</li>
//                             <li>UBA Workshop</li>
//                         </ul>
//                     </div>

//                     <div className="w-1/2 md:w-1/3 mb-4 md:mb-0">
//                         <h3 className="text-lg font-semibold border-b border-gray-600 pb-2">News</h3>
//                         <ul className="mt-2 space-y-1 text-sm">
//                             <li>PhD admissions 2024</li>
//                             <li>MS by Research admissions 2024</li>
//                             <li>Apply for PG admissions 2024</li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>

//             <div className="text-center text-sm text-black mt-6 border-t border-gray-700 pt-4">
//                 ©2025 Center for Emerging Technologies for Sustainable Development
//             </div>
//         </footer>
//     )
// }

// export default Footer



import Image from 'next/image'
import Link from 'next/link' // Import Link component from next
import React from 'react'

const Footer = () => {
    return (
        <footer className="text-white bg-[#BBDEFB] py-6 mt-10">
            <div className="max-w-6xl text-black mx-auto flex flex-col md:flex-row items-center md:items-start justify-between px-6">

                <Image src="/logo.png" alt="CETSD Logo" width={200} height={200} />

                <div className="flex flex-wrap justify-between w-full md:w-2/3 mt-6 pt-8 md:mt-0">

                    <div className="w-1/2 md:w-1/3 mb-4 md:mb-0">
                        <h3 className="text-lg font-semibold border-b border-gray-600 pb-2">Events</h3>
                        <ul className="mt-2 space-y-1 text-sm">
                            <li>
                                <Link target='_blank' href="/eventsContent/shilpSamagam" className="text-blue-600 hover:text-blue-800">
                                    Shilp Samagam Mela 2024
                                </Link>
                            </li>
                            <li>
                                <Link target='_blank' href="/eventsContent/aiisVisit" className="text-blue-600 hover:text-blue-800">
                                    AIIS Visit
                                </Link>
                            </li>
                            <li>
                                <Link target='_blank' href="#" className="text-blue-600 hover:text-blue-800">
                                    ETSD Seminars
                                </Link>
                            </li>
                            <li>
                                <Link target='_blank' href="/eventsContent/ubaWorkshop" className="text-blue-600 hover:text-blue-800">
                                    UBA Workshop
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="w-1/2 md:w-1/3 mb-4 md:mb-0">
                        <h3 className="text-lg font-semibold border-b border-gray-600 pb-2">News</h3>
                        <ul className="mt-2 space-y-1 text-sm">
                            <li>
                                <Link target='_blank' href="/newsContent/phdAdmission" className="text-blue-600 hover:text-blue-800">
                                    PhD admissions 2024
                                </Link>
                            </li>
                            <li>
                                <Link target='_blank' href="/newsContent/msResearch" className="text-blue-600 hover:text-blue-800">
                                    MS by Research admissions 2024
                                </Link>
                            </li>
                            <li>
                                <Link target='_blank' href="/newsContent/phdAdmission" className="text-blue-600 hover:text-blue-800">
                                    Apply for PG admissions 2024
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="text-center text-sm text-black mt-6 border-t border-gray-700 pt-4">
                ©2025 Center for Emerging Technologies for Sustainable Development
            </div>
        </footer>
    )
}

export default Footer
