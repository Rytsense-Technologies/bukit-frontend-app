import React from "react";
import { FaCopy, FaShareAlt } from "react-icons/fa";

const EventDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <h1 className="text-4xl font-bold text-gray-900">Event dashboard</h1>
        <p className="text-gray-600 mt-2">📅 Dec 28, 2024 at 10:00am</p>

        {/* Event Link Section */}
        <div className="mt-6 bg-white p-4 rounded-md shadow-md">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <label className="block text-sm text-gray-600 mb-2">Event link</label>
              <input
                type="text"
                readOnly
                value="https://www.eventbrite.sg/e/tk-tickets-1086574285993"
                className="w-full p-2 border border-gray-300 rounded-md text-gray-600"
              />
            </div>
            <div className="flex space-x-4 ml-4">
              <button className="bg-gray-100 px-4 py-2 rounded-md text-gray-600 flex items-center">
                <FaCopy className="mr-2" /> Copy link
              </button>
              <button className="bg-gray-100 px-4 py-2 rounded-md text-gray-600 flex items-center">
                <FaShareAlt className="mr-2" /> Share
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-lg font-bold text-gray-800">Tickets Sold</h2>
            <p className="text-4xl font-bold mt-4">0/0</p>
            <p className="text-gray-500">0 paid · 0 free</p>
          </div>
          <div className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-lg font-bold text-gray-800">Page Views</h2>
            <p className="text-4xl font-bold mt-4">0</p>
            <p className="text-gray-500">0 from Eventbrite</p>
            <a
              href="#"
              className="text-indigo-600 text-sm mt-2 inline-block hover:underline"
            >
              Open page views report
            </a>
          </div>
        </div>

        {/* Recommended Actions */}
        <div className="mt-8 bg-white p-6 rounded-md shadow-md">
          <h2 className="text-lg font-bold text-gray-800">Recommended actions</h2>
          <ul className="mt-4 space-y-2">
            <li className="text-sm text-gray-600">
              Get 1.4x more impressions with Eventbrite Ads.{" "}
              <a href="#" className="text-indigo-600 hover:underline">
                Learn more
              </a>
            </li>
            <li className="text-sm text-gray-600">
              Increase your sales by 63% with a marketing campaign.{" "}
              <a href="#" className="text-indigo-600 hover:underline">
                Launch a new campaign
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 flex space-x-4">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-md shadow-md">
            Attendees report
          </button>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-md shadow-md">
            Order form responses
          </button>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-md shadow-md">
            Sales report
          </button>
        </div>

        {/* Sales by Ticket Type */}
        <div className="mt-8 bg-white p-6 rounded-md shadow-md">
          <h2 className="text-lg font-bold text-gray-800">Sales by Ticket Type</h2>
          <table className="mt-4 w-full border-collapse border border-gray-200 text-left">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">Ticket Type</th>
                <th className="border border-gray-300 px-4 py-2">Sold</th>
                <th className="border border-gray-300 px-4 py-2">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-center" colSpan="3">
                  No tickets for this event yet
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Recent Orders */}
        <div className="mt-8 bg-white p-6 rounded-md shadow-md">
          <h2 className="text-lg font-bold text-gray-800">Recent Orders</h2>
          <table className="mt-4 w-full border-collapse border border-gray-200 text-left">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">Order #</th>
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Quantity</th>
                <th className="border border-gray-300 px-4 py-2">Ticket Type</th>
                <th className="border border-gray-300 px-4 py-2">Price</th>
                <th className="border border-gray-300 px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-center" colSpan="6">
                  No orders for this event yet
                </td>
              </tr>
            </tbody>
          </table>
          <a
            href="#"
            className="text-indigo-600 text-sm mt-2 inline-block hover:underline"
          >
            Go to all Orders
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventDashboard;
