import { useEffect, useState } from "react";
import ChildComponent from "./ChildComponent";

export default function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="container">
      <button onClick={() => setShow(!show)} className="mt-20">
        Toggle Component
      </button>

      {show && <Child />}

      <div className="Props">
           {/* Prop - Passing the data fronm Parent to Child Component */}
          <ChildComponent name="Amit" age="30"/>
          {/*
           Numbers, booleans, objects, arrays, variables, expressions → use { } 
            | Value Type | How to Pass           |
            | ---------- | --------------------- |
            | String     | `"Amit"`              |
            | Number     | `{25}`                |
            | Boolean    | `{true}`              |
            | Variable   | `{age}`               |
            | Expression | `{10 + 5}`            |
            | Object     | `{{ city: "Delhi" }}` |
          */}

          {/* Anything that is NOT a string must go inside {} in JSX */}
          
          {/*  In TypeScript

              Parent component
              <ChildComponent name="Amit" age="30"/>

              Child Component
              type UserCardProps = {
                    name: string;
                    age: number;
                  };

                  example in Child Component
                    function UserCard({ name, age }: UserCardProps) {
                        return (
                          <div>
                            <h2>{name}</h2>
                            <p>Age: {age}</p>
                          </div>
                        );
                      }          
          */}
          </div>
    </div>
  );
}



// Use Effect And the Life Cycle Phase
function Child() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Mounted");

    return () => {
      console.log("Unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("Updated:", count);
  }, [count]);

  return (
    <>
      <div className="container">
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>
          Update
        </button>
      </div>

 
      </>
  );
}
