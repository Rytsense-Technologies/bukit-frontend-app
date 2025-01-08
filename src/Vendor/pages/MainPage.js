import React from "react";
import { FaPencilAlt } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";

const MainPage = () => {
  return (
    <div className="min-h-screen  p-8">
      <div className="px-20 mx-auto space-y-8">
        {/* Greeting Section */}
        <h1 className="text-4xl font-bold text-white">Hey there, Pragati Prabhu</h1>

        {/* Quick Start Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#101012] p-6 rounded-md shadow-md flex flex-col items-center text-center">
            <div className="bg-indigo-600 text-white rounded-full p-2 mb-4">
              <FaPencilAlt />
            </div>
            <h2 className="text-lg font-bold text-gray-100">Start from scratch</h2>
            <p className="text-gray-300 mt-2">
              Add all your event details, create new tickets, and set up recurring events.
            </p>
            <button className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-indigo-700">
              Create event
            </button>
          </div>
          <div className="bg-[#101012] p-6 rounded-md shadow-md flex flex-col items-center text-center">
            <div className="bg-indigo-600 text-white rounded-full p-2 mb-4">
              <FaPencilAlt />
            </div>
            <h2 className="text-lg font-bold text-gray-100">
              Create my event faster with AI
            </h2>
            <p className="text-gray-300 mt-2">
              Answer a few quick questions to generate an event that's ready to publish almost
              instantly.
            </p>
            <button className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-indigo-700">
              Create with AI
            </button>
          </div>
        </div>

        {/* Promo Section */}
        <div className="bg-[#101012] p-6 rounded-md shadow-md">
          <h2 className="text-xl font-bold text-gray-50">
            Sell more tickets with Public Promo Codes
          </h2>
          <p className="text-gray-200 mt-2">
            Now promo codes appear on your event page, so more attendees can discover your
            deals.{" "}
            <span className="font-bold">
              Events that include public promo codes sell 15% more tickets.
            </span>
          </p>
          <button className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-indigo-700">
            Try it now!
          </button>
        </div>

        {/* Checklist Section */}
        <div className="bg-[#101012] p-6 rounded-md shadow-md">
          <h2 className="text-lg font-bold text-gray-50">Your checklist</h2>
          <p className="text-gray-200 mt-2">
            We make it easy to plan successful events. Here's how to start!
          </p>
          <ul className="mt-4 space-y-2 text-gray-300">
            <li className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Create event
            </li>
            <li className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Set up your organizer profile
            </li>
            <li className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Add your bank account
            </li>
          </ul>
          <button className="mt-4 bg-gray-100 px-6 py-2 rounded-md text-indigo-600 border border-gray-300 hover:bg-gray-200">
            Draft
          </button>
        </div>

        {/* Resources Section */}
        <div>
          <h2 className="text-lg font-bold text-gray-50">Top resources for you</h2>
          <p className="text-gray-300">Visit Eventbrite Blog</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            <div className="bg-[#101012] p-4 rounded-md shadow-md">
              <h3 className="text-md font-bold text-gray-50">Digital Marketing Guide for Events</h3>
              <p className="text-gray-200 mt-2">Eventbrite Marketing Experts</p>
              <a
                href="#"
                className="text-indigo-400 mt-2 flex items-center hover:underline"
              >
                Read article <AiOutlineArrowRight className="ml-2" />
              </a>
            </div>
            <div className="bg-[#101012] p-4 rounded-md shadow-md">
              <h3 className="text-md font-bold text-gray-50">Safety Playbook for Events</h3>
              <p className="text-gray-200 mt-2">Eventbrite Marketing Experts</p>
              <a
                href="#"
                className="text-indigo-400 mt-2 flex items-center hover:underline"
              >
                Read article <AiOutlineArrowRight className="ml-2" />
              </a>
            </div>
            <div className="bg-[#101012] p-4 rounded-md shadow-md">
              <h3 className="text-md font-bold text-gray-50">
                10 Best Ways to Market and Sell Out Your Event
              </h3>
              <p className="text-gray-200 mt-2">Eventbrite Marketing Experts</p>
              <a
                href="#"
                className="text-indigo-400 mt-2 flex items-center hover:underline"
              >
                Read article <AiOutlineArrowRight className="ml-2" />
              </a>
            </div>
          </div>
        </div>

        {/* Organizer Profile Section */}
        <div className="bg-[#101012] p-6 rounded-md shadow-md">
          <h2 className="text-lg font-bold text-gray-50">
            Set up your organizer profile
          </h2>
          <p className="text-gray-300 mt-2">
            A complete profile can increase discovery of your event on search engines,
            highlight your brand, and build trust with attendees.
          </p>
          <a
            href="#"
            className="mt-4 text-indigo-500 hover:underline inline-block"
          >
            Set up your profile →
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
