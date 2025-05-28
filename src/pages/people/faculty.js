import Link from 'next/link';
import React from 'react';

const Faculty = () => {
  return (
    <div className="flex flex-col w-11/12 sm:w-4/5 md:w-3/4 rounded-xl mx-auto bg-white">
      <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl shadow-md space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-700">Faculty Members</h2>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl">
          The Centre is supported by a vibrant faculty network with domain expertise in water,
          waste, energy, environment, health, geospatial sciences, policy, and planning.
        </p>
      </div>

      <div className="w-full p-6 bg-[#E3F2FD] mb-6 rounded-2xl shadow-md">
        <h3 className="text-xl sm:text-2xl font-bold text-blue-700 mb-4">Head</h3>
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <img src="/faculty/meenu.webp" alt="Meenu Chhabra" className="w-28 h-28 rounded-full object-cover" />
          <div>
            <Link href="https://research.iitj.ac.in/researcher/meenu-chhabra" className="text-lg text-blue-700 hover:underline font-semibold">Meenu Chhabra</Link>
          </div>
        </div>
      </div>

      <div className="w-full p-6 bg-[#E3F2FD] mb-6 rounded-2xl shadow-md space-y-6">
        <h3 className="text-xl sm:text-2xl font-bold text-blue-700">Core Faculty</h3>

        {[
          {
            name: 'Chandana N',
            image: '/faculty/chandana.jpg',
            title: 'Sustainability of Water',
            desc: 'Waste Water Treatment, Solid Waste Management, Environmental Impact Assessment, LCA, Septage Management',
            email: 'chandana@iitj.ac.in',
            phone: '0291-280-1720',
            link: "https://sites.google.com/view/chandanan/swml",
          },
          {
            name: 'Kirti Sankhala',
            image: '/faculty/kirti.jpg',
            title: 'Hollow Fiber Membrane Technology',
            desc: 'Water Treatment, Electron Microscopy',
            email: 'kirtisankhala@iitj.ac.in',
            phone: '0291-280-1718',
            link: "https://sites.google.com/view/kirtisankhala/about-us",
          },
          {
            name: 'Shreya Banerjee',
            image: '/faculty/shreya.jpg',
            title: 'Urban Planning',
            desc: 'Sustainable urban planning, Heat mitigation, Nature Based Solutions, Biometeorology, Urban Upgradation',
            email: 'shreyab@iitj.ac.in',
            phone: '0291-280-1717',
            link: "https://sites.google.com/view/shreban/home",
          },
          {
            name: 'Rajyalakshmi Garaga',
            image: '/faculty/rajyalakshmi.jpg',
            title: 'Public Health',
            desc: 'Air pollution, Health Risk Assessment, Bioaerosols, Rural Drinking Water Treatment',
            email: 'garaga@iitj.ac.in',
            phone: '0291-280-1722',
            link: "https://sites.google.com/iitj.ac.in/rajyalakshmigaraga",
          }
        ].map(({ name, image, title, desc, email, phone, link }) => (
          <div key={name} className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <img src={image} alt={name} className="w-28 h-28 rounded-full object-cover" />
            <div>
              <Link href={`${link}`} className="text-lg text-blue-700 hover:underline font-semibold">{name}</Link>
              <p className="text-gray-800">{title}</p>
              <p className="text-gray-700">{desc}</p>
              <p className="text-gray-700">Email: <a className="text-blue-600 hover:underline" href={`mailto:${email}`}>{email}</a></p>
              <p className="text-gray-700">Phone: {phone}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full p-6 bg-[#E3F2FD] mb-6 rounded-2xl shadow-md">
        <h3 className="text-xl sm:text-2xl font-bold text-blue-700 mb-4">Scientific Officer</h3>
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <img src="/faculty/anugya.jpg" alt="Anugya Shukla" className="w-28 h-28 rounded-full object-cover" />
          <div>
            <Link href="https://sites.google.com/iitj.ac.in/anugya/home?authuser=8" className="text-lg text-blue-700 hover:underline font-semibold">Anugya Shukla</Link>
            <p className="text-gray-800 italic">Geospatial Sciences</p>
            <p className="text-gray-700">GIS, Urban Climate, Sustainable Urbanism, Global/Local Environmental Change</p>
            <p className="text-gray-700">Email: <a className="text-blue-600 hover:underline" href="mailto:anugya@iitj.ac.in">anugya@iitj.ac.in</a></p>
            <p className="text-gray-700">Phone: 0291-280-1724</p>
          </div>
        </div>
      </div>

      <div className="w-full p-6 bg-[#E3F2FD] mb-6 rounded-2xl shadow-md">
        <h3 className="text-xl sm:text-2xl font-bold text-blue-700 mb-4">Affiliated Faculty</h3>

        <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">Energy Vertical</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-800 text-base sm:text-lg">
            {[
                "Sudipto Mukhpadhyay",
                "Abdul Gafoor Shaik",
                "Shobhana Singh",
                "Ramesh Asapu",
                "Meenu Chhabbra",
                "Gafoor Shaik",
                "Pradeep Kumar Dammala",
                "Manish Aggarwal"
            ].map(name => (
                <div key={name} className="bg-white rounded-md shadow p-3">{name}</div>
            ))}
            </div>
        </div>

        <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">Ecology and Environment</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-800 text-base sm:text-lg">
            {[
                "Ayan Sadhukhan",
                "Bhupendra Singh",
                "Debasis Das",
                "Gangawane Krunal Madhukar",
                "Akanksha Choudhary",
                "Ram Prakash",
                "Arpit Khandelwal",
                "Rakesh Kumar Sharma"
            ].map(name => (
                <div key={name} className="bg-white rounded-md shadow p-3">{name}</div>
            ))}
            </div>
        </div>

        <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">Health Vertical</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-800 text-base sm:text-lg">
            {[
                "Alok Ranjan",
                "Sumit Kalra",
                "Mitali Mukerji",
                "Rajyalakshmi Garaga"
            ].map(name => (
                <div key={name} className="bg-white rounded-md shadow p-3">{name}</div>
            ))}
            </div>
        </div>

        <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">Rurban Technology Design and Development</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-800 text-base sm:text-lg">
            {[
                "Vivek Vijay",
                "Sandeep Yadav",
                "Deepak Arora",
                "Prashant Kumar Gupta",
                "Bhanu Prasad",
                "Sumit Kamal",
                "Chandana N",
            ].map(name => (
                <div key={name} className="bg-white rounded-md shadow p-3">{name}</div>
            ))}
            </div>
        </div>

        <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">Water Vertical and cGanga</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-800 text-base sm:text-lg">
            {[
                "Pradip Tewari",
                "Anand Plappally",
                "Vikky Anand",
                "Ambesh Dixit",
                "Shobhana Singh",
                "Kirti Sankhala",
                "Debanjan Guha Roy",
            ].map(name => (
                <div key={name} className="bg-white rounded-md shadow p-3">{name}</div>
            ))}
            </div>
        </div>

        <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">Sustainability and Policy</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-800 text-base sm:text-lg">
            {[
                "Sudipta Das",
                "Farhat Naz",
                "K J George",
                "Krishna Kumar Balaraman",
                "Chandana N"
            ].map(name => (
                <div key={name} className="bg-white rounded-md shadow p-3">{name}</div>
            ))}
            </div>
        </div>

        <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">Ecological Sciences and Data</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-800 text-base sm:text-lg">
            {[
                "Mitali Mukerji",
                "Suchetana Chakraborty",
                "Meenu Chhabra",
                "Neha",
            ].map(name => (
                <div key={name} className="bg-white rounded-md shadow p-3">{name}</div>
            ))}
            </div>
        </div>

        <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">Communication and Data</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-800 text-base sm:text-lg">
            {[
                "Arun Kumar Singh",
                "Debasis Das",
            ].map(name => (
                <div key={name} className="bg-white rounded-md shadow p-3">{name}</div>
            ))}
            </div>
        </div>
        
        <div>
            <h4 className="text-lg font-semibold text-blue-600 mb-2">Geospatial Sciences</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-800 text-base sm:text-lg">
            {[
                "Saran Aadhar",
                "Anand Plappally"
            ].map(name => (
                <div key={name} className="bg-white rounded-md shadow p-3">{name}</div>
            ))}
            </div>
        </div>
        </div>
    </div>
  );
};

export default Faculty;
