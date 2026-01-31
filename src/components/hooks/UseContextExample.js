import { createContext, useState } from 'react';
import { GrandParent as PropDrilling } from './PropDrillingComponents';
import { GrandParentWithContext } from './ContextComponents';

// Create Context
const UserContext = createContext();

// Prop Drilling Example (Without Context)
const PropDrillingExample = () => {
  const [user, setUser] = useState({ name: 'John Doe', role: 'Admin' });

  return (
    <div className="card" style={{ marginBottom: '20px' }}>
      <h3>❌ Prop Drilling (Without Context)</h3>
      <PropDrilling user={user} setUser={setUser} />
    </div>
  );
};

// Context Example (With useContext)
const ContextExample = () => {
  const [user, setUser] = useState({ name: 'Alice Johnson', role: 'Manager' });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="card">
        <h3>✅ Context API (With useContext)</h3>
        <GrandParentWithContext UserContext={UserContext} />
      </div>
    </UserContext.Provider>
  );
};

const UseContextExample = () => {
  return (
    <div>
      <h2>useContext Hook Example</h2>
      <PropDrillingExample />
      <ContextExample />
      <div className="card">
        <h3>Key Differences:</h3>
        <ul>
          <li><strong>Prop Drilling:</strong> Props passed through every component</li>
          <li><strong>Context:</strong> Direct access to data without prop passing</li>
          <li><strong>useContext:</strong> Cleaner code, less boilerplate</li>
        </ul>
      </div>
    </div>
  );
};

export default UseContextExample;