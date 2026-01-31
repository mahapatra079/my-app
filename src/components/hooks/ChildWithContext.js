import { useContext } from 'react';

export const ChildWithContext = ({ UserContext }) => {
  const { user, setUser } = useContext(UserContext);
  
  return (
    <div style={{ border: '2px solid purple', padding: '10px', margin: '5px' }}>
      <h4>Child</h4>
      <p>User: {user.name} ({user.role})</p>
      <button 
        onClick={() => setUser({ name: 'Bob Wilson', role: 'Developer' })} 
        className="addBtn"
      >
        Change User
      </button>
    </div>
  );
};