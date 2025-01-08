import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const GoodToKnow = () => {
  const [expanded, setExpanded] = useState(false);
  const [highlights, setHighlights] = useState([]);
  const [faqs, setFaqs] = useState([]);

  const toggleView = () => setExpanded(!expanded);

  const addHighlight = (type) => {
    setHighlights([...highlights, { id: Date.now(), type, value: "" }]);
  };

  const handleHighlightChange = (id, value) => {
    setHighlights(highlights.map((highlight) => (highlight.id === id ? { ...highlight, value } : highlight)));
  };

  const handleDeleteHighlight = (id) => {
    setHighlights(highlights.filter((highlight) => highlight.id !== id));
  };

  const addFaq = () => {
    setFaqs([...faqs, { id: Date.now(), question: "", answer: "" }]);
  };

  const handleFaqChange = (id, field, value) => {
    setFaqs(
      faqs.map((faq) => (faq.id === id ? { ...faq, [field]: value } : faq))
    );
  };

  const handleDeleteFaq = (id) => {
    setFaqs(faqs.filter((faq) => faq.id !== id));
  };

  return (
    <div className="flex justify-center items-center">
      {!expanded ? (
        // Initial Compact View
        <div className="flex justify-between items-center p-6 bg-[#101012] border border-gray-400 shadow-lg rounded-lg w-full">
          <div>
            <h2 className="text-xl font-bold text-white">Good to know</h2>
            <div className="flex gap-2 mt-4">
              <button className="px-4 py-2 border border-gray-300 text-gray-300 rounded-md">+ Add Age info</button>
              <button className="px-4 py-2 border border-gray-300 text-gray-300 rounded-md">+ Add Door Time</button>
              <button className="px-4 py-2 border border-gray-300  text-gray-300 rounded-md">+ Add Parking info</button>
            </div>
            <p className="mt-4 text-blue-600 cursor-pointer">+ Add question</p>
          </div>
          <button onClick={toggleView} className="bg-gray-100 rounded-full p-2 shadow-sm">
            <IoIosAdd className="text-blue-600" size={24} />
          </button>
        </div>
      ) : (
        // Expanded Detailed View
        <div className="bg-[#101012] p-8 rounded-lg shadow-lg  w-full border-2 border-indigo-800">
          <h2 className="text-2xl font-bold text-white mb-4">Good to know</h2>
          <p className="text-gray-400 mb-6">
            Use this section to feature specific information about your event. Add highlights and frequently asked questions for attendees.
          </p>

          {/* Highlights Section */}
          <h3 className="text-lg font-semibold text-gray-100 mb-2">Highlights</h3>
          <div className="flex gap-2 mb-4 text-gray-400">
            <button className="px-4 py-2 border border-gray-300 rounded-md">
              + Add Age info
            </button>
            <button  className="px-4 py-2 border border-gray-300 rounded-md">
              + Add Door Time
            </button>
            <button  className="px-4 py-2 border border-gray-300 rounded-md">
              + Add Parking info
            </button>
          </div>
   

          {/* FAQ Section */}
          <h3 className="text-lg font-semibold text-gray-100 mb-2">Frequently asked questions</h3>
          <p className="text-gray-400 mb-2">Answer questions your attendees may have about the event, like accessibility and amenities.</p>
          <button onClick={addFaq} className="text-blue-600 mb-4">+ Add question</button>
          <div>
            {faqs.map((faq) => (
              <div key={faq.id} className="relative mb-4 p-4 border rounded-lg bg-transparent">
                <input
                  type="text"
                  placeholder="Enter question"
                  className="w-full border rounded-lg p-2 mb-2 bg-transparent"
                  value={faq.question}
                  onChange={(e) => handleFaqChange(faq.id, "question", e.target.value)}
                />
                <textarea
                  placeholder="Enter answer"
                  className="w-full border rounded-lg p-2 bg-transparent"
                  rows="2"
                  value={faq.answer}
                  onChange={(e) => handleFaqChange(faq.id, "answer", e.target.value)}
                />
                <button
                  onClick={() => handleDeleteFaq(faq.id)}
                  className="absolute top-2 right-2 text-red-500"
                >
                  <IoMdClose size={20} />
                </button>
              </div>
            ))}
          </div>

          <button onClick={toggleView} className="mt-6 text-blue-600 underline">
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default GoodToKnow;
