import React, { useState } from "react";
import EventSidebar from "../../../components/events/EventSidebar";

const OrderForm = () => {
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
          <div className="  flex items-center justify-center ">
            <div className=" shadow-md rounded-md p-10">
              {/* Header Section */}
              <h1 className="text-4xl font-bold text-white mb-6">Order form</h1>
              <p className="text-gray-300 text-lg">
                Customize the information you collect from attendees. Focus on
                what will help{" "}
                <span className="font-semibold">
                  create a better event experience.
                </span>
              </p>
              <p className="mt-4 text-gray-300 text-lg">
                The fewer questions you ask, the better. We’ve learned that a
                shorter order form can{" "}
                <span className="font-semibold">
                  increase your sales by up to 14%.
                </span>
              </p>
              <p className="mt-4 text-gray-300 text-lg">
                People care about privacy. By default, we collect first name,
                last name, and email. Be mindful of the personal information you
                request.
              </p>

              {/* Icon Section */}

              {/* Action Section */}
              <div className="mt-12">
                <h2 className="text-lg font-medium text-gray-200 mb-4">
                  Copy an order form from another event or create a new one
                </h2>
                <div className="flex space-x-4">
                  {/* Create New Form Card */}
                  <div className="flex-1 p-6 bg-[#101012] rounded-md text-center">
                    <div className="w-12 h-12 mx-auto bg-blue-500 rounded-full flex items-center justify-center text-white">
                      +
                    </div>
                    <p className="mt-4 text-gray-100 font-medium">
                      Create a new form
                    </p>
                    <p className="text-gray-300 text-sm">
                      Start with a blank slate
                    </p>
                  </div>
                  {/* Copy Existing Form Card */}
                  <div className="flex-1 p-6 bg-[#101012] rounded-md text-center">
                    <h3 className="text-gray-100 font-medium">Test event</h3>
                    <p className="text-gray-300 text-sm">
                      Sun, Dec 29, 2024 10:00 AM
                    </p>
                    <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md text-sm">
                      Copy this order form
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderForm;
