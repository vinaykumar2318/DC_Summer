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
            <h2 className="text-4xl font-bold mb-5 text-blue-800 text-center">PhD Students</h2>
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
