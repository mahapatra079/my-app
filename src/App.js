import {useState } from "react";
import ChildComponent from "./ChildComponent";
import Parent from "./Parent";
import LifeCycle from "./Lifecycle";
import State from "./State"
import AddingSum from "./AddingSum";
import ReversingString from "./ReversingString"
import CounterApplication from "./CounterApplication";
import CaptureInputData from "./CaptureInputData";

export default function App() {
  const [show, setShow] = useState(true);

  const userName = "Prop Drilling - PC → MC → GC";

  return (
    <>
        <div className="container">
          {/* LifeCyclePhase */}
          <div>
            <h4>LifeCycle Phase - Mount → Update → Unmount</h4>
            <button onClick={() => setShow(!show)} className="mt-20">
              Toggle Component
            </button>

            {show && <LifeCycle  />}
           </div>

          {/* Props  */}
          <div>
              <h2 className="concept">Props Concept</h2>
              <div className="props">
                      {/* Prop - Passing the data fronm Parent to Child Component */}
                    <h3> Hello Parent Compnent(App.js) --- data is passed from parent to child below block.</h3>
                <ChildComponent name="Amit" age="30" className="parentchild(App.js)"/>
              
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

          {/* Props Drilling - passing to data from parent to multiple child  */}
            <div>
              <h2>Prop-Drilling Concept</h2>
                <div className="props-drilling">
                  <Parent userName={userName}/>
                </div>
            </div>  
        </div>
        <div className="Container-2">
          {/* State - Allow you to store data and modify the values */}
          <div className="sate">
            <h4>State Management</h4>
             <State/>
           </div>
           <AddingSum/>
           <ReversingString/>
           <CounterApplication/>
           <CaptureInputData/>
        </div>


    </>
  );
}
