import { Child } from './Child';

export const Parent = ({ user, setUser }) => (
  <div style={{ border: '2px solid orange', padding: '10px', margin: '5px' }}>
    <h4>Parent</h4>
    <Child user={user} setUser={setUser} />
  </div>
);