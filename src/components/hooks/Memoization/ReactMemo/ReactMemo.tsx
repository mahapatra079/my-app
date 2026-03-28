import { useState } from "react";
import ChildMemo from "./ChildMemo";

export const ReactMemo = () => {
    console.log("ReactMemo component rendered");
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Amit");

    // Event handlers to update count and name states
    const handleCountMemo = () => { 
        setCount(count + 1);
        console.log("Count updated :", count + 1);
    }

    // This function toggles the name between "Amit" and "John". When the name changes, the ChildMemo component will re-render because it receives the name as a prop.
    const handleNameMemo = () => { 
        // This line updates the name state to "John" if it is currently "Amit", and back to "Amit" if it is currently "John".
        // This will trigger a re-render of the ChildMemo component since the name prop changes.
        setName(name === "Amit" ? "John" : "Amit"); 
        console.log("Name updated :", name === "Amit" ? "John" : "Amit");
        // This console log will show the updated name after the state change. It will indicate whether the name was changed to "John" or back to "Amit".
    }

    // const Info = {
    //     name: "Amit",
    //     age: 30,
    //     city: "New York"
    // }

    return (
      <>
        <div className="card">
          <h1 className="font-bold">React Memo Example</h1>
            <ChildMemo name={name}  />
          <p onClick={handleCountMemo} className="font-medium text-lg mt-5 cursor-pointer">
            Change Count (ChildMemo won't re-render)
          </p>
          <p className="text-red-600">Count: {count}</p>
          <p onClick={handleNameMemo} className="font-semibold text-xl cursor-pointer">
            Change Name (ChildMemo WILL re-render)
          </p>
        </div>
      </>
    );
}
// Now, we have a parent component called ReactMemo that uses the useState hook to manage a count state.
// The ChildMemo component is wrapped with React.memo, which means it will only re-render if its props change.
// Since the name prop passed to ChildMemo is a string and does not change, the ChildMemo component will not re-render
// when the count state in the parent component changes. The console log statements will help us see when each component is rendered.