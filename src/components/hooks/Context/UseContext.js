import ParentDrilling from "./PropDrilling/ParentDrilling";
import UseContextExample from "./UseContext/UseContextExample";

function UseContext () {
  return (
    <div className="card border-4 border-gray-300 rounded-lg p-4">
      <h2 className="text-center text-xl font-bold mb-4">Prop Drilling vs useContext</h2>
      <div className="flex flex-col gap-4">
        <div className="flex-1">
          <h3 className="text-center font-bold text-lg text-red-500 mb-2">Prop Drilling</h3>
          <ParentDrilling name="Amit" />
        </div>
        <div className="flex items-center justify-center font-bold text-xl">VS</div>
        <div className="flex-1">
          <h3 className="text-center font-bold text-lg text-green-500 mb-2">useContext</h3>
          <UseContextExample />
        </div>
      </div>
    </div>
  );
}
export default UseContext;