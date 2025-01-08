import React, { useState } from "react";
import EventSidebar from "../../../components/events/EventSidebar";

const WaitlistSettings = () => {
  const [isEnabled, setIsEnabled] = useState("disable");
  const [selectedStep, setSelectedStep] = useState(1);
  return (

    <>
    <div className="flex min-h-screen">
        {/* Sidebar */}
        <EventSidebar
          selectedStep={selectedStep}
          setSelectedStep={setSelectedStep}
        />

        {/* Main Content */}
        <div className="flex-1 ml-48 p-8 overflow-y-auto">
        <div className=" flex flex-col items-center">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl text-white font-bold mb-2">Waitlist Settings</h1>
        <p className="text-gray-300">
          Let people join a waitlist if tickets sell out or your event reaches capacity.
        </p>
      </div>

      {/* Form */}
      <div className="bg-[#101012] shadow-md rounded-lg p-6 mt-8 w-full max-w-md">
        <h2 className="text-lg text-gray-50 font-semibold mb-4">Enable Waitlist:</h2>

        {/* Radio Buttons */}
        <div className="space-y-4">
          <div className="flex items-center">
            <input
              type="radio"
              id="enable"
              name="waitlist"
              value="enable"
              className="h-5 w-5 text-blue-500 border-gray-300 focus:ring-blue-500"
              checked={isEnabled === "enable"}
              onChange={() => setIsEnabled("enable")}
            />
            <label htmlFor="enable" className="ml-3 text-gray-200">
              Enable
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="disable"
              name="waitlist"
              value="disable"
              className="h-5 w-5 text-blue-500 border-gray-300 focus:ring-blue-500"
              checked={isEnabled === "disable"}
              onChange={() => setIsEnabled("disable")}
            />
            <label htmlFor="disable" className="ml-3 text-gray-200">
              Disable
            </label>
          </div>
        </div>

        {/* Save Button */}
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg mt-6 w-full hover:bg-blue-700">
          Save
        </button>
      </div>

      {/* Learn More Link */}
      <div className="mt-4">
        <a
          href="#"
          className="text-blue-500 text-sm hover:underline"
        >
          Learn more about waitlist settings
        </a>
      </div>
    </div>
        </div>
      </div>
    </>
   
  );
};

export default WaitlistSettings;
