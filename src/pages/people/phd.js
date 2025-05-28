// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// const phdStudents = [
//   {
//     name: 'Sushma Kumari',
//     description: 'PhD Scholar (UGC-JRF fellow)',
//     image: '/phdPeople/first.jpg',
//   },
//   {
//     name: 'Dheerendra Kumar Yadav',
//     description: 'PhD Scholar (Part-Time)',
//     image: '/phdPeople/second.jpg', 
//   },
//   {
//     name: 'Nandagopal Govindan',
//     description: 'PhD Scholar (Part-Time)',
//     image: '/phdPeople/third.jpg', 
//   },
//   {
//     name: 'Shakti Ranjan Patra',
//     description: 'PhD Scholar (Part-Time)',
//     image: '/phdPeople/fourth.jpg', 
//   },
//   {
//     name: 'Sahdev Choudhary',
//     description: 'PhD Scholar',
//     image: '/phdPeople/fifth.jpg', 
//   },
//   {
//     name: 'Sriram Chauhan',
//     description: 'PhD Scholar',
//     image: '/phdPeople/sixth.jpg', 
//   },
// ];

// const PhDStudents = () => {
//   return (
//     <div className="flex flex-col w-11/12 sm:w-4/5 md:w-3/4 mx-auto bg-white rounded-xl">
//       <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl shadow-md space-y-6">
//         <h2 className="text-2xl sm:text-3xl font-bold text-blue-700">PhD Students</h2>
//         <div className="space-y-6">
//           {phdStudents.map((student) => (
//             <div key={student.name} className="flex flex-col sm:flex-row items-center bg-white shadow rounded-xl p-4 gap-4">
//               <Image
//                 src={student.image}
//                 alt={student.name}
//                 width={100}
//                 height={50}
//                 className="rounded-lg object-cover"
//               />
//               <div className="text-center sm:text-left">
//                 <Link href={``} className="text-lg sm:text-xl font-semibold hover:underline text-blue-700">{student.name}</Link>
//                 <p className="text-gray-700 text-sm sm:text-base mt-1">{student.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PhDStudents;
import React from 'react'

const phdStudents = [
    {
      name: 'Sushma Kumari',
      designation: 'PhD Scholar (UGC-JRF Fellow)',
      image: '/phdPeople/first.jpg',
    },
    {
      name: 'Dheerendra Kumar Yadav',
      designation: 'PhD Scholar (Part-Time)',
      image: '/phdPeople/second.jpg',
    },
    {
      name: 'Nandagopal Govindan',
      designation: 'PhD Scholar (Part-Time)',
      image: '/phdPeople/third.jpg',
    },
    {
      name: 'Shakti Ranjan Patra',
      designation: 'PhD Scholar (Part-Time)',
      image: '/phdPeople/fourth.jpg',
    },
    {
      name: 'Sahdev Choudhary',
      designation: 'PhD Scholar',
      image: '/phdPeople/fifth.jpg',
    },
    {
      name: 'Sriram Chauhan',
      designation: 'PhD Scholar',
      image: '/phdPeople/sixth.jpg',
    },
]


const PhdStudents = () => {
  return (
    <>
        <div className="flex flex-col w-full sm:w-4/5 md:w-3/4 rounded-xl mx-auto bg-white">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 text-center">PhD Students</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {phdStudents.map((student, index) => (
                <div key={index} className="bg-[#E3F2FD] p-4 rounded-xl shadow-md text-center">
                    <img
                    src={student.image}
                    alt={student.name}
                    className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-white shadow"
                    />
                    <h3 className="text-xl font-semibold text-gray-800">{student.name}</h3>
                    <p className="text-gray-600 mt-1">{student.designation}</p>
                </div>
                ))}
            </div>    
        </div>
    </>
  )
}

export default PhdStudents
