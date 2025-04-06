import React from "react";

const ubaWorkshop = () => {

  return (
    <>
        <div className="flex flex-col w-3/4 rounded-xl mx-auto bg-white">
            <div className="w-full p-6 bg-[#E3F2FD] mb-8 rounded-2xl space-y-6 shadow-md">
              <h2 className="text-3xl font-bold text-blue-700">UBA Workshop</h2>
              <p className="text-gray-700 text-xl mt-2">
                We extend our heartfelt appreciation to the AIIS delegates for their visit on <strong>8th January 2024</strong> to <strong>CETSD, IIT Jodhpur</strong>. 
                The day was a confluence of ideas, expertise, and collaborative spirit. Here’s a brief recap:
              </p>
            </div>
        </div>
    </>
  )
}

export default ubaWorkshop;

// pages/pdf-viewer.js

// pages/pdf-viewer.js
// import React, { useEffect, useRef, useState } from 'react';
// import { pdfjs } from 'pdfjs-dist';
// import 'pdfjs-dist/web/pdf_viewer.css';

// const ubaWorkshop = () => {
//   const [pageNumber, setPageNumber] = useState(1);
//   const [numPages, setNumPages] = useState(null);
//   const canvasRef = useRef(null);

//   const pdfUrl = '/System.pdf'; // Change this to the actual path of your PDF file

//   useEffect(() => {
//     const loadingTask = pdfjs.getDocument(pdfUrl);
//     loadingTask.promise.then(
//       (pdf) => {
//         setNumPages(pdf.numPages);
//         renderPage(pdf, pageNumber);
//       },
//       (error) => {
//         console.error('Error loading PDF:', error);
//       }
//     );
//   }, [pdfUrl, pageNumber]);

//   const renderPage = (pdf, pageNum) => {
//     pdf.getPage(pageNum).then((page) => {
//       const viewport = page.getViewport({ scale: 1 });
//       const canvas = canvasRef.current;
//       const context = canvas.getContext('2d');

//       canvas.height = viewport.height;
//       canvas.width = viewport.width;

//       page.render({ canvasContext: context, viewport }).promise;
//     });
//   };

//   const nextPage = () => {
//     if (pageNumber < numPages) {
//       setPageNumber(pageNumber + 1);
//     }
//   };

//   const prevPage = () => {
//     if (pageNumber > 1) {
//       setPageNumber(pageNumber - 1);
//     }
//   };

//   return (
//     <div className="container">
//       <h1 className="text-center text-3xl">UBA Workshop PDF Viewer</h1>

//       <div className="controls mt-4 text-center">
//         <button onClick={prevPage}>Previous Page</button>
//         <button onClick={nextPage}>Next Page</button>
//       </div>

//       <div className="pdf-container mt-8 text-center">
//         <canvas ref={canvasRef}></canvas>
//       </div>

//       <div className="text-center mt-4">
//         <span>
//           Page {pageNumber} of {numPages}
//         </span>
//       </div>
//     </div>
//   );
// };

// export default ubaWorkshop;


