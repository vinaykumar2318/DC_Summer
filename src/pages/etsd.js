import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ETSDSEMINAR = () => {
    return (
      <>
        <div className="flex flex-col w-3/4 rounded-xl mx-auto bg-white">

            <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-8 shadow-md">

                <h2 className="text-3xl font-bold text-blue-700">ETSD Seminars</h2>

                <ol className="list-decimal list-inside space-y-6 text-2xl font-semibold text-gray-800">
                    <li>
                        Series 1: Covid-19 Pandemic Disaster: Water, Agriculture and Environment
                        <ul className="ml-6 list-disc list-inside text-gray-700 space-y-2 mt-3 text-xl font-normal">
                            <li>
                            <a
                                href="https://iitj.ac.in/uploaded_docs/ETSD%20Seminar%20-Post%20Covid_26082020.pdf"
                                target="_blank"
                                className="text-blue-700 hover:underline"
                            >
                                Session 1
                            </a>
                            &nbsp;- 5th June 2020
                            </li>
                            <li>
                            <a
                                href="https://iitj.ac.in/uploaded_docs/Session%202%20-Post%20Covid_26082020.pdf"
                                target="_blank"
                                className="text-blue-700 hover:underline"
                            >
                                Session 2
                            </a>
                            &nbsp;- 6th June 2020
                            </li>
                        </ul>
                    </li>
                    <li>
                        Series 2: Industrial Development and Operational Processes
                        <ul className="ml-6 list-disc list-inside text-gray-700 space-y-2 mt-3 text-xl font-normal">
                            <li>
                            <a
                                href="https://iitj.ac.in/uploaded_docs/ETSD%20Seminar%20Series%202-%20Session%201-%20website_31082020.pdf"
                                target="_blank"
                                className="text-blue-700 hover:underline"
                            >
                                Session 1
                            </a>
                            &nbsp;- 7th September 2020
                            </li>
                            <li>
                            <a
                                href="https://iitj.ac.in/uploaded_docs/ETSD%20Seminar%20Series%202-%20session%202-for%20website%20updated_02092020.pdf"
                                target="_blank"
                                className="text-blue-700 hover:underline"
                            >
                                Session 2
                            </a>
                            &nbsp;- 8th September 2020
                            </li>
                        </ul>
                    </li>
                    <li>
                        Series 3: Emerging Engineering Horizons - India Defense Sector
                        <ul className="ml-6 list-disc list-inside text-gray-700 space-y-2 mt-3 text-xl font-normal">
                            <li>
                            <a
                                href="https://iitj.ac.in/uploaded_docs/ETSD%20Seminar%20Series%203-%20session%201%20and%202.pdf"
                                target="_blank"
                                className="text-blue-700 hover:underline"
                            >
                                Session 1
                            </a>
                            &nbsp;- Challenges and Opportunities in Aerospace Industry in India - 5th October 2020
                            </li>
                            <li>
                            <a
                                href="https://iitj.ac.in/uploaded_docs/ETSD%20Seminar%20Series%203-%20session%201%20and%202.pdf"
                                target="_blank"
                                className="text-blue-700 hover:underline"
                            >
                                Session 2
                            </a>
                            &nbsp;- Introduction to Guided Weapon System - Air, Land & Underwater Systems and Operational Methods - 7th Oct 2020
                            </li>
                        </ul>
                    </li>
                    <li>
                        Series 4: Livelihood Skills and Government Schemes
                        <ul className="ml-6 list-disc list-inside text-gray-700 space-y-2 mt-3 text-xl font-normal">
                            <li>
                            <a
                                href="#"
                                className="text-blue-700 hover:underline"
                            >
                                Session 1
                            </a>
                            &nbsp;- Overview of Scheme of Fund for Regeneration of Traditional Industries (SFURTI) - 30th January 2021 onwards
                            </li>
                        </ul>
                    </li>
                    <li>
                        Series 5: Sustainability and Management Development Programs
                        <ul className="ml-6 list-disc list-inside text-gray-700 space-y-2 mt-3 text-xl font-normal">
                            <li>
                            <a
                                href="#"
                                className="text-blue-700 hover:underline"
                            >
                                Session 1
                            </a>
                            &nbsp;- Towards Sustainability - Industry Perspective - Mr. Anubhav Banthia, Manu Yantralaya - 12 April 2020
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
                    </li>
                    <li>
                        Series 6: Sustainability Talk on Ecosystem - Wetlands Day Special
                        <ul className="ml-6 list-disc list-inside text-gray-700 space-y-2 mt-3 text-xl font-normal">
                            <li>
                            <a
                                href="https://iitj.ac.in/uploaded_docs/Session%206%20-Educational%20Tech_12072021.pdf"
                                target="_blank"
                                className="text-blue-700 hover:underline"
                            >
                                Session 1
                            </a>
                            &nbsp;- Prudent Ecosystem Management For Sustenance of Water - Prof. T.V. Ramachandra - 13 July 2021
                            </li>
                        </ul>
                    </li>
                    <li>
                        Series 7: Sustainability and Education
                        <ul className="ml-6 list-disc list-inside text-gray-700 space-y-2 mt-3 text-xl font-normal">
                            <li>
                            <a
                                href="https://iitj.ac.in/uploaded_docs/ETSD%20Series%206%20Session%202_updated_21072021.pdf"
                                target="_blank"
                                className="text-blue-700 hover:underline"
                            >
                                Session 1
                            </a>
                            &nbsp;- Theme: Role of Sustainability in Higher Education - Prof P.D. Jose, Anurag Goel (Retd IAS - Advisor IITJ) - 19 July 2021
                            </li>
                        </ul>
                    </li>
                    <li>
                        Series 8: Next Generation Ed Tech Workshop
                        <ul className="ml-6 list-disc list-inside text-gray-700 space-y-2 mt-3 text-xl font-normal">
                            <li>
                            <a
                                href="#"
                                className="text-blue-700 hover:underline"
                            >
                                Session 1
                            </a>
                            &nbsp;- September 4, 2021
                            </li>
                        </ul>
                    </li>
                    <li>
                        Series 9: Rural Industries
                        <ul className="ml-6 list-disc list-inside text-gray-700 space-y-2 mt-3 text-xl font-normal">
                            <li>
                            <a
                                href="https://iitj.ac.in/uploaded_docs/ETSD%20Seminar%2010%20Talk%201_18112021.pdf"
                                target="_blank"
                                className="text-blue-700 hover:underline"
                            >
                                Session 1
                            </a>
                            &nbsp;- 19th November, 2021 - Theme: Technology Intervention in Rural Industries
                            </li>
                        </ul>
                    </li>
                    <li>
                        Series 10: ETSD Seminar Series on Ecological Sustainability
                        <ul className="ml-6 list-disc list-inside text-gray-700 space-y-2 mt-3 text-xl font-normal">
                            <li>
                            <a
                                href="#"
                                className="text-blue-700 hover:underline"
                            >
                                Session 1
                            </a>
                            &nbsp;- 12th Aug, 2022 - Lectures on Lumpy Skin disease and its prevalence and prevention in milk-producing cattle.
                            </li>
                        </ul>
                    </li>
                    <li>
                        Series 11: Conservation of Traditional Water Bodies through Hydrogeo Tourism
                        <ul className="ml-6 list-disc list-inside text-gray-700 space-y-2 mt-3 text-xl font-normal">
                            <li>
                            <a
                                href="https://cetsd.iitj.ac.in/wp-content/uploads/2024/04/world-water-day.pdf"
                                target="_blank"
                                className="text-blue-700 hover:underline"
                            >
                                Session 1
                            </a>
                            &nbsp;- 22nd March, 2024 - Dr. Shiv Singh Rathore(Ex-Chairman of Rajasthan Public Service Commission (RPSC))
                            </li>
                        </ul>
                    </li>
                    <li>
                        Series 12: A Multidimensional Perspective on Waste Management in India 
                        <ul className="ml-6 list-disc list-inside text-gray-700 space-y-2 mt-3 text-xl font-normal">
                            <li>
                            <a
                                href="#"
                                className="text-blue-700 hover:underline"
                            >
                                Session 1
                            </a>
                            &nbsp;- 30th March, 2024 - Professor Chandra Sekhar (Director, IIIT Nuzvid); Ananya Ghosh  
                            (Development Professional); Atun Roy Choudhury (AGM, Cube Bio Energy Pvt. Ltd.) 
                            and Priti Rao (President BEAI, National President, WICCI)
                            </li>
                        </ul>
                    </li>
                    <li>
                        Series 13: Public Health 
                        <ul className="ml-6 list-disc list-inside text-gray-700 space-y-2 mt-3 text-xl font-normal">
                            <li>
                            <a
                                href="https://cetsd.iitj.ac.in/wp-content/uploads/2024/05/World-Health-Day.jpg"
                                target="_blank"
                                className="text-blue-700 hover:underline"
                            >
                                Session 1
                            </a>
                            &nbsp;- 8th April, 2024 - Achieving Health Rights for Sustainable Development of Communities - Prof. Pankaja Raghav (AIIMS Jodhpur)
                            </li>
                            <li>
                            <a
                                href="https://cetsd.iitj.ac.in/wp-content/uploads/2024/05/Air-Quality-Awareness-Week-May-2nd-2024_Flyer.jpg"
                                target="_blank"
                                className="text-blue-700 hover:underline"
                            >
                                Session 2
                            </a>
                            &nbsp;- 2nd May, 2024 - Clean the AIR for Children - Dr. Ajay Nagpure  (Princeton University, USA)
                            </li>
                        </ul>
                    </li>
                    <li>
                        Series 14: Planetary Health, Climate and Human Health 
                        <ul className="ml-6 list-disc list-inside text-gray-700 space-y-2 mt-3 text-xl font-normal">
                            <li>
                            <a
                                href="https://cetsd.iitj.ac.in/wp-content/uploads/2024/04/Earth-Day-Poster.pdf"
                                target="_blank"
                                className="text-blue-700 hover:underline"
                            >
                                Session 1
                            </a>
                            &nbsp;- 22nd April, 2024 - Dr. Peter J. Crank (University of Waterloo, Canada)
                            </li>
                        </ul>
                    </li>
                </ol>
            </div>

        </div>
      </>
    )
}

export default ETSDSEMINAR