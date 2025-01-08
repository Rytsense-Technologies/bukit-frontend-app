import React, { useState } from "react";
import EventSidebar from "../../../components/events/EventSidebar";
const OrderConfirmation = () => {
  const [selectedStep, setSelectedStep] = useState(1);
  return (
    <>
      <div className="flex  min-h-screen">
        {/* Sidebar */}
        <EventSidebar
          selectedStep={selectedStep}
          setSelectedStep={setSelectedStep}
        />

        {/* Main Content */}
        <div className="flex-1 ml-96 p-8 overflow-y-auto">
          <div className="flex flex-col">
            <h1 className="text-3xl text-white font-bold mb-6">Order Confirmation</h1>
            <p className="text-gray-300 mb-8">
              View and edit the order confirmation page that attendees see after
              placing their order.
            </p>

            {/* Customize Webpage Section */}
            <div className="mb-8">
              <h2 className="text-xl text-gray-100 font-semibold mb-4">Customize Webpage</h2>
              <p className="text-gray-300 mb-2">
                After registering for your event, attendees will see an
                on-screen message until they navigate away from the page. Add
                special instructions or other useful information here, but also
                add important information in the Customize Email section so the
                attendees can access it later.
              </p>
              <p className="text-sm text-gray-400 mb-4">
                Messages on order confirmation page — emojis, HTML tags, and
                special characters aren’t supported in this message.
              </p>
              <textarea
                className="w-full bg-[#101012] p-4 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500"
                rows="6"
                placeholder="e.g., Thanks for registering! Don’t forget to keep your tickets handy, either in the Eventbrite app or print them out and bring them with you."
              ></textarea>
            </div>

            {/* Customize Email Section */}
            <div className="mb-8">
              <h2 className="text-xl text-gray-100 font-semibold mb-4">Customize Email</h2>
              <p className="text-gray-300 mb-2">
                Your attendees will also receive an email after registration,
                confirming their order. Add important instructions or other
                useful information here so attendees can access it at any time.
              </p>
              <p className="text-sm text-gray-400 mb-4">
                Choose your “reply-to” email address (this is the email you want
                reply messages to be sent).
              </p>
              <input
                type="email"
                className="w-full bg-[#101012] p-4 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-blue-500"
                placeholder="example@email.com"
              />
              <p className="text-sm text-gray-400 mb-4">
                Confirmation message for email and, if applicable, printable PDF
                — emojis and special characters aren’t supported in this
                message.
              </p>
              <textarea
                className="w-full bg-[#101012] p-4 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500"
                rows="6"
                placeholder="Tell your attendees what they should bring to the event, and include information about your refund policy. If you’re hosting an online event, you can provide webinar instructions in this section."
              ></textarea>
            </div>

            {/* Additional Settings */}
            <div className="mb-8">
              <h2 className="text-xl text-gray-100 font-semibold mb-4">
                Additional Settings
              </h2>
              <p className="text-gray-300 mb-4">
                Configure whether attendees should receive a printable PDF when
                they register.
              </p>
              <select className="w-full bg-[#101012] text-gray-300 p-4 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-blue-500">
                <option>Same settings for all ticket types</option>
                <option>Custom settings for each ticket type</option>
              </select>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="printableTickets"
                  className="h-5 w-5  text-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="printableTickets"
                  className="ml-2 text-gray-400"
                >
                  Include printable tickets in all orders
                </label>
              </div>
            </div>

            {/* Save Button */}
            <div className="mt-8">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                Save Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderConfirmation;
