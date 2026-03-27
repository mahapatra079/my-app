import { useState } from 'react';

const UseStateExample = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="card">
      <h2>useState Hook Example</h2>
      
      <div>
        <h3>Counter: {count}</h3>
        <button className='addBtn' onClick={() => setCount(count + 1)}>Increment</button>
        <button className='addBtn' onClick={() => setCount(count - 1)}>Decrement</button>
        <button className='addBtn' onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
};

export default UseStateExample;


// import React, { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   const handleIncrement = () => {
//     setCount(count + 1);
//   };
  
//    const handleDecrement = ()=>{
//      if (count > 0) {
//      setCount(count - 1 )
     
//      }
//   }
   
//    const handleReset = ()=>{
//      setCount(0)
//    }
   
   
   
//   return (
//     <div>
//       <button type="button" onClick={handleIncrement}>Increment</button>
//        <button type="button" onClick={handleDecrement} disabled = {count === 0}>Decrement</button>
//       <button type="button" onClick={handleReset} disabled = {count === 0 }>Reset</button>


//       <p>Count: {count}</p>
//     </div>
//   );
// }

// export default Counter;


// counter application using increment decrement reset the value now I want its should not go negative  and make the decrement and reset button disable when count is 0