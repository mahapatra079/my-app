import { Routes, Route, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Provider } from "react-redux";
import store from "./store";
import FunctionalComponent from "./components/function-class/FuncationalComponment";
import Welcome from "./components/function-class/ClassComponent";
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
import { LifeCycle } from "./components/lifeCycle-methods/LifeCycle";
import AddContacts from "./components/redux/phone-book/add-contacts";
import UseStateExample from "./components/hooks/StateManagement/UseStateExample";
import UseReducerExample from "./components/hooks/StateManagement/UseReducerExample";
import UseRefExample from "./components/hooks/UseRef/UseRefExample";
import UseEffectExample from "./components/hooks/SideEffects/UseEffectExample";
import { UseLayoutEffectExample } from "./components/hooks/SideEffects/UseLayoutEffectExample";
import {UseMemoExample} from "./components/hooks/Memoization/Memo/UseMemoExample";
import {ReactMemo} from "./components/hooks/Memoization/ReactMemo/ReactMemo";
import UseCallbackExample from "./components/hooks/Memoization/UseCallbackMemo/UseCallbackExample";
import UseContext from "./components/hooks/Context/UseContext";
import CustomHooks from "./components/custom-hooks/CustomHooks";
import Calculator from "./components/state-management/features/Calculator";
import ToDoList from "./components/state-management/features/ToDoList";
import TabSelection from "./components/state-management/features/TabSelection";
import TablesListUsers from "./components/state-management/features/TablesListUsers";
import ControlledComponent from "./components/forms/ControlledComponent";
import UncontrolledComponent from "./components/forms/UncontrolledComponent";
import AuthPage from "./components/conditional-rendering/AuthPage";
import ApiTable from "./components/api/ApiTable";
import ReduxCounter from "./components/redux/features/counterSlice";
import ListProductsFilter from "./components/api/ListProductsFilter";
import HOC from "./components/HOC/HOC";

import { Component, Code, FileText, MousePointer, Hash, Phone, Calculator as CalcIcon, Atom, LifeBuoy, ChevronDown, ChevronRight, } from "lucide-react";

