import ClickCounter2 from "./NewCounterHOC/ClickCounter2";
import HoverCounter2 from "./NewCounterHOC/HoverCounter2";
import ClickCounter from "./OldCounterHOC/ClickCounter";
import HoverCounter from "./OldCounterHOC/HoverCounter";

function HOC() {
    return (
        <>
            <div className="card border-8 border-gray-300">
                <h2 className="font-medium">Higher Order Component (HOC) Example</h2>
                <div id="hoc" className="card">
                    <p className="font-semibold">Old Hoc Component</p>
                    <ClickCounter />
                    <HoverCounter />
                </div>
                <p className="flex items-center justify-center font-bold">VS</p>
                <div id="Enhancedhoc" className="card">
                    <p className="font-semibold">Resusable Logic wraps up with Hoc</p>
                    <ClickCounter2 />
                    <HoverCounter2 />
                </div>
            </div>
        </>
    );
}

export default HOC;