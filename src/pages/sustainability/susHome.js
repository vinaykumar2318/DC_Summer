import Link from 'next/link'

const Sustainability = () => {
  return (
    <>
      <div className="flex flex-col w-3/4 rounded-xl mx-auto bg-white">
        <div className="flex justify-around p-6 mb-8 bg-[#E3F2FD] rounded-2xl shadow-md gap-x-6">
          <Link href="/sustainability/projectsOIE" className='w-1/2'>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer text-center">
              <h3 className="text-xl font-semibold text-blue-700">CAMPUS SUSTAINABILITY PROJECTS WITH OIE</h3>
            </div>
          </Link>
          <Link href="/sustainability/netZero" className='w-1/2'>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer text-center">
              <h3 className="text-xl font-semibold text-blue-700">NET ZERO</h3>
            </div>
          </Link>
        </div>

        <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
          <h1 className="text-3xl font-bold text-blue-700">Sustainability Plan</h1>
          <h3 className="text-2xl text-gray-800 mt-2">Sustainable Development Efforts by IIT Jodhpur Through Use of Emerging Technologies</h3>
          <h3 className="text-2xl font-bold text-gray-800">Overarching Goal</h3>
          <p className="text-gray-700 text-xl mt-2">
            Mobilize academic, fund generated, research and laboratory capabilities, student and personnel skill,
            and social scientific responsibility capacities of IIT Jodhpur to advance emerging technologies for
            knowledge preservation of adapted communities, adopt sustainable climate resilient systems, water
            conservation measures, natural resource management, and achieve net-zero greenhouse gas emissions by 2050.
          </p>
        </div>

        <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
          <h2 className="text-3xl font-bold text-blue-700">Environmental and Social Sustainability Training/Workshop/Events 2024-2025</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2 text-xl">
            <li className='underline'>
              <Link target="_blank" href="https://www.instagram.com/p/DAigkfvTa3J/?igsh=MTFqMjc1MWdlOXVrYg%3D%3D" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                Training Program on Social and Environmental Aspects of Sustainability
              </Link>
            </li>
            <li className='underline'>
              <Link target="_blank" href="https://www.instagram.com/p/DAiDuFeTWN-/?igsh=MnEyb3ozZDg5Ym41" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                Reimagine & Recreate: Waste to Art for a Sustainable Future
              </Link>
            </li>
            <li className='underline'>
              <Link target="_blank" href="https://www.instagram.com/p/DAiknKQzPHv/?igsh=MXJlajdwOTBpem15cA%3D%3D" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                Zero Waste Marathon
              </Link>
            </li>
            <li className='underline'>
              <Link target="_blank" href="https://www.instagram.com/p/DAYUny7zo6L/?igsh=aHI1cDcybzhrc2Fz" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                Workshop on Safety and Health of Workers
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
          <h2 className="text-3xl font-bold text-blue-700">Environmental Sustainability</h2>
          <h3 className="text-2xl font-semibold text-gray-800 mt-2">Training/Workshop/Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {[
              {
                title: "Cleanliness Initiatives and Solid Waste Management",
                link: "https://cetsd.iitj.ac.in/wp-content/uploads/2024/04/Swachhata-Hi-Sewa.pdf"
              },
              {
                title: "Novel antibiotic discovery from soil bacteria",
                link: "https://www.linkedin.com/posts/iitjodhpur_iitjodhpur-iitj-workshop-activity-7169295928128888832-2EX6/?utm_source=share&utm_medium=member_desktop"
              },
              {
                title: "Disaster Resilience and Cultural Heritage",
                link: "https://www.linkedin.com/posts/iitjodhpur_iitj-iitjodhpur-nidm-activity-7153704333635706880-e6t3/?utm_source=share&utm_medium=member_desktop"
              },
              {
                title: "National MSME Conclave",
                link: "https://x.com/iitjodhpur/status/1704728439436218500"
              },
              {
                title: "Sustainable Agriculture",
                link: "https://cetsd.iitj.ac.in/wp-content/uploads/2024/04/2-Kalash-Yatra-for-Meri-Mati-Mera-Desh.pdf"
              },
              {
                title: "World Health Day 2024",
                link: "https://www.linkedin.com/posts/iitjodhpur_iitjodhpur-publichealth-worldhealthday-activity-7181964692293103616-ehE5/?utm_source=share&utm_medium=member_desktop"
              },
              {
                title: "Conservation of Traditional Water Bodies",
                link: "https://www.linkedin.com/posts/iitjodhpur_iitjodhpur-iitj-worldwaterday-activity-7176912271720288256-Twru/?utm_source=share&utm_medium=member_desktop"
              },
              {
                title: "Development Challenges Ahead",
                link: "https://www.linkedin.com/posts/iitjodhpur_iitjodhpur-iitj-lecture-activity-7153631381967810561-W5aM/?utm_source=share&utm_medium=member_desktop"
              },
              {
                title: "International days",
                link: "https://cetsd.iitj.ac.in/wp-content/uploads/2024/04/seminars-events.pdf"
              },
              {
                title: "Millet Crop Patterns, Productivity, Consumption, and Farmers",
                link: "https://www.linkedin.com/posts/iitjodhpur_iitj-iitjodhpur-millets-activity-7168113741648056320-Jdvq/?utm_source=share&utm_medium=member_desktop"
              },
              {
                title: "MedTech",
                link: "https://www.linkedin.com/posts/iitjodhpur_aatmanirbharbharat-makeinindia-iitj-activity-7166033577623609344-d98D?utm_source=share&utm_medium=member_desktop"
              },
              {
                title: "International symposium on chem-e-sorption",
                link: "https://www.linkedin.com/posts/iitjodhpur_iitjodhpur-indianinstitutefortechnology-chemesorption-activity-7140239397551087616-R3eJ/?utm_source=share&utm_medium=member_desktop"
              }
            ].map((item, index) => (
              <Link target="_blank" key={index} href={item.link} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <p className="text-gray-800 hover:text-blue-600 transition-colors">
                  {item.title}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
          <h2 className="text-3xl font-bold text-blue-700">Social Sustainability</h2>
          <h3 className="text-2xl font-semibold text-gray-800 mt-2">Training/Workshop/Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {[
              {
                title: "Diversity, Equity, Inclusion and Accessibility",
                link: "https://cetsd.iitj.ac.in/wp-content/uploads/2024/04/G20-CSAR_Report.pdf"
              },
              {
                title: "Public reachout",
                link: "https://www.linkedin.com/posts/iitjodhpur_iitjodhpur-pgadmissions-openhouse-activity-7176463621428797440-3swz/?utm_source=share&utm_medium=member_desktop"
              },
              {
                title: "Summit for Health Equity: Spotlight on Digital Health",
                link: "https://x.com/iitjodhpur/status/1718958369556382095"
              },
              {
                title: "Social Networks, Gender Norms, and Labor Supply",
                link: "https://x.com/iitjodhpur/status/1687404637194727424"
              },
              {
                title: "Rural Development-Unnat Bharat Abhiyan",
                link: "https://x.com/iitjodhpur/status/1712066393200271365"
              },
              {
                title: "Some Vexing Dimensions of Science, Society and Sustainability",
                link: "https://www.linkedin.com/posts/iitjodhpur_iitjodhpur-iitj-lecture-activity-7141010744480903168-moo_/?utm_source=share&utm_medium=member_desktop"
              },
              {
                title: "Winter School on AI",
                link: "https://x.com/iitjodhpur/status/1717120113634107551"
              },
              {
                title: "Emerging Challenges in Law and Technology",
                link: "https://www.linkedin.com/posts/iitjodhpur_lawandtechnology-workshop-iitjodhpur-activity-7181145647297839105-6Ppw/?utm_source=share&utm_medium=member_desktop"
              },
              {
                title: "Introduction to Electrical Engineering",
                link: "https://x.com/iitjodhpur/status/1730128906811031664"
              },
              {
                title: "Local empowerment",
                link: "https://x.com/iitjodhpur/status/1692769445876502770"
              }
            ].map((item, index) => (
              <Link target="_blank" key={index} href={item.link} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <p className="text-gray-800 hover:text-blue-600 transition-colors">
                  {item.title}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
          <h2 className="text-3xl font-bold text-blue-700">Geographic Setting</h2>
          <p className="text-gray-700 text-xl mt-2">
            IIT Jodhpur students and administration have unique understanding of their relationship with the
            environment they live in. Here on the eastern edge of the Thar Desert, they know intimately the
            importance of co-existing communities and their adaptations while living with resilience to extreme
            heat, water management, soils and the flora and fauna. While IIT Jodhpur is young, IIT Jodhpur
            looks with bold vision toward the sustainability.
          </p>
        </div>

        <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
          <h2 className="text-3xl font-bold text-blue-700">Evolution of the Sustainability Center</h2>
          <p className="text-gray-700 text-xl mt-2">
            From 2019 IIT Jodhpur declared its commitment to making Western Rajasthan the most sustainable
            desert institution in India by setting up the Center for Emerging Technologies for Sustainable
            Development (CETSD). More can be read from <Link target="_blank" href="https://iitj.ac.in/CETSD/" className="text-blue-600 hover:text-blue-800 hover:underline">here</Link>.
          </p>
          <p className="text-gray-700 text-xl mt-2">
            In the meantime, IIT Jodhpur outlines its climate action plan and strategy <Link target="_blank" href="http://172.16.100.160:8080/uploaded_docs/Sustainability%20Policy%20IITJ_19062023.pdf" className="text-blue-600 hover:text-blue-800 hover:underline">here</Link>.
            It also defines some of the role of CETSD to affirm its resolve to put climate resilient
            technologies in the service of the location.
          </p>
        </div>

        <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl shadow-md">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">Carbon Emissions</h2>
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800">Carbon Emissions Audit 2019-20</h3>
            <Link target="_blank" href="http://172.16.100.160:8080/IDRP_Admin/Carbon%20footprint%202019-20%20IIT%20Jodhpur.pdf"><h4 className="text-xl hover:underline font-semibold text-gray-800 mt-2">Carbon Footprint</h4></Link>
            <p className="text-gray-700 text-lg mt-2">
              CETSD and the Office of Infrastructure at IIT Jodhpur engage all stakeholders and receive their
              feedback while preparing the report. Students, faculty and staff have been quite helpful at every
              step on this data inventory and archiving for carbon emissions.
            </p>
            <div className="mt-4">
              <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2 text-lg">
                <Link target="_blank" href="http://172.16.100.160:8080/IDRP_Admin/CO2%20emmision%20scope%201%20IITJ.pdf"><li className='w-24 text-blue-600 hover:text-blue-800 hover:underline transition-colors'>Scope 1</li></Link>
                <Link target="_blank" href="http://172.16.100.160:8080/IDRP_Admin/CO2%20emmision%20scope%202%20IITJ.pdf"><li className='w-24 text-blue-600 hover:text-blue-800 hover:underline transition-colors'>Scope 2</li></Link>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-300">
            <h3 className="text-2xl font-bold text-gray-800">Carbon Emission Audit 2023-24</h3>
            <div className="mt-4">
              <Link target="_blank" href="https://cetsd.iitj.ac.in/wp-content/uploads/2024/04/Indian-Institute-of-Technology-Jodhpur_-Carbon-emission-calculation-2023_2024.pdf" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                <p className="text-lg mt-2">Report on Managing Carbon Footprint 2023-2024 of IITJ</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sustainability