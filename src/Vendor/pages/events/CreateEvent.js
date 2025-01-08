import React, { useState } from "react";
import UploadComponent from "../../components/events/create/UploadComponent";
import { IoIosArrowBack } from "react-icons/io";
import EventOverview from "../../components/events/create/EventOverview";
import DateAndLocation from "../../components/events/create/DateAndLocation";
import Overview from "../../components/events/create/Overview";
import GoodToKnow from "../../components/events/create/GoodToKnow";
import AddMoreSections from "../../components/events/create/AddMoreSections";
import CreateTickets from "../../components/events/create/CreateTickets";
import PublishEvent from "../../components/events/create/PublishEvent";
import { Link } from "react-router-dom";
import EventSidebar from "../../components/events/EventSidebar";

const CreateEvent = () => {
  // State to manage selected step
  const [selectedStep, setSelectedStep] = useState(1);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <EventSidebar
        selectedStep={selectedStep}
        setSelectedStep={setSelectedStep}
      />

      {/* Main Content */}
      <div className="flex-1 ml-48 p-8 overflow-y-auto">
        {selectedStep === 1 && (
          <div className="flex flex-col gap-5 lg:px-40">
            <UploadComponent />
            <EventOverview />
            <DateAndLocation />
            <Overview />
            <GoodToKnow />
            <AddMoreSections />
          </div>
        )}
        {selectedStep === 2 && <CreateTickets />}
        {selectedStep === 3 && <PublishEvent />}
      </div>
    </div>
  );
};

export default CreateEvent;
