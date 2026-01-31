import { ChildWithContext } from './ChildWithContext';

export const ParentWithContext = ({ UserContext }) => (
  <div style={{ border: '2px solid teal', padding: '10px', margin: '5px' }}>
    <h4>Parent</h4>
    <ChildWithContext UserContext={UserContext} />
  </div>
);