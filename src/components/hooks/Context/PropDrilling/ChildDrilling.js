function ChildDrilling({ name }) {
  return (
    <div className="border-2 border-orange-400 rounded-lg p-3 mt-2 bg-orange-50">
      <h3 className="font-bold text-orange-600">Child - receives & passes name prop ↓</h3>
      <p className="text-sm text-gray-500 border-2 border-gray-300 p-2 mt-2">name: {name}</p>
    </div>
  );
}   
export default ChildDrilling;