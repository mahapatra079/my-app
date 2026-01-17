//  Build a tabs component that displays one panel of content at a time depending on the active tab element.

import { useState } from "react";

function Tabs() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="tab-selection" style={{ width: "300px", margin: "20px auto" }}>
      {/* Tab Buttons */}
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={() => setActiveTab("home")}>Home</button>
        <button onClick={() => setActiveTab("profile")}>Profile</button>
        <button onClick={() => setActiveTab("settings")}>Settings</button>
      </div>

      {/* Tab Content */}
      <div style={{ marginTop: "20px" }}>
        {activeTab === "home" && <p>Home Content</p>}
        {activeTab === "profile" && <p>Profile Content</p>}
        {activeTab === "settings" && <p>Settings Content</p>}
      </div>
    </div>
  );
}

export default Tabs;

// Explanation:used state to track the active tab and conditionally rendered content based on it.”

// How it works

// activeTab stores which tab is selected

// Clicking button updates state

// Conditional rendering shows one panel at a time