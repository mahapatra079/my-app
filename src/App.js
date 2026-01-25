import { Routes, Route, Link } from "react-router-dom";
import FunctionalComponent from "./components/function-class/Greet";
import Welcome from "./components/function-class/Welcome";
import WithJsx from "./components/jsx/WithJsx";
import { WithoutJsx } from "./components/jsx/WithoutJsx";
import Fragment from "./components/jsx/Fragment";
import Child from "./components/props/Child";


export default function App() {
  const userName = "Prop Drilling - PC → MC → GC";

  return (
    <>
    <div className="container">
      <div className="content">
        <div className="nav-container">
          <nav>
            <Link to="/functional-component">Functional Component</Link>|{""}
            <Link to="/class-component">Class Component</Link>|{""}
            <Link to="/jsx-version">WithJsx</Link>|{""}
            <Link to="/without-jsx">WithoutJsx</Link>|{""}
            <Link to="/fragment">Fragment</Link>|{""}
            <Link to="/props">Props</Link> |{" "}
          </nav>
        </div>
        {/* <div className="nav-container nav-secondary">
          <nav className="nav-2">
           
          </nav>
        </div> */}
      </div>
      
      <Routes>
        <Route path="/functional-component" element={<FunctionalComponent name="Good Morning" />} />
        <Route path="/class-component" element={<Welcome />} />
        <Route path="/class-component" element={<Welcome />} />
        <Route path="/jsx-version" element={<WithJsx/>} />
        <Route path="/without-jsx" element={<WithoutJsx/>} />
        <Route path="/fragment" element={<Fragment/>} />
        <Route path="/props" element={<Child header="Props" title="Parent Component" subTitle="Child Component"/>} />     
        {/* Props Drilling - passing data from parent to multiple child */}
        
      </Routes>
      </div>
      </>
  );
}

// npm install react-router-dom - installing react router