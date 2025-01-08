import React, { useState } from 'react';

const UploadComponent = () => {
  // State to control the view
  const [detailedView, setDetailedView] = useState(false);

  // Function to toggle view
  const toggleView = () => setDetailedView(!detailedView);

  return (
    <div className="flex justify-center items-center">
      {!detailedView ? (
        // Initial View
        <div className="relative w-full h-80 bg-[#101012] bg-cover bg-center rounded-lg overflow-hidden border border-gray-200 shadow-xl flex justify-center items-center"
             style={{ backgroundImage: 'url("/path/to/your/image.jpg")' }}>
          <div className=" bg-opacity-80 p-6 rounded-lg text-center">
            <div className="text-2xl font-semibold text-white mb-2">Upload photos and video</div>
            <button
              onClick={toggleView}
              className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        // Detailed Upload View
        <div className="bg-[#101012] p-8 rounded-lg shadow-lg border-2 border-indigo-800 w-full">
          <h2 className="text-xl text-gray-50 font-semibold mb-4">Add images and video</h2>
          <div className="border rounded-lg p-4 mb-10 text-center">
            <p className="text-gray-100 mb-2">Drag and drop an image or</p>
            <button className="border border-gray-100 text-white px-4 py-2 rounded-md">Upload Image</button>
            <p className="text-sm text-gray-200 mt-2">Recommended image size: 2160 x 1080px | Max size: 10MB | Supported: JPEG, PNG</p>
          </div>
          <div className="border rounded-lg p-4 text-center">
            <p className="text-gray-100 mb-2">Add a video to show your event's vibe</p>
            <button className="border border-gray-100 text-white px-4 py-2 rounded-md">Upload Video</button>
            <p className="text-sm text-gray-200 mt-2">Min resolution: 480p | Length: up to 1 min | Formats: MP4, MOV</p>
          </div>
          <button
            onClick={toggleView}
            className="mt-6 text-blue-600 underline"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default UploadComponent;
