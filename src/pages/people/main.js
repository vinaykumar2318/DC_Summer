import React from 'react';
import Link from 'next/link';

const Main = () => {
  return (
    <>
      <div className="flex flex-col w-11/12 sm:w-4/5 md:w-3/4 rounded-xl mx-auto bg-white">
        <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-700">People</h2>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl mt-2">
            The Indian Institute of Technology Jodhpur is deeply committed to sustainable development through its “Centre of Emerging Technologies for Sustainable Development”, with a dedicated core team of faculty, postdocs, students, research fellows, and staff collaborating harmoniously to drive our shared vision of sustainability.
          </p>
        </div>

        <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl shadow-md space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-blue-700">CETSD Team</h3>
          <ul className="list-disc list-inside text-gray-800 space-y-2 text-base sm:text-lg md:text-xl">
            <li>
              <Link href="/people/faculty" className="text-blue-700 hover:underline">Faculty Members</Link>
            </li>
            <li>
              <Link href="/people/postDoctoral" className="text-blue-700 hover:underline">Postdoctoral Scholars</Link>
            </li>
            <li>
              <Link href="/people/phd" className="text-blue-700 hover:underline">PhD Students</Link>
            </li>
            <li>
              <Link href="/people/ms" className="text-blue-700 hover:underline">M.S. (by Research) Students</Link>
            </li>
            <li>
              <Link href="/people/office" className="text-blue-700 hover:underline">Office Staff</Link>
            </li>
            <li>
              <Link href="/people/researchFellow" className="text-blue-700 hover:underline">Research Fellows</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Main;
