import ResuableCounterHOC from "../ResuableCounterHOC";


function HoverCounter2(props) {
    const { count, incrmentCount } = props;
    console.log("Enhanced New HoverCounter2", props);
    // we can also use props.count and props.incrmentCount instead of destructuring the props
    return (
        <>
            <div className="card border-2 border-gray-300">
                <p>Count: {count}</p>  
                <button className="addBtn" onMouseOver={incrmentCount}>
                    Hover
                </button>
            </div>
        </>
    );
}
export default ResuableCounterHOC(HoverCounter2);