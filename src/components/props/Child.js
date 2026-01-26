
function Child({header,title,subTitle}){
    // Destructuring is a JavaScript syntax that lets you extract values from arrays or objects into variables in one line.
    console.log(header,title,subTitle)
    return (
        <>
            <h4 className="textCenter">{header} - data flow from {title} to {subTitle}</h4>
        </>
    )
}

export default Child;