import { Parent } from './Parent';

export const GrandParent = ({ user, setUser }) => (
  <div style={{ border: '2px solid red', padding: '10px', margin: '5px' }}>
    <h4>GrandParent</h4>
    <Parent user={user} setUser={setUser} />
  </div>
);