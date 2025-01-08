import React, { useState } from "react";
import { FaTicketAlt } from "react-icons/fa";
import { BiDonateHeart } from "react-icons/bi";
import { BsScissors } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineCalendar } from "react-icons/ai";

const CreateTickets = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showAdvancedSettings, setShowAdvancedSettings] = useState(false);
  const ticketOptions = [
    {
      title: "Paid",
      description: "Create a ticket that people have to pay for.",
      icon: <FaTicketAlt className="text-blue-500 text-3xl" />,
      bg: "bg-blue-50",
    },
    {
      title: "Free",
      description: "Create a ticket that no one has to pay for.",
      icon: <BsScissors className="text-purple-500 text-3xl" />,
      bg: "bg-indigo-50",
    },
    {
      title: "Donation",
      description: "Let people pay any amount for their ticket.",
      icon: <BiDonateHeart className="text-pink-500 text-3xl" />,
      bg: "bg-red-50",
    },
  ];
  const openDrawer = (ticket) => {
    setSelectedTicket(ticket);
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedTicket(null);
  };

  return (
    <>
      <div className="max-w-3xl mx-auto p-6 pl-10">
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-white mb-2">
          Create tickets
        </h1>
        <p className="text-gray-300 font-semibold mb-8 mt-5">
          Choose a ticket type or build a section with multiple ticket types.
        </p>

        {/* Ticket Options */}
        <div className="flex flex-col gap-4">
          {ticketOptions.map((option, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 border border-gray-300 rounded-lg hover:shadow-md cursor-pointer"
              onClick={() => openDrawer(option.title)}
            >
              <div className="flex items-center gap-4">
                <div className={`${option.bg} p-3 py-4`}>{option.icon}</div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-100">
                    {option.title}
                  </h2>
                  <p className="text-gray-300 font-medium">
                    {option.description}
                  </p>
                </div>
              </div>
              <IoIosArrowForward className="text-gray-400 text-xl" />
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8">
          <p className="text-gray-300 mb-4 font-semibold">
            Create a section if you want to sell multiple ticket types that
            share the same inventory. i.e. Floor, Mezzanine.
          </p>
          <button className="px-6 py-2 border-2 border-gray-400 rounded-lg font-semibold text-gray-300 hover:bg-gray-100">
            Create a section
          </button>
        </div>
      </div>
      {isDrawerOpen && (
        <div className="fixed top-0 right-0 w-full sm:w-96 h-full bg-gray-900 shadow-lg border-l border-gray-200 p-6 overflow-y-auto">
        

          {/* Drawer Tabs */}
          <div className="flex flex-col items-start gap-2 border-b pb-2 mb-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Add Ticket
            </h2>
        
            <div className="">
            {ticketOptions.map((option) => (
              <button
                key={option.title}
                className={`flex-1 px-5 text-center py-2 rounded-lg ${
                  selectedTicket === option.title
                    ? "bg-gray-50 text-blue-500 border-blue-500 border"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                onClick={() => setSelectedTicket(option.title)}
              >
                {option.title}
              </button>
            ))}
            </div>
        
          </div>

          {/* Drawer Form */}
         
          <form className="flex flex-col gap-4">
            <div>
              <label className="block text-sm text-gray-100 font-semibold mb-1">Name *</label>
              <input
                type="text"
                placeholder="General Admission"
                className="w-full p-2 border border-gray-300 bg-transparent rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-100 text-sm font-semibold mb-1">
                Available quantity *
              </label>
              <input
                type="number"
                placeholder="50"
                className="w-full p-2 border bg-transparent border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-100 font-semibold mb-1">
                Price *
              </label>
              <div className="flex items-center">
                <span className="text-gray-300 mr-2">$</span>
                <input
                  type="number"
                  placeholder="0.00"
                  className="w-full p-2 border border-gray-300 bg-transparent rounded-lg"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-100 font-semibold mb-1">
                  Sales start *
                </label>
                <div className="flex items-center">
                  <AiOutlineCalendar className="text-gray-500 mr-2" />
                  <input
                    type="date"
                    className="w-full p-2 border text-gray-400 border-gray-300 bg-transparent rounded-lg"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-100 font-semibold mb-1">
                  Start time
                </label>
                <input
                  type="time"
                  className="w-full p-2 text-gray-400 border border-gray-300 bg-transparent rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-100 font-semibold mb-1">
                  Sales end *
                </label>
                <div className="flex items-center">
                  <AiOutlineCalendar className="text-gray-500 mr-2" />
                  <input
                    type="date"
                    className="w-full p-2 text-gray-400 border border-gray-300 bg-transparent rounded-lg"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-100 font-semibold mb-1">
                  End time
                </label>
                <input
                  type="time"
                  className="w-full p-2 text-gray-400 border border-gray-300 bg-transparent rounded-lg"
                />
              </div>
            </div>
            <p className="text-sm text-gray-200 mt-4">
              Event time zone is ACST
            </p>
            <div>
            <button
              onClick={() => setShowAdvancedSettings(!showAdvancedSettings)}
              className="text-blue-500 font-semibold text-sm flex items-center gap-2"
            >
              Advanced settings
              <span>
                {showAdvancedSettings ? "▲" : "▼"}
              </span>
            </button>
          </div>

          {showAdvancedSettings && (
            <div className="mt-4 border-t pt-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="form-checkbox text-blue-500"
              />
              Show ticket sale end dates and sale status at checkout
            </label>
            <div className="mt-4">
              <label className="block text-sm font-semibold mb-1">
                Description
              </label>
              <textarea
                placeholder="Tell attendees more about this ticket."
                className="w-full p-2 border border-gray-300 rounded-lg"
                maxLength="2500"
              ></textarea>
              <p className="text-sm text-gray-500 text-right">0/2500</p>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-semibold mb-1">
                Visibility
              </label>
              <select className="w-full p-2 border border-gray-300 rounded-lg">
                <option>Visible</option>
                <option>Hidden</option>
              </select>
            </div>
            <div className="mt-4 flex gap-4">
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Minimum quantity *
                </label>
                <input
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  defaultValue="1"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Maximum quantity *
                </label>
                <input
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  defaultValue="10"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-semibold mb-1">
                Sales channel
              </label>
              <select className="w-full p-2 border border-gray-300 rounded-lg">
                <option>Everywhere</option>
                <option>Online only</option>
                <option>Offline only</option>
              </select>
            </div>
            <div className="mt-4">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-500"
                />
                eTicket
              </label>
              <label className="flex items-center gap-2 mt-2">
                <input
                  type="checkbox"
                  className="form-checkbox text-gray-500"
                />
                Pick up at event
              </label>
            </div>
          </div>
          ) }
      
      
            <div className="flex justify-between mt-6">
              <button
                type="button"
                className="px-6 py-2 border border-gray-300 rounded-lg text-gray-200 font-medium"
                onClick={closeDrawer}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-orange-500 text-white font-medium rounded-lg"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default CreateTickets;
