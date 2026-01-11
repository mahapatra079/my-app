import { Routes, Route, Link } from "react-router-dom";

// import LifeCyclePage from "./LifeCyclePage";
import ChildComponent from "./ChildComponent";
import Parent from "./Parent";
import State from "./State";
import AddingSum from "./AddingSum";
import ReversingString from "./ReversingString";
import CounterApplication from "./CounterApplication";
import CaptureInputData from "./CaptureInputData";
import ToggleSwitch from "./ToggleSwitch";
import ToDoList from "./ToDoList";
import LifeCyclePage from "./LifeCyclePage";

export default function App() {
  const userName = "Prop Drilling - PC → MC → GC";

  return (
    <div className="container">
      <nav>
        <Link to="/">Lifecycle</Link> |{" "}     {/*a single space in .... | → separator ...... {" "} → space after the pipe*/}
        <Link to="/props">Props</Link> |{" "}
        <Link to="/prop-drilling">Prop Drilling</Link> |{" "}
        <Link to="/state">State</Link> |{" "}
        <Link to="/toggle">Toggle</Link> |{" "}
        <Link to="/counter">Counter</Link> |{" "}
        <Link to="/todo">Todo</Link> |{" "}
        <Link to="/sum">Add Sum</Link> |{" "}
        <Link to="/reverse">Reverse</Link> |{" "}
        <Link to="/input">Live Input</Link>
      </nav>

      <Routes>
        <Route path="/" element={<LifeCyclePage />} />
        
        {/* Prop - Passing the data fronm Parent to Child Component */}
        <Route path="/props" element={<ChildComponent name="Amit" age={30} />} />

         {/* Props Drilling - passing to data from parent to multiple child  */}
        <Route path="/prop-drilling" element={<Parent userName={userName} />} />

        {/* State - Allow you to store data and modify the values */}
        <Route path="/state" element={<State />} />
        <Route path="/toggle" element={<ToggleSwitch />} />
        <Route path="/counter" element={<CounterApplication />} />
        <Route path="/todo" element={<ToDoList />} />
        <Route path="/sum" element={<AddingSum />} />
        <Route path="/reverse" element={<ReversingString />} />
        <Route path="/input" element={<CaptureInputData />} />
      </Routes>
    </div>
  );
}

// npm install react-router-dom - installing react router