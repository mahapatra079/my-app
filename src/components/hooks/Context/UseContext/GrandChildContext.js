import { useContext } from "react";
import { UserContext } from "./UseContextExample";

function GrandChildContext() {
  
  // useContext allows us to consume the context value directly
  const user = useContext(UserContext);
  
  return (
    <div className="border-2 border-blue-400 rounded-lg p-3 mt-2 bg-blue-50">
      <h3 className="font-bold text-blue-600">GrandChild - consumes context directly</h3>
      <p className="text-sm text-gray-500 border-2 border-gray-300 p-2 mt-20">user: {user}</p>
    </div>
  );
}

export default GrandChildContext;