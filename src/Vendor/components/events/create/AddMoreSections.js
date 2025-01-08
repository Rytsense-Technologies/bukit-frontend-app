import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const AddMoreSections = () => {
  const [showAgenda, setShowAgenda] = useState(false);
  const [agendaItems, setAgendaItems] = useState([]);
  const [title, setTitle] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [hostOrArtist, setHostOrArtist] = useState("");
  const [description, setDescription] = useState("");

  const handleAddAgenda = () => {
    setShowAgenda(true);
  };

  const handleAddSlot = () => {
    if (title.trim() === "") {
      alert("Title can't be left blank");
      return;
    }
    setAgendaItems([
      ...agendaItems,
      {
        id: Date.now(),
        title,
        startTime,
        endTime,
        hostOrArtist,
        description,
      },
    ]);
    setTitle("");
    setStartTime("");
    setEndTime("");
    setHostOrArtist("");
    setDescription("");
  };

  const handleDeleteAgendaItem = (id) => {
    setAgendaItems(agendaItems.filter((item) => item.id !== id));
  };

  const handleDeleteSection = () => {
    setShowAgenda(false);
    setAgendaItems([]);
  };

  return (
    <div className="flex justify-center items-center">
      {!showAgenda ? (
        // Initial Compact View
        <div className="p-6 bg-[#101012] shadow-lg rounded-lg w-full border border-gray-400 border-gray-300">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold text-white">
                Add more sections to your event page
              </h2>
              <p className="text-gray-400 mt-2">
                Make your event stand out even more. These sections help
                attendees find information and answer their questions—which
                means more ticket sales and less time answering messages.
              </p>
            </div>
            <span className="text-blue-600 bg-blue-100 rounded-full px-2 py-1 text-xs font-semibold">
              Recommended
            </span>
          </div>
          <div className="flex justify-between items-center mt-6">
            <div className="flex items-center">
              <span className="text-lg mr-2">📅</span>
              <div>
                <h3 className="text-lg font-semibold text-gray-100">Agenda</h3>
                <p className="text-blue-200 cursor-pointer">See examples</p>
              </div>
            </div>
            <button
              onClick={handleAddAgenda}
              className="px-4 py-2 border border-gray-200 text-gray-400 rounded-md"
            >
              Add
            </button>
          </div>
        </div>
      ) : (
        // Expanded Detailed Agenda View
        <div className="bg-[#101012] p-8 rounded-lg shadow-lg  w-full border-2 border-indigo-800">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-white">Agenda</h2>
            <button
              onClick={handleDeleteSection}
              className="text-red-500 flex items-center"
            >
              Delete section <IoMdClose size={20} />
            </button>
          </div>
          <p className="text-gray-400 mb-6">
            Add an itinerary, schedule, or lineup to your event. You can include
            a time, description of what will happen, and who will host or
            perform during the event.
          </p>

          {/* Agenda Form */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Title *"
              className="w-full border rounded-lg p-2 mb-2 bg-transparent"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="flex gap-2 mb-2">
              <input
                type="time"
                className="w-full border rounded-lg p-2 bg-transparent"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
              <input
                type="time"
                className="w-full border rounded-lg p-2 bg-transparent"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              />
            </div>
            <input
              type="text"
              placeholder="Host or Artist"
              className="w-full border rounded-lg p-2 mb-2 bg-transparent"
              value={hostOrArtist}
              onChange={(e) => setHostOrArtist(e.target.value)}
            />
            <textarea
              placeholder="Add description"
              className="w-full border rounded-lg p-2 mb-2 bg-transparent"
              rows="2"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <button
            onClick={handleAddSlot}
            className="text-blue-600 mb-6 border border-blue-600 rounded-lg px-4 py-2"
          >
            + Add slot
          </button>

          {/* Displaying Added Agenda Items */}
          <div className="mb-6">
            {agendaItems.map((item) => (
              <div
                key={item.id}
                className="relative mb-4 p-4 border rounded-lg bg-gray-50"
              >
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-gray-500 text-sm">
                  {item.startTime} - {item.endTime}
                </p>
                {item.hostOrArtist && (
                  <p className="text-gray-700">{item.hostOrArtist}</p>
                )}
                {item.description && (
                  <p className="text-gray-700 mt-2">{item.description}</p>
                )}
                <button
                  onClick={() => handleDeleteAgendaItem(item.id)}
                  className="absolute top-2 right-2 text-red-500"
                >
                  <IoMdClose size={20} />
                </button>
              </div>
            ))}
          </div>

          <button className="text-blue-600 underline">
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default AddMoreSections;
