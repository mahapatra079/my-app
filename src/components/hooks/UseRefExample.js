

import { useRef } from "react";

function Reference() {
  const countRef = useRef(0);

  return (
      <div className="card">
        <h4>Simple Example: Store Value (No re-render)</h4>
            <button type="button" className="addBtn" onClick={() => {
                countRef.current += 1;
                console.log(countRef.current);
            }}>
                 Click Me
             </button>
          {/* check in console for value updates */}
          
          {/* 

            ✔ Value updates
            ✔ Component does NOT re-render

          */}
    </div>
  );
}

export default Reference;

