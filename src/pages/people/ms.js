import React from 'react'

const msStudents = [
    {
      name: 'Shalu Bagela',
      designation: 'MS Student',
      description: 'B.Tech (Civil Engineering) from Kota Government College, RTU, Kota. Current research area focuses on “Advance Materials for Sustainable Infrastructure”.',
      image: '/msPeople/first.jpg',
    },
    {
      name: 'Shivam Parashar',
      designation: 'MS Student',
      description: 'B.Tech degree in Electronics Engineering (2019) from the esteemed North Eastern Regional Institute of Science and Technology.',
      image: '/msPeople/second.png',
    },
    {
      name: 'Shivangi Bansal',
      designation: 'MS Student',
      description: 'Bachelor’s degree (B.Des) in Textile Design (2020) from National Institute of Fashion Design, NIFT Gandhinagar. Her area of interest centres around “Natural fibres of India and promoting conscious and sustainable living practices.”',
      image: '/msPeople/third.jpg',
    },
]

const MsStudents = () => {
  return (
    <>
        <div className="flex flex-col w-full sm:w-4/5 md:w-3/4 mx-auto rounded-xl bg-white p-6 space-y-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 text-center">MS (by Research) Students</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {msStudents.map((student, index) => (
                <div key={index} className="bg-[#E3F2FD] p-4 rounded-xl shadow-md text-center">
                    <img
                    src={student.image}
                    alt={student.name}
                    className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-white shadow"
                    />
                    <h3 className="text-xl font-semibold text-gray-800">{student.name}</h3>
                    <p className="text-gray-600 mt-1">{student.designation}</p>
                    <p className="text-gray-700 text-sm mt-2">{student.description}</p>
                </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default MsStudents;
