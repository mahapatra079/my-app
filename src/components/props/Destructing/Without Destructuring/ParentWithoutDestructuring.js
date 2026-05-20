import ChildWithoutDestructuringProp from "./ChildWithoutDestructuringProp";

function ParentWithoutDestructuring() {
    return (
        <div>
            <h2 className="font-bold text-lg">Without Destructuring Props</h2>
            <ChildWithoutDestructuringProp name="John Doe" email="john.doe@example.com" />
        </div>
    );
}

export default ParentWithoutDestructuring;