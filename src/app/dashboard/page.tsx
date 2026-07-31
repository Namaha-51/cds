"use client";

import { useState, useEffect } from "react";

const FALLBACK_DATA = {
  home: {
    heroTitle: "Melbourne’s Premium Appliance & Air Conditioning Specialists",
    heroDesc: "Manufacturer authorised technicians with hands-on experience, servicing and installing residential & commercial air conditioning systems and appliances",
  },
  aboutUs: {
    heroTitle: "Marine Engineering Precision. Applied to Your Home.",
    heroDesc: "Most appliance repair companies are generalists. We are specialists.",
  },
  contact: {
    heroTitleMain: "Contact Our Melbourne Team",
    phoneCardVal: "0405 545 609",
  },
  serviceAreas: {
    heroTitleMain: "Appliance Repairs Across Melbourne.",
  },
  propertyManagement: {
    heroTitleMain: "Melbourne's Property Maintenance & Appliance Specialists",
  }
};

export default function Dashboard() {
  const [content, setContent] = useState<any>(FALLBACK_DATA);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<string>("home");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/content")
      .then((res) => res.json())
      .then((data) => {
        let actualData = data.content || data;
        // If data is invalid or an error string, fallback cleanly
        if (!actualData || typeof actualData !== "object" || Array.isArray(actualData) || actualData.error) {
          actualData = FALLBACK_DATA;
        }
        setContent(actualData);
        const keys = Object.keys(actualData);
        if (keys.length > 0) setActiveTab(keys[0]);
        setLoading(false);
      })
      .catch((err) => {
        setContent(FALLBACK_DATA);
        setLoading(false);
      });
  }, []);

  const handleChange = (key: string, value: string) => {
    setContent((prev: any) => ({
      ...prev,
      [activeTab]: {
        ...prev[activeTab],
        [key]: value,
      },
    }));
  };

  const handleSave = async () => {
    setSaving(true);
    setMessage("");
    try {
      const res = await fetch("/api/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(content),
      });
      if (res.ok) {
        setMessage("Successfully pushed to live!");
      } else {
        setMessage("Error saving changes.");
      }
    } catch (err) {
      setMessage("Error saving changes.");
    }
    setSaving(false);
  };

  if (loading) {
    return <div className="p-10 font-mono">Loading dashboard telemetry...</div>;
  }

  const sections = Object.keys(content || FALLBACK_DATA);

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-6 border-b border-gray-100">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Content Dashboard</h1>
            <p className="text-sm text-gray-500 mt-1">Manage live website copy stored in Supabase</p>
          </div>
          <div className="flex items-center gap-4">
            {message && <span className="text-sm font-medium text-green-600">{message}</span>}
            <button
              onClick={handleSave}
              disabled={saving}
              className="bg-black text-white px-5 py-2.5 rounded-lg font-medium hover:bg-gray-800 transition-colors disabled:opacity-50"
            >
              {saving ? "Pushing..." : "Push to Live"}
            </button>
          </div>
        </div>

        {/* Section Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 pb-4 border-b border-gray-100">
          {sections.map((sectionKey) => (
            <button
              key={sectionKey}
              onClick={() => setActiveTab(sectionKey)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === sectionKey
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {sectionKey.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Fields Editor */}
        {activeTab && content[activeTab] && (
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-800 capitalize border-b pb-2">
              Section: {activeTab}
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {Object.entries(content[activeTab]).map(([fieldKey, fieldValue]) => (
                <div key={fieldKey} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <label className="block text-xs font-mono font-semibold text-gray-500 uppercase mb-2">
                    {fieldKey}
                  </label>
                  <textarea
                    value={fieldValue as string}
                    onChange={(e) => handleChange(fieldKey, e.target.value)}
                    rows={2}
                    className="w-full p-3 bg-white border border-gray-300 rounded-md text-gray-800 text-sm focus:ring-2 focus:ring-black focus:outline-none"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}