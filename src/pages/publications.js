import Link from 'next/link'
import React from 'react'

const PublicationsPage = () => {
  return (
    <>
      <div className="flex flex-col w-11/12 sm:w-4/5 md:w-3/4 rounded-xl mx-auto bg-white">
        <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-700">Publications</h2>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl mt-2">
            Read CETSD Publications
          </p>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl mt-2">
            The authors align themselves to critical UNSDGs and have impacted the local regions in India, including Thar Desert Regions.
          </p>
        </div>

        <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-700">UNSDG 3: Good Health and Well-being</h2>
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-2">Public Health</h3>
          <h4 className="text-lg sm:text-xl font-semibold text-gray-700 mt-2">Journal Articles</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2 text-base sm:text-lg md:text-xl">
            <li>
              Alok Ranjan, Prithivi Prakash, 2023. Elderly Health in different States of India: learnings from 75th Round National Sample Survey, 2017-18. <em>Journal of Health Management</em>.
            </li>
            <li>
              Naranjo-Soledad A, Smesrud L, Bandaru SR, et al. Low-cost, local production of a safe and effective disinfectant for resource-constrained communities. <em>PLOS Global Public Health</em>.
            </li>
            <li>
              Alok Ranjan, Crasta, J.E. Progress towards universal health coverage in the context of mental disorders in India: evidence from national sample survey data. <em>Int J Ment Health Syst</em> 17, 27 (2023).{' '}
              <Link
                href="https://doi.org/10.1186/s13033-023-00595-6"
                target="_blank"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                Click Here
              </Link>
            </li>
            <li>
              Singh, S., Shukla, A., & Jain, K. (2024). Assessing the urbanization-induced impact on environmental parameters of a city from a remote-sensing perspective. <em>Remote Sensing Applications: Society and Environment</em>, 34, 101169.{' '}
              <Link
                href="https://doi.org/10.1016/j.rsase.2024.101169"
                target="_blank"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                Click Here
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-700">UNSDG 4: Quality Education</h2>
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-2">NEP 2020 / Rural Education</h3>
          <h4 className="text-lg sm:text-xl font-semibold text-gray-700 mt-2">Book Chapter</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2 text-base sm:text-lg md:text-xl">
            <li>
              Ahmad, M., and Plappally, A. K., 2021. Emerging Technologies in Teaching and Learning Processes, in <em>Mapping Innovations- An Outlook of Stakeholders</em>, NSD 2021 BLR- Collection of Award winning and Selected Essays, Sanchi Foundation, TechfizInc Publishers, Bengaluru, India.
            </li>
          </ul>
          <h4 className="text-lg sm:text-xl font-semibold text-gray-700 mt-2">Book</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2 text-base sm:text-lg md:text-xl">
            <li>
              Vivek Vijay, 2021. <em>Mai Vidyalay Bol Raha Hoon</em>, Rajasthani Grinthagar (Hindi). For more{' '}
              <Link
                href="https://www.exoticindiaart.com/book/details/main-vidhyalay-bol-raha-hoon-uag698/"
                target="_blank"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                Click Here
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-700">UNSDG 6: Clean Water and Sanitation</h2>
          <h4 className="text-lg sm:text-xl font-semibold text-gray-700 mt-2">Conference Paper</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2 text-base sm:text-lg md:text-xl">
            <li>
              Rajkumar Satankar, Anand Krishnan Plappally, Deepak Saxena, Timothy Savage, P. J. Wall. A Socio-Cultural Perspective on Technology for Environmental Sustainability: The Case of Filtering Water Pots (G-filters) in Rajasthan, India. <em>18th IFIP <Link href='https://www.ifip.org/' className='text-blue-700 hover:underline'>(International Federation for Information Processing)</Link> Working Group 9.4 Conference</em>, Capetown, South Africa, 20-22 May 2024.
            </li>
          </ul>
          <h4 className="text-lg sm:text-xl font-semibold text-gray-700 mt-2">Journal Paper</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2 text-base sm:text-lg md:text-xl">
            <li>
              Aulia Nazar, Chandana N, Daniel. How do Mothers in Suburban Areas Dispose of Toddler Feces and What are Their Perceptions About It? A Case Study From The City of Kendari, Indonesia. <em>WHO South-East Asia Journal of Public Health</em>.
            </li>
          </ul>
          <h4 className="text-lg sm:text-xl font-semibold text-gray-700 mt-2">Down to Earth Article</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2 text-base sm:text-lg md:text-xl">
            <li>
              Neha, Namita, Chandana N, Jitesh, Atun Roy. A new field experiment shows that fertiliser derived from faecal sludge can improve crop yields.{' '}
              <Link
                href="https://www.downtoearth.org.in/news/rural-water-and-sanitation/worthy-alternative-94032"
                target="_blank"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                Click Here
              </Link>
            </li>
          </ul>
          <h4 className="text-lg sm:text-xl font-semibold text-gray-700 mt-2">Book Chapter</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2 text-base sm:text-lg md:text-xl">
            <li>
              Vishal, A., Chandana N. (2023). Assessment of Micro-Strength Properties and Strength Enhancement of the Biomass Aggregate Concrete. In: Vilventhan, A., Singh, S.B., Delhi, V.S.K. (eds) <em>Advances in Construction Materials and Management</em>. ACMM 2022. Lecture Notes in Civil Engineering, vol 346. Springer, Singapore.{' '}
              <Link
                href="https://doi.org/10.1007/978-981-99-2552-0_35"
                target="_blank"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                https://doi.org/10.1007/978-981-99-2552-0_35
              </Link>
            </li>
            <li>
              Chandana N, Akula Vishal. Evaluating bacterial concrete as a solution for construction debris. <em>Material and Energy Recovery from Solid Waste for a Circular Economy</em>, 22-43.{' '}
              <Link
                href="https://doi.org/10.1201/9781003364467"
                target="_blank"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                https://doi.org/10.1201/9781003364467
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-700">UNSDG 15: Life on Land</h2>
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-2">Sustainability of Water</h3>
          <h4 className="text-lg sm:text-xl font-semibold text-gray-700 mt-2">Sustainable Agriculture Strategies for Water Conservation</h4>
          <h5 className="text-base sm:text-lg font-semibold text-gray-700 mt-2">Book Chapter</h5>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2 text-base sm:text-lg md:text-xl">
            <li>
              Pankaj Jakhar, Deepak Kumar Yadav, Sunil Duhan, S. Sunitha, Anand K Plappally. Growth Analysis of Cassava in Semi-Arid region using Novel Subsurface Porous Vessel Irrigation Method. <em>5th International Agronomy Congress 2021</em>, Vol. 3, Agri-Innovations to Combat Food and Nutrition Challenges, 23-27 November 2021, PJTSAU, Hyderabad, Telangana, India.
            </li>
          </ul>
          <h5 className="text-base sm:text-lg font-semibold text-gray-700 mt-2">Journal Article</h5>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2 text-base sm:text-lg md:text-xl">
            <li>
              Nighojkar, A., Pandey, S., Naebe, M. et al. Using machine learning to predict the efficiency of biochar in pesticide remediation. <em>npj Sustain. Agric.</em> 1, 1 (2023).{' '}
              <Link
                href="https://doi.org/10.1038/s44264-023-00001-1"
                target="_blank"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                Click Here
              </Link>
            </li>
          </ul>
          <h5 className="text-base sm:text-lg font-semibold text-gray-700 mt-2">Book Chapter (2023)</h5>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2 text-base sm:text-lg md:text-xl">
            <li>
              Ravi Bhandari, Anand Krishnan Plappally. Affordable ICT Solutions for Water Conservation Using Sensor-Based Irrigation Systems for Use in Arid Agriculture in Thar Desert Region of India. <em>Smart Agriculture for Developing Nations Status, Perspectives and Challenges</em>, 2023, Advanced Technologies and Societal Change Series, Springer, 95-118.{' '}
              <Link
                href="https://doi.org/10.1007/978-981-19-8738-0_8"
                target="_blank"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                Click Here
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-700">UNSDG 12: Responsible Consumption and Production</h2>
          <h4 className="text-lg sm:text-xl font-semibold text-gray-700 mt-2">Journal Article</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2 text-base sm:text-lg md:text-xl">
            <li>
              Ahmad, M., Nighojkar, A., & Plappally, A. A review of the methods of harvesting atmospheric moisture. <em>Environ Sci Pollut Res</em> (2023).{' '}
              <Link
                href="https://doi.org/10.1007/s11356-023-30727-x"
                target="_blank"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                Click Here
              </Link>
            </li>
          </ul>
          <h4 className="text-lg sm:text-xl font-semibold text-gray-700 mt-2">Conference</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2 text-base sm:text-lg md:text-xl">
            <li>
              Deep Gaudani, Nitish Jain, Mukund Kumar, Pradeep Dammala, Sudipta Das, Anand Plappally. The Carbon Footprint Calculations of IIT Jodhpur Campus for year 2019-2020. <em>International Conference on Environmental Sustainability and Geographical Sciences</em>, Aravalli International Group of Conferences, 16-18 December 2023, Seth Gyaniram Bansidhar Podar College, Nawalgarh, Rajasthan, India.
            </li>
          </ul>
          <h4 className="text-lg sm:text-xl font-semibold text-gray-700 mt-2">Sub-topic: River Modeling</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2 text-base sm:text-lg md:text-xl">
            <li>
              Himanchal, Aman Meena, Sunil Duhan, Meraj Ahmad, Pankaj Jakhar, Aswathy Puthukkulam, Vinayak Shedekar, Asmita Murumkar, Anand Plappally. Modeling of Jojari river in semi-arid western Rajasthan, India using the geospatial techniques and 1D flow model analysis. <em>BRICS NUs: Water Resource and Pollution Treatment [WRPT-21] International Conference</em>, 6th-8th July, 2021.
            </li>
          </ul>
          <h4 className="text-lg sm:text-xl font-semibold text-gray-700 mt-2">Localization of SDGs</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2 text-base sm:text-lg md:text-xl">
            <li>
              Anjana R Nair, Prathamesh Gavande, Shafaqat Hussain, Varun Sharma, Meraj Ahmad, Sunil Duhan, Himanchal, Nirmal Gehlot, Ram Singh, Prasenjeet Tribhuvan, Vivek Vijay, Anand Krishnan Plappally. Kare Jo Unnat: Exploration for Localization of Sustainable Development Goals. <em>International Conference on Accounting, Banking, Economics Research and Social Sciences</em>, Aravalli International Group of Conferences, 16-18 December 2023, Seth Gyaniram Bansidhar Podar College, Nawalgarh, Rajasthan, India.
            </li>
          </ul>
        </div>

        {/* IITJ Publications */}
        <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-700">IITJ Publications</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2 text-base sm:text-lg md:text-xl">
            <li>
              <Link
                href="https://iitj.ac.in/techscape/vol03/issue03/ssc/navigating_the_digital_divide/"
                target="_blank"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                Navigating the Digital Divide
              </Link>
            </li>
            <li>
              <Link
                href="https://iitj.ac.in/techscape/vol04/issue01/"
                target="_blank"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                Techscape Vol. 4, Issue 1
              </Link>
            </li>
            <li>
              <Link
                href="https://iitj.ac.in/techscape/vol04/issue01/commemorating_iitj/fifteen_years_of_campus_development"
                target="_blank"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                Fifteen Years of Campus Development
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default PublicationsPage