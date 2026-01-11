import Chilld1 from "./Chilld1";

function Parent({ userName }) {
  return (
    <div className="child-data">
      <h3>Parent Component - does NOT use the prop</h3>
      <Chilld1 userName={userName} />
    </div>
  );
}

export default Parent;
