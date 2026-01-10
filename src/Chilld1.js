import GrandChild from "./GrandChild";

function Child1({ userName }) {
  return (
    <div>
      <h3>Child Componen - does NOT use the prop</h3>
      <GrandChild userName={userName} />
    </div>
  );
}

export default Child1;
