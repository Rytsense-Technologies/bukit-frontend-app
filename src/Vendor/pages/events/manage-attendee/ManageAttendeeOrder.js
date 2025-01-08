import React, { useState } from "react";
import EventSidebar from "../../../components/events/EventSidebar";

const ManageAttendeeOrder = () => {
  const [orderType, setOrderType] = useState("All Completed Orders");
  const [dateRange, setDateRange] = useState("Since sales started");
  const [sortOrder, setSortOrder] = useState("Date Descending");
  const [perPage, setPerPage] = useState(20);
  const [exportType, setExportType] = useState("File Type");
  const [selectedStep, setSelectedStep] = useState(1);
  return (

    <>
     <div className="flex min-h-screen bg-[#101012]">
      <EventSidebar
   
        selectedStep={selectedStep}
        setSelectedStep={setSelectedStep}
      />
      <div className="flex-1 ml-72 p-8 overflow-y-auto">
        {/* Header Section */}
        <div className="p-8">
      <h1 className="text-4xl font-bold text-white">Order Management</h1>
      <p className="text-sm text-gray-300 mt-2">
        See all the orders for your event, including revenue and fees. To
        download a list of orders, view the <a href="#" className="text-blue-600 hover:underline">Orders report</a>.
      </p>

      {/* Filters Section */}
      <div className="mt-6 bg-[#101012] p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm text-gray-100">Order Type</label>
            <select
              value={orderType}
              onChange={(e) => setOrderType(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option>All Completed Orders</option>
              <option>Pending Orders</option>
              <option>Cancelled Orders</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-100">Date</label>
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option>Since sales started</option>
              <option>Last 7 days</option>
              <option>Last 30 days</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-100">Sort</label>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option>Date Descending</option>
              <option>Date Ascending</option>
              <option>Amount Descending</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-100">Per Page</label>
            <select
              value={perPage}
              onChange={(e) => setPerPage(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option>10</option>
              <option>20</option>
              <option>50</option>
            </select>
          </div>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <div>
            <label className="block text-sm text-gray-100">Export</label>
            <select
              value={exportType}
              onChange={(e) => setExportType(e.target.value)}
              className="p-2 border border-gray-300 rounded-md"
            >
              <option>File Type</option>
              <option>CSV</option>
              <option>Excel</option>
            </select>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700">
            Print Preview
          </button>
        </div>
      </div>

      {/* Orders Section */}
      <div className="mt-6 bg-[#101012] p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-bold text-gray-100">Orders: Since sales started</h2>
        <p className="text-sm text-gray-200 mt-2">Orders: 0 · Attendees: 0</p>
        <div className="mt-4 text-center">
          <p className="text-gray-100">No orders.</p>
        </div>
        <button
          disabled
          className="mt-4 px-4 py-2 bg-gray-300 text-gray-500 rounded-md cursor-not-allowed"
        >
          Issue Multiple Refunds
        </button>
        <a href="#" className="mt-4 block text-blue-600 text-sm hover:underline">
          Learn more about orders
        </a>
      </div>

      {/* Recommended Apps Section */}
      <div className="mt-6 bg-[#101012] p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-bold text-gray-100">Recommended apps</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="font-bold text-gray-800">Gift Up!</h3>
            <p className="text-sm text-gray-600">
              The simplest way to sell gift cards online.
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="font-bold text-gray-800">HubSpot (PROD NA1)</h3>
            <p className="text-sm text-gray-600">
              Sync and track leads from your events.
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="font-bold text-gray-800">Tixel</h3>
            <p className="text-sm text-gray-600">
              Easy, secure ticket resale for your attendees.
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="font-bold text-gray-800">Membership Management</h3>
            <p className="text-sm text-gray-600">
              Join its simple membership management.
            </p>
          </div>
        </div>
        <a href="#" className="mt-4 inline-block text-blue-600 text-sm hover:underline">
          See all →
        </a>
      </div>
    </div>
      </div>
    </div>
    </>
    
  );
};

export default ManageAttendeeOrder;
