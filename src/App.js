import { Routes, Route, Link, useLocation } from "react-router-dom";
import FunctionalComponent from "./components/function-class/Greet";
import Welcome from "./components/function-class/Welcome";
import WithJsx from "./components/jsx/WithJsx";
import { WithoutJsx } from "./components/jsx/WithoutJsx";
import Fragment from "./components/jsx/Fragment";
import Child from "./components/props/Child";
import ClickEvent from "./components/event-handling/ClickEvent";
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
  Atom,
  Layers,
  GitBranch
} from "lucide-react";

export default function App() {
  const location = useLocation();
  const isAdvanced = location.pathname.startsWith("/advanced");

  const Logo = () => (
    <h2 className="logo">
      <Atom size={40} />
    </h2>
  );

  return (
    <div className="app-layout">

      {/* SIDEBAR */}
      <aside className="sidebar">

        {/* ===== BASIC SIDEBAR ===== */}
        {!isAdvanced && (
          <>
            <Logo />

            <nav className="nav">
              <Link to="/functional-component"><Component size={16} /> Functional Component</Link>
              <Link to="/class-component"><Component size={16} /> Class Component</Link>
              <hr/>
              <Link to="/jsx-version"><Code size={16} /> With JSX</Link>
              <Link to="/without-jsx"><FileText size={16} /> Without JSX</Link>
              <Link to="/fragment"><Code size={16} /> Fragment</Link>
              <Link to="/props"><Hash size={16} /> Props</Link>

              <hr />
              
              <Link to="/event-handling"><MousePointer size={16} /> Event Handling</Link>
              <Link to="/event-objects"><MousePointer size={16} /> Event Objects</Link>
              <Link to="/event-handler-props"><MousePointer size={16} /> Event Handler Props</Link>
              <Link to="/event-contact"><Phone size={16} /> Event Contact</Link>

              <hr />

              <Link to="/counter"><Calculator size={16} /> Counter</Link>
              <Link to="/state-counter"><Calculator size={16} /> State Counter</Link>

              <hr />

              <Link to="/advanced">Advanced Topics →</Link>
            </nav>
          </>
        )}

        {/* ===== ADVANCED SIDEBAR ===== */}
        {isAdvanced && (
          <>
            <Logo />

            <nav className="nav">
              <Link to="/advanced/hooks"><Code size={16} /> Hooks</Link>
              <Link to="/advanced/context"><Layers size={16} /> Context API</Link>
              <Link to="/advanced/routing"><GitBranch size={16} /> Routing</Link>

              <hr />

              <Link to="/functional-component">← Back to Basics</Link>
            </nav>
          </>
        )}

      </aside>

      {/* MAIN CONTENT */}
      <main className="main-content">
        <Routes>
          {/* BASIC ROUTES */}
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

          {/* ADVANCED ROUTES */}
          <Route path="/advanced" element={<h2>Select an Advanced Topic</h2>} />
          <Route path="/advanced/hooks" element={<h2>Advanced Hooks</h2>} />
          <Route path="/advanced/context" element={<h2>Context API Deep Dive</h2>} />
          <Route path="/advanced/routing" element={<h2>Advanced Routing</h2>} />
        </Routes>
      </main>

    </div>
  );
}
