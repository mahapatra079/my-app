import ResuableCounterHOC from "../ResuableCounterHOC";

function ClickCounter2(props) {

    const { count, incrmentCount } = props;
    console.log("Enhanced New ClickCounter2", props);
    // we can also use props.count and props.incrmentCount instead of destructuring the props

    return (
        <>
            <div className="card border-4 border-gray-300">
                <p>Count: {count}</p>  
                <button className="addBtn" onClick={incrmentCount}>click</button>
            </div>
        </>
    );
}
export default ResuableCounterHOC(ClickCounter2);