import { Routes, Route, Link } from "react-router-dom";
import FunctionalComponent from "./components/function-class/Greet";
import Welcome from "./components/function-class/Welcome";
import WithJsx from "./components/jsx/WithJsx";
import { WithoutJsx } from "./components/jsx/WithoutJsx";
import Fragment from "./components/jsx/Fragment";
import Child from "./components/props/Child";
import ClickEvent from './components/event-handling/ClickEvent'
import EventObjects from "./components/event-handling/EventObjects";
import EventHandlerProps from "./components/event-handling/EventHandlerProps";
import { EventContact } from "./components/event-handling/EventContact";
import { Counter } from "./components/state-management/Counter";
import { StateCounter } from "./components/state-management/StateCounter";
import { 
  Component, 
  Code, 
  FileText, 
  MousePointer, 
  Hash, 
  Phone, 
  Calculator,
  Atom
} from "lucide-react";

export default function App() {

  return (
    <>
    <div className="app-layout">
       <aside className="sidebar">
           <h2 className="logo"><Atom size={20} /> React Basics</h2>

            <nav className="nav">
              <Link to="/functional-component"><Component size={16} /> Functional Component</Link>
              <Link to="/class-component"><Component size={16} /> Class Component</Link>
              <Link to="/jsx-version"><Code size={16} /> With JSX</Link>
              <Link to="/without-jsx"><FileText size={16} /> Without JSX</Link>
              <Link to="/fragment"><Code size={16} /> Fragment</Link>
              <Link to="/props"><Hash size={16} /> Props</Link>
              <Link to="/event-handling"><MousePointer size={16} /> Event Handling</Link>
              <Link to="/event-objects"><MousePointer size={16} /> Event Objects</Link>
              <Link to="/event-handler-props"><MousePointer size={16} /> Event Handler Props</Link>
              <Link to="/event-contact"><Phone size={16} /> Event Contact</Link>

              <hr />

              <Link to="/counter"><Calculator size={16} /> Counter</Link>
              <Link to="/state-counter"><Calculator size={16} /> State Counter</Link>
            </nav>
        </aside>

        <main className="main-content">
          <Routes>
            <Route path="/functional-component" element={<FunctionalComponent name="Good Morning" />} />
            <Route path="/class-component" element={<Welcome />} />
            <Route path="/jsx-version" element={<WithJsx />} />
            <Route path="/without-jsx" element={<WithoutJsx />} />
            <Route path="/fragment" element={<Fragment />} />
            <Route path="/props" element={<Child header="Props" title="Parent Component" subTitle="Child Component" />} />
            <Route path="/event-handling" element={<ClickEvent />} />
            <Route path="/event-objects" element={<EventObjects />} />
            <Route path="/event-handler-props" element={<EventHandlerProps text="Hit" />} />
            <Route path="/event-contact" element={<EventContact />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/state-counter" element={<StateCounter />} />
          </Routes>
        </main> 
      </div>
      </>
  );
}

// npm install react-router-dom - installing react router