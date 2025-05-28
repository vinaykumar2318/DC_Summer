import React from 'react';
import Image from 'next/image';

const researchFellows = [
  {
    name: 'Sanjeev',
    role: 'Junior Research Fellow',
    description: `Sanjeev joined our group at CETSD, IIT Jodhpur on 1st September 2023, as a Junior Research Fellow, in an industry-sponsored project. 
    Sanjeev received his M.Sc. in Physics from National Institute of Technology (NIT) Srinagar, India in 2023. 
    He did his M.Sc. project under the supervision of Prof. Mohd. Ikram at NIT Srinagar and completed his M.Sc. Summer Research Fellowship (SRF) Programme under the supervision of Dr. Ashish Kumar at UPES, Dehradun, sponsored by Indian Academy of Sciences (IASc), Bangalore. 
    Sanjeev holds a B.Sc. in Physical Science from Dyal Singh College, University of Delhi. 
    He has valuable experience in synthesis and characterization techniques, including XRD, FESEM/EDX, XPS, Raman Spectroscopy, FTIR Spectroscopy, QUID VSM, and UV-Visible spectroscopy.`,
    image: '/research/sanjeev.jpg',
  },
];

const ResearchFellows = () => {
  return (
    <div className="flex flex-col w-11/12 sm:w-4/5 md:w-3/4 mx-auto bg-white rounded-xl">
      <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl shadow-md space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-700">Research Fellows</h2>
        <div className="space-y-6">
          {researchFellows.map((fellow) => (
            <div key={fellow.name} className="flex flex-col sm:flex-row items-center bg-white shadow rounded-xl p-4 gap-4">
              <Image
                src={fellow.image}
                alt={fellow.name}
                width={150}
                height={150}
                className="rounded-lg object-cover"
              />
              <div className="text-center sm:text-left">
                <h4 className="text-lg sm:text-xl font-semibold text-gray-800">{fellow.name}</h4>
                <p className="text-sm sm:text-base font-medium text-gray-700 mb-2">{fellow.role}</p>
                <p className="text-gray-700 text-sm sm:text-base whitespace-pre-line">{fellow.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResearchFellows;
