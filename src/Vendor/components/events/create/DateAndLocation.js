import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";

const DateAndLocation = () => {
  const [expanded, setExpanded] = useState(false);
  const [venueName, setVenueName] = useState("");
  const [address, setAddress] = useState({
    address1: "",
    address2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  });
  const [coordinates, setCoordinates] = useState({ lat: null, lng: null });

  // Toggle function
  const toggleView = () => setExpanded(!expanded);

  // Function to handle address change and geocoding
  const handleAddressChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const geocodeAddress = async () => {
    const fullAddress = `${address.address1}, ${address.city}, ${address.state}, ${address.postalCode}, ${address.country}`;
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          fullAddress
        )}&key=YOUR_GOOGLE_MAPS_API_KEY`
      );
      const data = await response.json();
      if (data.results.length > 0) {
        const location = data.results[0].geometry.location;
        setCoordinates({ lat: location.lat, lng: location.lng });
      } else {
        alert("Address not found");
      }
    } catch (error) {
      console.error("Error fetching location:", error);
    }
  };

  return (
    <div className="flex justify-center items-center">
      {!expanded ? (
        <div className="flex justify-between items-center p-6 bg-[#101012] border border-gray-400 shadow-lg rounded-lg w-full">
          <div className="flex-1">
            <h2 className="text-xl font-bold text-white">Date and time</h2>
            <p className="text-gray-400">
              <span role="img" aria-label="calendar">📅</span> Wednesday, December 25 · 10am - 12pm GMT+5:30
            </p>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-800">Location</h2>
            <p className="text-gray-500">
              <span role="img" aria-label="location">📍</span> Enter a location
            </p>
            <p className="text-blue-600 cursor-pointer">Show map</p>
          </div>
          <button onClick={toggleView} className="bg-gray-100 rounded-full p-2 shadow-sm">
            <IoIosAdd className="text-blue-600" size={24} />
          </button>
        </div>
      ) : (
        <div className="bg-[#101012] p-8 rounded-lg shadow-lg  w-full border-2 border-indigo-800">
          <h2 className="text-2xl font-bold text-white mb-4">Date and location</h2>

          <div className="mb-6 flex items-center gap-4">
            <button className="flex-1 px-4 py-2 text-gray-300 rounded-lg border font-semibold focus:outline-none focus:ring-2 focus:ring-blue-600 hover:bg-blue-50">
              Single event
            </button>
            <button className="flex-1 px-4 py-2 text-gray-300 rounded-lg border font-semibold focus:outline-none focus:ring-2 focus:ring-blue-600 hover:bg-blue-50">
              Recurring event <span className="ml-1 text-xs text-blue-500">New</span>
            </button>
          </div>

          <div className="mb-6">
            <label className="block text-gray-200 font-semibold mb-2">Date and time</label>
            <div className="flex gap-4">
              <input type="date" className="w-full border rounded-lg p-2 bg-transparent text-gray-300" />
              <input type="time" className="w-full border rounded-lg p-2 bg-transparent text-gray-300" />
              <input type="time" className="w-full border rounded-lg p-2 bg-transparent text-gray-300" />
            </div>
            <p className="text-blue-600 mt-2 cursor-pointer">More options</p>
          </div>

          <div className="mb-6">
            <label className="block text-white font-semibold mb-2">Location</label>
            <div className="flex gap-4 mb-4 text-gray-300">
              <button className="flex-1 px-4 py-2 rounded-lg  border font-semibold focus:outline-none focus:ring-2 focus:ring-blue-600 hover:bg-blue-50">
                Venue
              </button>
              <button className="flex-1 px-4 py-2 rounded-lg border font-semibold focus:outline-none focus:ring-2 focus:ring-blue-600 hover:bg-blue-50">
                Online event
              </button>
              <button className="flex-1 px-4 py-2 rounded-lg border font-semibold focus:outline-none focus:ring-2 focus:ring-blue-600 hover:bg-blue-50">
                To be announced
              </button>
            </div>
            <input
              type="text"
              name="venueName"
              placeholder="Venue Name*"
              className="w-full border border-gray-200 rounded-lg p-2 mb-2 bg-transparent"
              value={venueName}
              onChange={(e) => setVenueName(e.target.value)}
            />
          
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="address1"
                placeholder="Address 1"
                className="border rounded-lg p-2 bg-transparent"
                onChange={handleAddressChange}
              />
              <input
                type="text"
                name="address2"
                placeholder="Address 2"
                className="border rounded-lg p-2 bg-transparent"
                onChange={handleAddressChange}
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                className="border rounded-lg p-2 bg-transparent"
                onChange={handleAddressChange}
              />
              <input
                type="text"
                name="state"
                placeholder="State/Province"
                className="border rounded-lg p-2 bg-transparent"
                onChange={handleAddressChange}
              />
              <input
                type="text"
                name="postalCode"
                placeholder="Postal Code"
                className="border rounded-lg p-2 bg-transparent"
                onChange={handleAddressChange}
              />
              <input
                type="text"
                name="country"
                placeholder="Country"
                className="border rounded-lg p-2 bg-transparent"
                onChange={handleAddressChange}
              />
            </div>
            <button
              onClick={geocodeAddress}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Show on Map
            </button>

            <div className="mt-6">
              {coordinates.lat && coordinates.lng ? (
                <iframe
                  src={`https://www.google.com/maps/embed/v1/view?key=YOUR_GOOGLE_MAPS_API_KEY&center=${coordinates.lat},${coordinates.lng}&zoom=15`}
                  width="100%"
                  height="300"
                  className="rounded-lg border"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              ) : (
                <p className="text-gray-300 mt-2">Map will be displayed here based on the address.</p>
              )}
            </div>
          </div>

          <div className="flex items-center mt-6">
            <input type="checkbox" id="reservedSeating" className="mr-2" />
            <label htmlFor="reservedSeating" className="text-gray-300">
              Reserved seating
            </label>
          </div>

          <button onClick={toggleView} className="mt-6 text-blue-600 underline">
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default DateAndLocation;
