import React from 'react'
const Office = () => {
  return (
    <>
        <div className="flex flex-col w-full sm:w-4/5 md:w-3/4 mx-auto rounded-xl bg-white p-6 space-y-10">
            <h2 className="text-2xl sm:text-3xl text-center font-bold text-blue-700">Office Staff</h2>
            <div className="flex flex-row items-center justify-center w-full gap-8">
                <div className="bg-[#E3F2FD] p-4 rounded-xl shadow-md text-center w-96">
                    <img
                    src="/office.png"
                    alt="officeImage"
                    className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-white shadow"
                    />
                    <h3 className="text-xl font-semibold text-gray-800">Arun Choudhary</h3>
                    <p className="text-gray-600 mt-1">Junior Assistant</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Office;
