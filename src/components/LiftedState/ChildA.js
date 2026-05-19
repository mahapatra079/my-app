
function ChildA(props) {
  return (
    <input
      type="text"
      value={props.name}
      onChange={(e) => props.setName(e.target.value)}
      placeholder="Enter name"
      className="form-control"
    />
  );
}

export default ChildA;