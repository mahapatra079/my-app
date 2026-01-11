import { useState } from "react";
import LifeCycle from "./Lifecycle";

function LifeCyclePage() {
  const [show, setShow] = useState(true);

  return (
    <div className="life-cycle">
      <h4>LifeCycle Phase - Mount → Update → Unmount</h4>

      <button onClick={() => setShow(prev => !prev)}>
        Toggle Component
      </button>

      {show && <LifeCycle />}
    </div>
  );
}

export default LifeCyclePage;
