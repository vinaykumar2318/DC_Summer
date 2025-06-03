import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ETSDSEMINAR = () => {
    return (
      <>
        <div className="flex flex-col w-11/12 sm:w-4/5 md:w-3/4 rounded-xl mx-auto bg-white">

            <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">

                <h2 className="text-2xl sm:text-3xl font-bold text-blue-700">ETSD Seminars</h2>
                <div className="mt-6 space-y-8">
                    <ol className="list-decimal space-y-6 mt-2">
                        <li className="mb-12">
                            <h3 className="mb-2 text-xl sm:text-2xl font-semibold text-gray-800 mt-2">Series 1: Covid-19 Pandemic Disaster: Water, Agriculture and Environment</h3>
                            <div className="bg-white p-4 rounded-lg shadow">
                                <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2 text-base sm:text-lg md:text-xl">
                                    <li>
                                    <a
                                        href="https://iitj.ac.in/uploaded_docs/ETSD%20Seminar%20-Post%20Covid_26082020.pdf"
                                        target="_blank"
                                        className="text-blue-700 hover:underline"
                                    >
                                        Session 1
                                    </a>
                                    &nbsp;- 5th June, 2020
                                    </li>
                                    <li>
                                    <a
                                        href="https://iitj.ac.in/uploaded_docs/Session%202%20-Post%20Covid_26082020.pdf"
                                        target="_blank"
                                        className="text-blue-700 hover:underline"
                                    >
                                        Session 2
                                    </a>
                                    &nbsp;- 6th June, 2020
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="mb-12">
                            <h3 className="mb-2 text-xl sm:text-2xl font-semibold text-gray-800 mt-2">Series 2: Industrial Development and Operational Processes</h3>
                            <div className="bg-white p-4 rounded-lg shadow">
                                <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2 text-base sm:text-lg md:text-xl">
                                    <li>
                                    <a
                                        href="https://iitj.ac.in/uploaded_docs/ETSD%20Seminar%20Series%202-%20Session%201-%20website_31082020.pdf"
                                        target="_blank"
                                        className="text-blue-700 hover:underline"
                                    >
                                        Session 1
                                    </a>
                                    &nbsp;- Supply Chain Management- Arun Chakravarthy(CEO, DQMS Engineering, India LTD.) - 7th September, 2020
                                    </li>
                                    <li>
                                    <a
                                        href="https://iitj.ac.in/uploaded_docs/ETSD%20Seminar%20Series%202-%20session%202-for%20website%20updated_02092020.pdf"
                                        target="_blank"
                                        className="text-blue-700 hover:underline"
                                    >
                                        Session 2
                                    </a>
                                    &nbsp;- Automative NPI Process- Mr. Yogesh Ramaswamy(Delivery Head, Automative & Aerospace DQMS PVT LTD, DQMS Engineering) - 8th September, 2020
                                    </li>
                                </ul>
                            </div> 
                        </li>
                        <li className="mb-12">
                            <h3 className="mb-2 text-xl sm:text-2xl font-semibold text-gray-800 mt-2">Series 3: Emerging Engineering Horizons - Indian Defense Sector</h3>
                            <div className="bg-white p-4 rounded-lg shadow">  
                                <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2 text-base sm:text-lg md:text-xl">
                                    <li>
                                    <a
                                        href="https://iitj.ac.in/uploaded_docs/ETSD%20Seminar%20Series%203-%20session%201%20and%202.pdf"
                                        target="_blank"
                                        className="text-blue-700 hover:underline"
                                    >
                                        Session 1
                                    </a>
                                    &nbsp;- Challenges and Opportunities in Aerospace Industry in India - Mr. Yogesh Ramaswamy(Delivery Head, Automative & Aerospace DQMS PVT LTD, DQMS Engineering) - 5th October, 2020
                                    </li>
                                    <li>
                                    <a
                                        href="https://iitj.ac.in/uploaded_docs/ETSD%20Seminar%20Series%203-%20session%201%20and%202.pdf"
                                        target="_blank"
                                        className="text-blue-700 hover:underline"
                                    >
                                        Session 2
                                    </a>
                                    &nbsp;- Introduction to Guided Weapon System - Air, Land & Underwater Systems and Operational Methods - (Lt. Cdr Toni Thomas, COO, DQMS PVT LTD, DQMS Engineering) - 7th October, 2020
                                    </li>
                                </ul>
                            </div>      
                        </li>
                        <li className="mb-12">
                            <h3 className="mb-2 text-xl sm:text-2xl font-semibold text-gray-800 mt-2">Series 4: Livelihood Skills and Government Schemes</h3>
                            <div className="bg-white p-4 rounded-lg shadow"> 
                                <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2 text-base sm:text-lg md:text-xl">
                                    <li>
                                    <a
                                        href="#"
                                        className="text-blue-700 hover:underline"
                                    >
                                        Session 1
                                    </a>
                                    &nbsp;- Overview of Scheme of Fund for Regeneration of Traditional Industries (SFURTI) - 30th January, 2021
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="mb-12">
                            <h3 className="mb-2 text-xl sm:text-2xl font-semibold text-gray-800 mt-2">Series 5: Sustainability and Management Development Programs</h3>
                            <div className="bg-white p-4 rounded-lg shadow"> 
                                <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2 text-base sm:text-lg md:text-xl">
                                    <li>
                                    <a
                                        href="#"
                                        className="text-blue-700 hover:underline"
                                    >
                                        Session 1
                                    </a>
                                    &nbsp;- Towards Sustainability - Industry Perspective - Mr. Anubhav Banthia, Manu Yantralaya - 12th April, 2021
                                    </li>
                                    <li>
                                    <a
                                        href="#"
                                        className="text-blue-700 hover:underline"
                                    >
                                        Session 2
                                    </a>
                                    &nbsp;- Value of Buisness - Prof. Sudipta Das, CETSD
                                    </li>
                                    <li>
                                    <a
                                        href="#"
                                        className="text-blue-700 hover:underline"
                                    >
                                        Session 3
                                    </a>
                                    &nbsp;- Sustainability and Rural Buisness - Prof Bhanu Prasad, TCS
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="mb-12">
                            <h3 className="mb-2 text-xl sm:text-2xl font-semibold text-gray-800 mt-2">Series 6: Sustainability Talk on Ecosystem - Wetlands Day Special</h3>
                            <div className="bg-white p-4 rounded-lg shadow"> 
                                <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2 text-base sm:text-lg md:text-xl">
                                    <li>
                                    <a
                                        href="https://iitj.ac.in/uploaded_docs/Session%206%20-Educational%20Tech_12072021.pdf"
                                        target="_blank"
                                        className="text-blue-700 hover:underline"
                                    >
                                        Session 1
                                    </a>
                                    &nbsp;- Prudent Ecosystem Management For Sustenance of Water - Prof. T.V. Ramachandra - 13th July, 2021
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="mb-12">
                            <h3 className="mb-2 text-xl sm:text-2xl font-semibold text-gray-800 mt-2">Series 7: Sustainability and Education</h3>
                            <div className="bg-white p-4 rounded-lg shadow">
                                <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2 text-base sm:text-lg md:text-xl">
                                    <li>
                                    <a
                                        href="https://iitj.ac.in/uploaded_docs/ETSD%20Series%206%20Session%202_updated_21072021.pdf"
                                        target="_blank"
                                        className="text-blue-700 hover:underline"
                                    >
                                        Session 1
                                    </a>
                                    &nbsp;- Role of Sustainability in Higher Education - Prof P.D. Jose(IIM Bangalore), Anurag Goel(Retd IAS - Advisor IITJ) - 19th July, 2021
                                    </li>
                                </ul>
                            </div>    
                        </li>
                        <li className="mb-12">
                            <h3 className="mb-2 text-xl sm:text-2xl font-semibold text-gray-800 mt-2">Series 8: Next Generation Ed Tech Workshop</h3>
                            <div className="bg-white p-4 rounded-lg shadow">
                                <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2 text-base sm:text-lg md:text-xl">
                                    <li>
                                    <a
                                        href="#"
                                        className="text-blue-700 hover:underline"
                                    >
                                        Session 1
                                    </a>
                                    &nbsp;- 4th September 2021
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="mb-12">
                            <h3 className="mb-2 text-xl sm:text-2xl font-semibold text-gray-800 mt-2">Series 9: Rural Industries</h3>
                            <div className="bg-white p-4 rounded-lg shadow">
                                <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2 text-base sm:text-lg md:text-xl">
                                    <li>
                                    <a
                                        href="https://iitj.ac.in/uploaded_docs/ETSD%20Seminar%2010%20Talk%201_18112021.pdf"
                                        target="_blank"
                                        className="text-blue-700 hover:underline"
                                    >
                                        Session 1
                                    </a>
                                    &nbsp;- Technology Intervention in Rural Industries - Prof Bhadoria(RUTAG, IIT KGP) - 19th November, 2021
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="mb-12">
                            <h3 className="mb-2 text-xl sm:text-2xl font-semibold text-gray-800 mt-2">Series 10: ETSD Seminar Series on Ecological Sustainability</h3>
                            <div className="bg-white p-4 rounded-lg shadow">
                                <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2 text-base sm:text-lg md:text-xl">
                                    <li>
                                    <a
                                        href="#"
                                        className="text-blue-700 hover:underline"
                                    >
                                        Session 1
                                    </a>
                                    &nbsp;- Lectures on Lumpy Skin Disease and its Prevalence and Prevention in Milk-Producing Cattle - 12th August, 2022
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="mb-12">
                            <h3 className="mb-2 text-xl sm:text-2xl font-semibold text-gray-800 mt-2">Series 11: World Water Day</h3>
                            <div className="bg-white p-4 rounded-lg shadow">
                                <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2 text-base sm:text-lg md:text-xl">
                                    <li>
                                    <a
                                        href="https://cetsd.iitj.ac.in/wp-content/uploads/2024/04/world-water-day.pdf"
                                        target="_blank"
                                        className="text-blue-700 hover:underline"
                                    >
                                        Session 1
                                    </a>
                                    &nbsp;- Conservation of Traditional Water Bodies through Hydrogeo Tourism - Dr. Shiv Singh Rathore(Ex-Chairman of Rajasthan Public Service Commission (RPSC)) - 22nd March, 2024
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="mb-12">
                            <h3 className="mb-2 text-xl sm:text-2xl font-semibold text-gray-800 mt-2">Series 12: A Multidimensional Perspective on Waste Management in India</h3>
                            <div className="bg-white p-4 rounded-lg shadow">
                                <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2 text-base sm:text-lg md:text-xl">
                                    <li>
                                    <a
                                        href="/eventsContent/zeroContent"
                                        className="text-blue-700 hover:underline"
                                    >
                                        Session 1
                                    </a>
                                    &nbsp;- The International Day of Zero Waste - Professor Chandra Sekhar (Director, IIIT Nuzvid); Ananya Ghosh  
                                    (Development Professional); Atun Roy Choudhury (AGM, Cube Bio Energy PVT LTD) 
                                    and Priti Rao (President BEAI, National President, WICCI) - 30th March, 2024
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="mb-12">
                            <h3 className="mb-2 text-xl sm:text-2xl font-semibold text-gray-800 mt-2">Series 13: Public Health</h3> 
                            <div className="bg-white p-4 rounded-lg shadow">
                                <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2 text-base sm:text-lg md:text-xl">
                                    <li>
                                    <a
                                        href="https://cetsd.iitj.ac.in/wp-content/uploads/2024/05/World-Health-Day.jpg"
                                        target="_blank"
                                        className="text-blue-700 hover:underline"
                                    >
                                        Session 1
                                    </a>
                                    &nbsp;- Achieving Health Rights for Sustainable Development of Communities - Prof. Pankaja Raghav (AIIMS Jodhpur) - 8th April, 2024
                                    </li>
                                    <li>
                                    <a
                                        href="https://cetsd.iitj.ac.in/wp-content/uploads/2024/05/Air-Quality-Awareness-Week-May-2nd-2024_Flyer.jpg"
                                        target="_blank"
                                        className="text-blue-700 hover:underline"
                                    >
                                        Session 2
                                    </a>
                                    &nbsp;- Clean the Air for Children - Dr. Ajay Nagpure  (Princeton University, USA) - 2nd May, 2024
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="mb-12">
                            <h3 className="mb-2 text-xl sm:text-2xl font-semibold text-gray-800 mt-2">Series 14: World Earth Day</h3>
                            <div className="bg-white p-4 rounded-lg shadow">
                                <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2 text-base sm:text-lg md:text-xl">
                                    <li>
                                    <a
                                        href="https://cetsd.iitj.ac.in/wp-content/uploads/2024/04/Earth-Day-Poster.pdf"
                                        target="_blank"
                                        className="text-blue-700 hover:underline"
                                    >
                                        Session 1
                                    </a>
                                    &nbsp;- Planetary Health, Climate and Human Health - Dr. Peter J. Crank (University of Waterloo, Canada) - 22nd April, 2024
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
      </>
    )
}

export default ETSDSEMINAR