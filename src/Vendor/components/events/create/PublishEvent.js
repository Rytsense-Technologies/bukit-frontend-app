import React from "react";
import { FiExternalLink } from "react-icons/fi";

const PublishEvent = () => {
  return (
    <div className="max-w-5xl mx-auto p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">
          Your event is almost ready to publish
        </h1>
        <p className="text-gray-300 mt-2">
          Review your settings and let everyone find your event.
        </p>
      </div>

      {/* Event Details Section */}
      <div className="bg-[#101012] border border-gray-200 rounded-lg p-6 mb-6">
        <div className="flex justify-between">
          {/* Event Info */}
          <div className="flex items-start gap-4">
            {/* Event Image Placeholder */}
            <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-100 text-sm">Image</span>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-100">kk</h2>
              <p className="text-sm text-gray-100">
                Sat, 28 Dec 2024 10:00 AM - 12:00 PM ACST
              </p>
              <p className="text-sm text-gray-100">kkk, hhh, SA 878787</p>
            </div>
          </div>
          {/* Preview Link */}
          <a
            href="#"
            className="text-blue-600 text-sm font-medium flex items-center gap-1"
          >
            Preview <FiExternalLink />
          </a>
        </div>
      </div>

      {/* Organised By Section */}
      <div className="bg-[#101012] border border-gray-200 rounded-lg p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-50 mb-4">
          Organised by
        </h2>
        <input
          type="text"
          placeholder="Organiser"
          className="w-full border border-gray-300 rounded-lg p-3 mb-2"
        />
        <p className="text-sm text-gray-400">
          Adding a name will create an organizer profile after publishing, and
          this event will appear on the organizer’s profile page.
        </p>
        <a href="#" className="text-blue-600 text-sm font-medium mt-2 block">
          View organizer info
        </a>
      </div>

      {/* Publish Settings */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-50 mb-4">
          Publish settings
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-white mb-2">
              Is your event public or private?
            </h3>
            <div className="flex flex-col gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="visibility"
                  className="form-radio text-blue-500"
                />
                <span className="text-gray-200 font-medium">Public</span>
                <p className="text-sm text-gray-400 ml-6">
                  Shared on Eventbrite and search engines
                </p>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="visibility"
                  className="form-radio text-blue-500"
                />
                <span className="text-gray-200 font-medium">Private</span>
                <p className="text-sm text-gray-400 ml-6">
                  Shared only with a select audience
                </p>
              </label>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-white mb-2">
              When should we publish your event?
            </h3>
            <div className="flex flex-col gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="publish-time"
                  className="form-radio text-blue-500"
                />
                <span className="text-gray-400 font-medium">Publish now</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="publish-time"
                  className="form-radio text-blue-500"
                />
                <span className="text-gray-400 font-medium">
                  Schedule for later
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Tips and Publish Button */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Tips Section */}
        <div className="bg-[#101012] border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-100 mb-4">
            Check out these tips before you publish 💡
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-blue-200 text-sm font-medium hover:underline"
              >
                Create promo codes for your event →
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-blue-200 text-sm font-medium hover:underline"
              >
                Customise your order form →
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-blue-200 text-sm font-medium hover:underline"
              >
                Add this event to a collection to increase visibility →
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-blue-200 text-sm font-medium hover:underline"
              >
                Develop a safety plan for your event →
              </a>
            </li>
          </ul>
        </div>

        {/* Publish Button */}
        <div className="flex items-end justify-end">
          <button className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700">
            Publish now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PublishEvent;
