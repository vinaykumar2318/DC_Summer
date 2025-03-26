import Link from 'next/link'
import React from 'react'

const Rutag = () => {
  return (
    <>
        <div className="flex flex-col w-3/4 rounded-xl mx-auto bg-white">
            <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
                <h2 className="text-3xl font-bold text-blue-700">RuTAG</h2>
                <h3 className="text-2xl font-semibold text-gray-800 mt-2">Rural Technology Action Group (RuTAG)</h3>
                <p className="text-gray-700 text-xl mt-2">
                    Office of the Principal Scientific Adviser (PSA) to the Government of India conceptualized a mission in 2003-2004 called Rural Technology Action Group (RuTAG). The aim of RuTAG was to provide a science and technology intervention and development of appropriate technologies for rural areas.
                </p>
            </div>
            <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
                <h2 className="text-3xl font-bold text-blue-700">Projects</h2>
                <p className="text-gray-700 text-xl mt-2">
                    For Projects, Please Visit:
                </p>
                <a 
                    href="http://rutag.iitd.ac.in/rutag/?q=projects/completed" 
                    className="text-blue-600 hover:text-blue-800 text-xl hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    http://rutag.iitd.ac.in/rutag/?q=projects/completed
                </a>
            </div>
            <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
                <h2 className="text-3xl font-bold text-blue-700">Newsletters</h2>
                <p className="text-gray-700 text-xl mt-2">
                    Newsletters on IIT Jodhpur Contributions to RuTAG IIT Delhi Center:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2 text-xl">
                    <li className='underline'>
                        <Link target="_blank" href="https://iitj.ac.in/uploaded_docs/RuTAG%20Newsletter%20July%202020%20vol%208%20issue%202_15072022.pdf">RuTAG Newsletter Vol. 8, No.2, Jul 2020</Link>
                    </li>
                    <li className='underline'>
                        <Link target="_blank" href="https://iitj.ac.in/uploaded_docs/RuTAG%20Newsletter,%20Vol.9%20No.1,%20January%202021_15072022.pdf">RuTAG Newsletter Vol. 9, No.1, Jan 2021</Link>
                    </li>
                    <li className='underline'>
                        <Link target="_blank" href="https://iitj.ac.in/uploaded_docs/RuTAG%20%20newsletter%20Volume%209%20No%202%20Aug%202021_15072022.pdf">RuTAG Newsletter Vol. 9, No.2, Jul 2021</Link>
                    </li>
                    <li className='underline'>
                        <Link target="_blank" href="https://iitj.ac.in/uploaded_docs/RuTAG%20Newsletter%20Jan%202022%20Vol%2010%20January%202022_15072022.pdf">RuTAG Newsletter Vol. 10, No.1, Jul 2022</Link>
                    </li>
                </ul>
            </div>
            <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
                <h2 className="text-3xl font-bold text-blue-700">Faculty Participation</h2>
                <p className="text-gray-700 text-xl mt-2">
                    Faculty is encouraged to take up RuTAG projects. Contact RuTAG IIT Delhi:
                </p>
                <a 
                    href="http://rutag.iitd.ac.in/rutag/?q=contact" 
                    className="text-blue-600 hover:text-blue-800 text-xl hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    http://rutag.iitd.ac.in/rutag/?q=contact
                </a>
            </div>
            <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
                <h2 className="text-3xl font-bold text-blue-700">RuTAG Project Students Club</h2>
                    <div className="mt-6 space-y-8">
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="text-2xl font-bold text-blue-700 mb-3 px-4">2023-2022</h3>
                            <h4 className="text-xl font-semibold text-gray-700 mb-2 px-4">B.Tech Students</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ml-4">
                            <div className="bg-gray-50 p-3 rounded-md">
                                <Link target="_blank" href="https://cetsd.iitj.ac.in/wp-content/uploads/2023/09/Arukonda-Travel-Grant-congratulations-e1697087775925.jpg" className='hover:underline hover:decoration-gray-800'>
                                    <p className="text-gray-800 bg-gray-50">Ms. Arukonda Vaishnavi</p>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow">
                        <h3 className="text-2xl font-bold text-blue-700 mb-3 px-4">2022-2021</h3>
                        <h4 className="text-xl font-semibold text-gray-700 mb-2 px-4">PhD Students</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ml-4">
                            <div className="bg-gray-50 p-3 rounded-md">
                                <p className="text-gray-800">Pankaj Jakhar</p>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-md">
                                <p className="text-gray-800">Meraj Ahmad</p>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-md">
                                <p className="text-gray-800">Sunil Duhan</p>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-md">
                                <p className="text-gray-800">Yogesh Sharma</p>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-md">
                                <p className="text-gray-800">Himanchal</p>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-md">
                                <p className="text-gray-800">S S Sai</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow">
                        <h3 className="text-2xl font-bold text-blue-700 mb-3 px-4">2021-2020</h3>
                        <h4 className="text-xl font-semibold text-gray-700 mb-2 px-4">M.Tech Students</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ml-4">
                            <div className="bg-gray-50 p-3 rounded-md">
                                <p className="text-gray-800">Kommuri Kamal Charan</p>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-md">
                                <p className="text-gray-800">Aman Meena</p>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-md">
                                <p className="text-gray-800">Vishnu Choudhary</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow">
                        <h3 className="text-2xl font-bold text-blue-700 mb-3 px-4">2020-2019</h3>
                        <h4 className="text-xl font-semibold text-gray-700 mb-2 px-4">M.Tech Students</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ml-4">
                            <div className="bg-gray-50 p-3 rounded-md">
                                <p className="text-gray-800">Dhalesh Kumar</p>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-md">
                                <p className="text-gray-800">Deepak Kumar Yadav</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Rutag
