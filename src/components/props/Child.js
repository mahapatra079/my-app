
function Child({header,title,subTitle}){
    // Destructuring is a JavaScript syntax that lets you extract values from arrays or objects into variables in one line.
    console.log(header,title,subTitle)
    return (
        <>
          <div className="card">
             <h2 className="font-medium text-xl">Props</h2>
             <p className="text-lg text-gray-500 border-2 border-gray-300 p-2 mt-20">{header} - data flow from {title} to {subTitle}</p>
         </div>
        </>
    )
}

export default Child;