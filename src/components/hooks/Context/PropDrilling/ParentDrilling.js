import ChildDrilling from "./ChildDrilling";

function ParentDrilling({ name }) {
  return (
    <div className="border-2 border-red-400 rounded-lg p-3 bg-red-50">
      <h3 className="font-bold text-red-600">Parent - passes name prop ↓</h3>
      <div className="mt-2">
        <ChildDrilling name={name} />
      </div>
    </div>
  );  
}   

export default ParentDrilling;