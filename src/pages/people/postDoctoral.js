import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const postdocs = [
  {
    name: 'Dr. Saurabh Mathur',
    description: 'Ph.D. on Geoheritage of Western Rajasthan',
    image: '/postDoctoral/saurabh.jpg',
    link: 'https://www.researchgate.net/profile/Saurabh-Mathur-2',
  },
  {
    name: 'Neha Pandey',
    description: 'Ph.D. on electrocoagulation treatment of pulp and paper mill wastewater using statistical methods',
    image: '/postDoctoral/neha.jpg',
    link: 'https://www.researchgate.net/profile/Neha-Pandey-22',
  },
];

const PostDoctoral = () => {
  return (
    <div className="flex flex-col w-11/12 sm:w-4/5 md:w-3/4 mx-auto bg-white rounded-xl">
      <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl shadow-md space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-700">Postdoctoral Scholars</h2>
        <div className="space-y-6">
          {postdocs.map((person) => (
            <div key={person.name} className="flex flex-col sm:flex-row items-center bg-white shadow rounded-xl p-4 gap-4">
              <Image
                src={person.image}
                alt={person.name}
                width={100}
                height={100}
                className="rounded-full object-cover"
              />
              <div className="text-center sm:text-left">
                <Link href={`${person.link}`} className="text-lg sm:text-xl font-semibold text-blue-700 hover:underline">{person.name}</Link>
                <p className="text-gray-700 text-sm sm:text-base mt-1">{person.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostDoctoral;
