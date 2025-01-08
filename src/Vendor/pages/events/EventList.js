import React from "react";
import { LuMoreVertical } from "react-icons/lu";
import { FaEllipsisV } from 'react-icons/fa';

import EventToolBar from "../../components/events/list/EventToolBar";

const EventList = () => {
  // An array with 5 elements to repeat the event data 5 times
  const eventData = Array(4).fill({
    month: "Nov",
    day: "11",
    imageUrl:
      "https://cdn.evbstatic.com/s3-build/perm_001/5287e3/django/images/pages/organizations/no-event-image-placeholder-2x.png",
    title: "Music Concert",
    location: "Nehru street",
    date: "Monday, November 11, 2024 at 10:00 AM IST",
    sold: "0/300",
    gross: "$0.00",
    status: "Draft",
  });

  return (
    <>
      <div className="flex flex-col min-h-screen px-20 py-10">
        <div>
          <h1 className="text-5xl text-white font-extrabold">Events</h1>
        </div>

        <EventToolBar />

        <div>
          <div className=" overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-50 uppercase bg-gray-900 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Event
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Sold
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Gross
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                 
                  </th>
                </tr>
              </thead>
              <tbody>
                {eventData.map((event, index) => (
                  <tr
                    key={index}
                    className="bg-[#101012] border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <div className="flex items-center gap-5">
                        <div className="flex flex-col text-gray-100 items-center gap-1">
                          <h1>{event.month}</h1>
                          <p>{event.day}</p>
                        </div>
                        <div>
                          <img src={event.imageUrl} className="w-20 h-20" />
                        </div>
                        <div>
                          <div>
                            <h1 className="text-white"> {event.title}</h1>
                          </div>
                          <div className="flex flex-col items-start text-gray-400">
                            <h1>{event.location}</h1>
                            <p>{event.date}</p>
                          </div>
                        </div>
                      </div>
                    </th>
                    <td className="px-6 py-4">{event.sold}</td>
                    <td className="px-6 py-4">{event.gross}</td>
                    <td className="px-6 py-4">{event.status}</td>
                    <td className="px-6 py-4">
                      <FaEllipsisV className="text-xl " />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventList;
