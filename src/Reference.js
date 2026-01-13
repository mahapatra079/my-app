// import { useRef } from "react";

// function Reference() {

//     const inputRef = useRef(null);
//       const handleFocus = () => {
//         console.log("Ref object:", inputRef);
//         console.log("DOM element:", inputRef.current);
//     inputRef.current.focus();
//   };
//     return (
//     <div className="use-reference">
//         <h4>Reference Component</h4>
//         <div>
//            <p> This is a simple reference component.</p>
//             <input type="text" ref={inputRef} />
//                 <button type="button" className="addBtn" onClick={handleFocus}>Focus input</button>
//             </div>
            
                // useRef(null) → creates a ref
                // ref={inputRef} → connects input to ref
                // inputRef.current → actual DOM input
                // .focus() → focuses input
            
            
        // </div>
    // );
//  }

// export default Reference; 

import { useRef } from "react";

function Reference() {
  const countRef = useRef(0);

  return (
      <div className="use-reference">
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

