// Implement a custom hook that handles click events anywhere on the document.

import { useEffect } from "react";

// ClickEvent component to handle document click events
function ClickEvent() {
  useEffect(() => {
    const handleClick = () => {
      alert("Document Clicked!");
      };
      
// Add event listener
    document.addEventListener("click", handleClick);
      return () => {
// Cleanup event listener
      document.removeEventListener("click", handleClick);
    };
  }, []);
    // Whole document click → useEffect + addEventListener

  return (
    <div className="click-event textCenter">
          <h2>Click anywhere on the page</h2>
          {/* we avoid direct DOM manipulation and use React’s event system. Document-level events should be handled using useEffect */}
    </div>
  );
}

export default ClickEvent;
