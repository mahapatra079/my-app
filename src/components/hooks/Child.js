export const Child = ({ user, setUser }) => (
  <div style={{ border: '2px solid blue', padding: '10px', margin: '5px' }}>
    <h4>Child</h4>
    <p>User: {user.name} ({user.role})</p>
    <button 
      onClick={() => setUser({ name: 'Jane Smith', role: 'User' })} 
      className="addBtn"
    >
      Change User
    </button>
  </div>
);