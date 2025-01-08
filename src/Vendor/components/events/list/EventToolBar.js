import React from "react";
import SearchEvents from "./SearchEvents";
import { FaList } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import FilterEvents from "./FilterEvents";
import { useNavigate } from "react-router-dom";
const EventToolBar = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="py-10 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-5">
            <SearchEvents />
            <div className="flex items-center gap-2 ">
              <button
                type="button"
                class="flex items-center gap-4 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-md px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <FaList /> List
              </button>
              <button
                type="button"
                class="flex items-center gap-4  border border-gray-300 text-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-300  font-medium rounded-full text-md px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600  dark:focus:ring-blue-800"
              >
                <SlCalender /> Calender
              </button>
            </div>
          </div>
          <div>
            <FilterEvents />
          </div>
        </div>
        <div>
          <button onClick={() => navigate("/create-event")} className="bg-pink-800 px-6 py-2 text-white font-semibold">
            Create Event
          </button>
        </div>
      </div>
    </>
  );
};

export default EventToolBar;
