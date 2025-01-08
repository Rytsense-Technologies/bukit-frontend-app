import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";

const EventOverview = () => {
  // State to control the view
  const [expanded, setExpanded] = useState(false);

  // Function to toggle view
  const toggleView = () => setExpanded(!expanded);

  return (
    <div className="flex justify-center items-center">
      {!expanded ? (
        // Initial Compact View
        <div className="flex justify-between items-center p-6 bg-[#101012] border border-gray-400 shadow-lg rounded-lg w-full">
          <div>
            <h2 className="text-2xl font-bold text-white">Event Title</h2>
            <p className="text-gray-400">A short and sweet sentence about your event.</p>
          </div>
          <button onClick={toggleView} className="bg-gray-100 rounded-full p-2 shadow-sm">
            <IoIosAdd className="text-blue-600" size={24} />
          </button>
        </div>
      ) : (
        // Expanded Detailed View
        <div className="bg-[#101012] p-8 rounded-lg shadow-lg  w-full border-2 border-indigo-800">
          <h2 className="text-2xl font-bold text-white mb-4">Event Overview</h2>
          <div className="mb-6">
            <label className="block text-gray-300 font-semibold mb-1">Event title</label>
            <p className="text-gray-400 text-sm mb-2">
              Be clear and descriptive with a title that tells people what your event is about.
            </p>
            <input
              type="text"
              placeholder="Event title*"
              className="w-full border border-gray-300 rounded-lg p-2 bg-transparent"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-300 font-semibold mb-1">Summary</label>
            <p className="text-gray-400 text-sm mb-2">
              Grab people's attention with a short description about your event. Attendees will see this at the top of your event page. (140 characters max)
              <a href="#" className="text-blue-600 ml-1">See examples</a>
            </p>
            <textarea
              placeholder="Summary*"
              className="w-full border border-gray-300 rounded-lg p-2 bg-transparent"
              maxLength="140"
              rows="3"
            ></textarea>
            <div className="text-gray-400 text-sm text-right">0 / 140</div>
          </div>
          <button
            onClick={toggleView}
            className="flex items-center text-blue-600 font-semibold"
          >
            <span className="mr-1">&#9889;</span> Suggest summary
          </button>
        </div>
      )}
    </div>
  );
};

export default EventOverview;
