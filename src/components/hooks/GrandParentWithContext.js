import { ParentWithContext } from './ParentWithContext';

export const GrandParentWithContext = ({ UserContext }) => (
  <div style={{ border: '2px solid green', padding: '10px', margin: '5px' }}>
    <h4>GrandParent</h4>
    <ParentWithContext UserContext={UserContext} />
  </div>
);