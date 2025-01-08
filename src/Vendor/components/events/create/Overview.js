import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const Overview = () => {
  const [expanded, setExpanded] = useState(false);
  const [content, setContent] = useState([]); // Stores each input field as a unique entry

  const toggleView = () => setExpanded(!expanded);

  const addContentField = (type) => {
    setContent([...content, { id: Date.now(), type, value: "" }]); // Add a new field with a unique ID
  };

  const handleContentChange = (id, value) => {
    setContent(content.map((item) => (item.id === id ? { ...item, value } : item)));
  };

  const handleDeleteContent = (id) => {
    setContent(content.filter((item) => item.id !== id));
  };

  const renderContentField = (item) => {
    switch (item.type) {
      case "text":
        return (
          <div key={item.id} className="relative mb-4">
            <textarea
              placeholder="Enter text"
              className="w-full border rounded-lg p-2"
              rows="2"
              value={item.value}
              onChange={(e) => handleContentChange(item.id, e.target.value)}
            />
            <button
              onClick={() => handleDeleteContent(item.id)}
              className="absolute top-2 right-2 text-red-500"
            >
              <IoMdClose size={20} />
            </button>
          </div>
        );
      case "image":
        return (
          <div key={item.id} className="relative mb-4">
            <input
              type="file"
              accept="image/*"
              className="w-full border rounded-lg p-2"
              onChange={(e) => handleContentChange(item.id, e.target.files[0])}
            />
            <button
              onClick={() => handleDeleteContent(item.id)}
              className="absolute top-2 right-2 text-red-500"
            >
              <IoMdClose size={20} />
            </button>
          </div>
        );
      case "video":
        return (
          <div key={item.id} className="relative mb-4">
            <input
              type="url"
              placeholder="Enter video link"
              className="w-full border rounded-lg p-2"
              value={item.value}
              onChange={(e) => handleContentChange(item.id, e.target.value)}
            />
            <button
              onClick={() => handleDeleteContent(item.id)}
              className="absolute top-2 right-2 text-red-500"
            >
              <IoMdClose size={20} />
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center items-center">
      {!expanded ? (
        // Initial Compact View
        <div className="flex justify-between items-center p-6 bg-[#101012] border border-gray-400 shadow-lg rounded-lg w-full">
          <div>
            <h2 className="text-xl font-bold text-white">Overview</h2>
            <p className="text-gray-400">
              Use this section to provide more details about your event. You can include things to know, venue information, accessibility options—anything that will help people know what to expect.
            </p>
          </div>
          <button onClick={toggleView} className="bg-gray-100 rounded-full p-2 shadow-sm">
            <IoIosAdd className="text-blue-600" size={24} />
          </button>
        </div>
      ) : (
        // Expanded Detailed View
        <div className="bg-[#101012] p-8 rounded-lg shadow-lg w-full border-2 border-indigo-800">
          <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
          <p className="text-gray-400 mb-6">
            Add more details about your event and include what people can expect if they attend.
          </p>

          {/* Displaying Dynamic Content Fields */}
          <div className="mb-4">
            {content.map((item) => renderContentField(item))}
          </div>

          {/* Add Content Section */}
          <div className="flex gap-4">
            <button onClick={() => addContentField("text")} className="px-4 py-2 bg-gray-200 rounded-md">
              Add text
            </button>
            <button onClick={() => addContentField("image")} className="px-4 py-2 bg-gray-200 rounded-md">
              Add image
            </button>
            <button onClick={() => addContentField("video")} className="px-4 py-2 bg-gray-200 rounded-md">
              Add video
            </button>
          </div>

          <button onClick={toggleView} className="mt-6 text-blue-600 underline">
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Overview;