export default function App() {
  const location = useLocation();
  const isAdvanced =
    location.pathname.startsWith("/advanced") ||
    location.pathname.startsWith("/hooks");
  const [hooksOpen, setHooksOpen] = useState(false);
  const [stateOpen, setStateOpen] = useState(false);
  const [reduxOpen, setReduxOpen] = useState(false);
  const [apiOpen, setApiOpen] = useState(false);
  const [formsOpen, setFormsOpen] = useState(false);
  const [customHooksOpen, setCustomHooksOpen] = useState(false);

  const Logo = () => (
    <h2 className="textCenter">
      <Atom size={40} />
    </h2>
  );

  return (
    <Provider store={store}>
      <div className="app-layout">
        {/* SIDEBAR */}
        <aside className="sidebar">
          {/* ===== BASIC SIDEBAR ===== */}
          {!isAdvanced && (
            <>
              <Logo />

              <nav className="nav">
                <Link to="/functional-component">
                  <Component size={16} /> Functional Component
                </Link>
                <Link to="/class-component">
                  <Component size={16} /> Class Component
                </Link>
                <hr />
                <Link to="/jsx-version">
                  <Code size={16} /> With JSX
                </Link>
                <Link to="/without-jsx">
                  <FileText size={16} /> Without JSX
                </Link>
                <Link to="/fragment">
                  <Code size={16} /> Fragment
                </Link>
                <hr />
                <Link to="/props">
                  <Hash size={16} /> Props
                </Link>
                <Link to="/event-handling">
                  <MousePointer size={16} /> Event Handling
                </Link>
                <Link to="/event-objects">
                  <MousePointer size={16} /> Event Objects
                </Link>
                <Link to="/event-handler-props">
                  <MousePointer size={16} /> Event Handler Props
                </Link>
                <Link to="/event-contact">
                  <Phone size={16} /> Event Contact
                </Link>
                <hr />
                <Link to="/counter">
                  <CalcIcon size={16} /> Counter
                </Link>

                <div className="state-management">
                  <button
                    onClick={() => setStateOpen(!stateOpen)}
                    className="dropdown-btn"
                  >
                    {stateOpen ? (
                      <ChevronDown size={16} />
                    ) : (
                      <ChevronRight size={16} />
                    )}
                    <CalcIcon size={16} /> State Management
                  </button>

                  {stateOpen && (
                    <div style={{ marginLeft: "20px", marginTop: "5px" }}>
                      <Link to="/state">
                        <Hash size={14} /> State Examples
                      </Link>
                      <Link to="/state/calculator">
                        <Hash size={14} /> Calculator
                      </Link>
                      <Link to="/state/todo">
                        <Hash size={14} /> ToDo List
                      </Link>
                      <Link to="/state/tabs">
                        <Hash size={14} /> Tab Selection
                      </Link>
                      <Link to="/state/users">
                        <Hash size={14} /> Users Table
                      </Link>
                    </div>
                  )}
                </div>

                <Link to="/life-cycle">
                  <LifeBuoy size={16} /> Life Cycle
                </Link>
                <Link to="/hoc">
                  <Hash size={16} /> HOC
                </Link>
                <Link to="/auth/Dashboard">
                  <Hash size={16} /> Auth Page
                </Link>

                <div className="forms-dropdown">
                  <button
                    onClick={() => setFormsOpen(!formsOpen)}
                    className="dropdown-btn"
                  >
                    {formsOpen ? (
                      <ChevronDown size={16} />
                    ) : (
                      <ChevronRight size={16} />
                    )}
                    <FileText size={16} /> Forms
                  </button>

                  {formsOpen && (
                    <div style={{ marginLeft: "20px", marginTop: "5px" }}>
                      <Link to="/controlled">
                        <Hash size={14} /> Controlled
                      </Link>
                      <Link to="/uncontrolled">
                        <Hash size={14} /> Uncontrolled
                      </Link>
                    </div>
                  )}
                </div>
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
                <div className="hooks-categories">
                  <button
                    onClick={() => setHooksOpen(!hooksOpen)}
                    className="dropdown-btn"
                  >
                    {hooksOpen ? (
                      <ChevronDown size={16} />
                    ) : (
                      <ChevronRight size={16} />
                    )}
                    <Code size={16} /> Hooks
                  </button>

                  {hooksOpen && (
                    <div style={{ marginLeft: "20px", marginTop: "5px" }}>
                      <Link to="/advanced/hooks/useState">
                        <Hash size={14} /> useState
                      </Link>
                      <Link to="/advanced/hooks/useReducer">
                        <Hash size={14} /> useReducer
                      </Link>
                      <Link to="/advanced/hooks/useRef">
                        <Hash size={14} /> useRef
                      </Link>
                      <Link to="/advanced/hooks/useEffect">
                        <Hash size={14} /> useEffect
                      </Link>
                      <Link to="/advanced/hooks/useLayoutEffect">
                        <Hash size={14} /> useLayoutEffect
                      </Link>
                      <Link to="/advanced/hooks/useMemo">
                        <Hash size={14} /> useMemo
                      </Link>
                      <Link to="/advanced/hooks/reactMemo">
                        <Hash size={14} /> React.memo
                      </Link>
                      <Link to="/advanced/hooks/useCallback">
                        <Hash size={14} /> useCallback
                      </Link>
                      <Link to="/advanced/hooks/useContext">
                        <Hash size={14} /> useContext
                      </Link>
                    </div>
                  )}
                </div>

                <div className="custom-hooks-categories">
                  <button
                    onClick={() => setCustomHooksOpen(!customHooksOpen)}
                    className="dropdown-btn"
                  >
                    {customHooksOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                    <Code size={16} /> Custom Hooks
                  </button>

                  {customHooksOpen && (
                    <div style={{ marginLeft: "20px", marginTop: "5px" }}>
                      <Link to="/advanced/custom-hooks">
                        <Hash size={14} /> useFetch
                      </Link>
                    </div>
                  )}
                </div>
                <div className="api-categories">
                  <button
                    onClick={() => setApiOpen(!apiOpen)}
                    className="dropdown-btn"
                  >
                    {apiOpen ? (
                      <ChevronDown size={16} />
                    ) : (
                      <ChevronRight size={16} />
                    )}
                    <Code size={16} /> API
                  </button>

                  {apiOpen && (
                    <div style={{ marginLeft: "20px", marginTop: "5px" }}>
                      <Link to="/advanced/api/list-products">
                        <Hash size={14} /> ListProductsFilter
                      </Link>
                      <Link to="/advanced/api/comments">
                        <Hash size={14} /> ApiTable
                      </Link>
                    </div>
                  )}
                </div>

                <div className="redux-categories">
                  <button
                    onClick={() => setReduxOpen(!reduxOpen)}
                    className="dropdown-btn"
                  >
                    {reduxOpen ? (
                      <ChevronDown size={16} />
                    ) : (
                      <ChevronRight size={16} />
                    )}
                    <Code size={16} /> Redux
                  </button>

                  {reduxOpen && (
                    <div style={{ marginLeft: "20px", marginTop: "5px" }}>
                      <Link to="/advanced/redux">
                        <Hash size={14} /> Phone Book
                      </Link>
                      <Link to="/advanced/redux/counter">
                        <Hash size={14} /> Counter
                      </Link>
                    </div>
                  )}
                </div>
                <hr />
                <Link to="/functional-component">← Back to Basics</Link>
              </nav>
            </>
          )}
        </aside>

        {/* MAIN CONTENT */}
        <main className="main-content">
          <Routes>
            {/* DEFAULT HOME ROUTE */}
            <Route
              path="/"
              element={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <Atom size={200} color="#61dafb" />
                </div>
              }
            />

            {/* BASIC ROUTES */}
            <Route
              path="/functional-component"
              element={<FunctionalComponent name="This is called Functional Component" />}
            />
            <Route path="/class-component" element={<Welcome />} />
            <Route path="/jsx-version" element={<WithJsx />} />
            <Route path="/without-jsx" element={<WithoutJsx />} />
            <Route path="/fragment" element={<Fragment />} />
            <Route
              path="/props"
              element={
                <Child
                  header="Props"
                  title="Parent Component"
                  subTitle="Child Component"
                />
              }
            />
            <Route path="/event-handling" element={<ClickEvent />} />
            <Route path="/event-objects" element={<EventObjects />} />
            <Route
              path="/event-handler-props"
              element={<EventHandlerProps text="Hit" />}
            />
            <Route path="/event-contact" element={<EventContact />} />
            <Route path="/counter" element={<Counter />} />
            {/* STATE MANAGEMENT ROUTES */}
            <Route path="/state" element={<StateCounter />} />
            <Route path="/state/calculator" element={<Calculator />} />
            <Route path="/state/todo" element={<ToDoList />} />
            <Route path="/state/tabs" element={<TabSelection />} />
            <Route path="/state/users" element={<TablesListUsers />} />

            <Route path="/life-cycle" element={<LifeCycle />} />
            <Route path="/hoc" element={<HOC />} />
            <Route path="/auth/*" element={<AuthPage />} />
            <Route path="/controlled" element={<ControlledComponent />} />
            <Route path="/uncontrolled" element={<UncontrolledComponent />} />

            {/* HOOKS ROUTES */}
            <Route path="/advanced/hooks/useState" element={<UseStateExample />} />
            <Route path="/advanced/hooks/useRef" element={<UseRefExample />} />
            <Route path="/advanced/hooks/useContext" element={<UseContext />} />
            <Route path="/advanced/hooks/useReducer" element={<UseReducerExample />} />
            <Route path="/advanced/hooks/useEffect" element={<UseEffectExample />} />
            <Route path="/advanced/hooks/useLayoutEffect" element={<UseLayoutEffectExample />} />
            <Route path="/advanced/hooks/useMemo" element={<UseMemoExample />} />
            <Route path="/advanced/hooks/reactMemo" element={<ReactMemo />} />
            <Route path="/advanced/hooks/useCallback" element={<UseCallbackExample />} />
            <Route path="/advanced/hooks/custom-hooks" element={<CustomHooks />} />
            <Route path="/advanced/custom-hooks" element={<CustomHooks />} />

            {/* API ROUTES */}
            <Route
              path="/advanced/api/list-products"
              element={<ListProductsFilter />}
            />
            <Route path="/advanced/api/comments" element={<ApiTable />} />

            {/* REDUX ROUTES */}
            <Route path="/advanced/redux" element={<AddContacts />} />
            <Route path="/advanced/redux/counter" element={<ReduxCounter />} />

            {/* ADVANCED ROUTES */}
            <Route
              path="/advanced"
              element={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <Atom size={200} color="#61dafb" />
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </Provider>
  );
}
