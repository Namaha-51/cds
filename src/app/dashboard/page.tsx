"use client";

import { useState, useEffect } from "react";

export default function Dashboard() {
  const [content, setContent] = useState<any>(null);
const [activeTab, setActiveTab] = useState("");
  const [status, setStatus] = useState("");

  // Load the content when the dashboard opens
// Load the content when the dashboard opens
useEffect(() => {
  fetch("/api/content")
    .then((res) => res.json())
    .then((data) => {
      setContent(data);
      setActiveTab(Object.keys(data)[0]); // Automatically picks the first page in your JSON!
    });
}, []);

  // Save changes back to the JSON file
  const handleSave = async () => {
    setStatus("Saving...");
    const res = await fetch("/api/content", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(content),
    });
    
    if (res.ok) {
      setStatus("Saved successfully! Changes are live.");
      setTimeout(() => setStatus(""), 3000);
    } else {
      setStatus("Error saving.");
    }
  };

  const handleInputChange = (page: string, field: string, value: any) => {
    setContent((prev: any) => ({
      ...prev,
      [page]: {
        ...prev[page],
        [field]: value,
      },
    }));
  };

  if (!content) return <div className="p-10 text-center font-bold text-xl">Loading Dashboard...</div>;

  return (
    <div className="min-h-screen p-10 bg-gray-100 text-gray-900">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-200">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8 pb-4 border-b">
          <h1 className="text-3xl font-extrabold tracking-tight">Content Dashboard</h1>
          <button
            onClick={handleSave}
            className="bg-black text-white px-6 py-2 rounded-lg font-bold hover:bg-gray-800 transition-colors"
          >
            Push to Live
          </button>
        </div>
        
        {status && <div className="mb-6 text-green-700 font-bold bg-green-100 p-3 rounded">{status}</div>}

        {/* 5-Page Tabs */}
        <div className="flex gap-2 border-b pb-4 mb-8 overflow-x-auto">
          {Object.keys(content).map((page) => (
            <button
              key={page}
              onClick={() => setActiveTab(page)}
              className={`px-5 py-2 uppercase tracking-wide text-sm font-bold rounded-lg transition-colors ${
                activeTab === page ? "bg-black text-white" : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        {/* Editor Form for the Active Tab */}
        <div className="space-y-6">
         {content[activeTab] && Object.keys(content[activeTab]).map((field) => (
            <div key={field} className="flex flex-col bg-gray-50 p-4 rounded-lg border border-gray-100">
              <label className="mb-3 font-bold uppercase text-xs tracking-wider text-gray-600">
                [ {activeTab} ] - {field.replace(/([A-Z])/g, ' $1').trim()}
              </label>
              
              {typeof content[activeTab][field] === "boolean" ? (
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={content[activeTab][field]}
                    onChange={(e) => handleInputChange(activeTab, field, e.target.checked)}
                    className="w-6 h-6 cursor-pointer accent-black"
                  />
                  <span className="ml-3 font-medium text-sm text-gray-700">Enable/Disable this section</span>
                </div>
              ) : (
                <textarea
                  value={content[activeTab][field]}
                  onChange={(e) => handleInputChange(activeTab, field, e.target.value)}
                  className="border border-gray-300 rounded-md p-4 w-full focus:ring-2 focus:ring-black focus:outline-none transition-shadow"
                  rows={3}
                />
              )}
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}