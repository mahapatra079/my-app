import { useState } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";

function ParentLiftedState() {
  const [name, setName] = useState("");
    return (
        <>
            <div className="card">
                <h1 className="font-SemiBold mb-2">Lifted State</h1>
                <ChildA name={name} setName={setName} />
                <ChildB name={name} />
            </div>
        </>
    );
}
export default ParentLiftedState;