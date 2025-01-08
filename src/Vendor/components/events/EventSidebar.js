import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const steps = [
  {
    id: 1,
    title: "Build event page",
    description:
      "Add all of your event details and let attendees know what to expect",
  },
  {
    id: 2,
    title: "Add tickets",
    description: "Add ticket options and pricing",
  },
  {
    id: 3,
    title: "Publish",
    description: "Make your event live for attendees",
  },
];

const EventSidebar = ({  selectedStep, setSelectedStep }) => {
  // State for managing submenus
  const [openSubmenus, setOpenSubmenus] = useState({
    orderOptions: false,
    manageAttendees: false,
  });

  // Toggle submenu visibility
  const toggleSubmenu = (key) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="w-80 bg-[#101012] flex-shrink-0 fixed top-18 left-40 h-full overflow-y-auto">
      <div className="flex items-center gap-4 border-b text-blue-600 font-bold border-gray-300 p-4">
        <IoIosArrowBack />
        <Link to="/events/list">Back to events</Link>
      </div>
      <div className="px-4 py-10">
        {/* Event Details */}
        <div className="bg-white p-6 rounded-lg shadow-xl flex flex-col items-start gap-4">
          <h1 className="text-2xl font-bold">Event Title</h1>
          <p className="text-gray-500 font-semibold">
            Wed, Dec 25, 2024, 10:00 AM
          </p>
          <button className="px-8 py-2 rounded-full border border-gray-500 font-semibold">
            Draft
          </button>
        </div>

        {/* Steps */}
        <div className="mt-10">
          <h2 className="text-gray-600 font-semibold mb-4">Steps</h2>
          {steps.map((step) => (
            <div
              key={step.id}
              onClick={() => setSelectedStep(step.id)}
              className={`flex items-start gap-4 p-4 rounded-lg cursor-pointer ${
                selectedStep === step.id
                  ? "bg-gray-900 border-l-4 border-blue-600"
                  : "hover:bg-gray-900"
              }`}
            >
              <div
                className={`w-6 h-6 flex justify-center items-center rounded-full ${
                  selectedStep === step.id
                    ? "bg-blue-600 text-white"
                    : "border border-gray-400 text-gray-400"
                }`}
              >
                {selectedStep === step.id ? (
                  <span>&#x25CF;</span>
                ) : (
                  <span>&#x25EF;</span>
                )}
              </div>
              <div>
                <h3 className="font-semibold text-white">{step.title}</h3>
                <p className="text-sm text-gray-300">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar Menu */}
        <ul className="flex flex-col items-start gap-4  justify-center font-medium">
          {/* Dashboard */}
          <li className="w-64">
            <a
              href="/event-dashboard"
              className="flex items-center p-2 text-gray-100 text-lg rounded-lg dark:text-white hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700 group"
            >
              Dashboard
            </a>
          </li>

          {/* Order Options with Submenu */}
          <li className="w-64">
            <div
              onClick={() => toggleSubmenu("orderOptions")}
              className="flex items-center justify-between p-2 text-gray-100 text-lg rounded-lg dark:text-white hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700 group cursor-pointer"
            >
              Order Options
              <span className="ml-auto">
                {openSubmenus.orderOptions ? "-" : "+"}
              </span>
            </div>
            {openSubmenus.orderOptions && (
              <ul className="pl-6 mt-2 space-y-2">
                <li>
                  <a
                    href="/order-form"
                    className="text-gray-100 hover:underline"
                  >
                    Order Form
                  </a>
                </li>
                <li>
                  <a
                    href="/order-confirmation"
                    className="text-gray-100 hover:underline"
                  >
                    Order Confirmation
                  </a>
                </li>
                <li>
                  <a
                    href="/waitlist-settings"
                    className="text-gray-100 hover:underline"
                  >
                    Waitlist
                  </a>
                </li>
              </ul>
            )}
          </li>

          {/* Manage Attendees with Submenu */}
          <li className="w-64">
            <div
              onClick={() => toggleSubmenu("manageAttendees")}
              className="flex items-center p-2 text-gray-100 text-lg rounded-lg dark:text-white hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700 group cursor-pointer"
            >
              Manage Attendees
              <span className="ml-auto">
                {openSubmenus.manageAttendees ? "-" : "+"}
              </span>
            </div>
            {openSubmenus.manageAttendees && (
              <ul className="pl-6 mt-2 space-y-2">
                <li>
                  <a
                    href="/manage-orders"
                    className="text-gray-100 hover:underline"
                  >
                    Manage Orders
                  </a>
                </li>
                <li>
                  <a
                    href="/add-attendees"
                    className="text-gray-100 hover:underline"
                  >
                    Add Attendees
                  </a>
                </li>
                <li>
                  <a
                    href="/emails-to-attendees"
                    className="text-gray-100 hover:underline"
                  >
                    Emails to Attendees
                  </a>
                </li>
                <li>
                  <a
                    href="/attendee-list"
                    className="text-gray-100 hover:underline"
                  >
                    Attendee List
                  </a>
                </li>
                <li>
                  <a
                    href="/check-in"
                    className="text-gray-100 hover:underline"
                  >
                    Check-in
                  </a>
                </li>
              </ul>
            )}
          </li>

          {/* Reporting */}
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-100 text-lg rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              Reporting
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EventSidebar;
