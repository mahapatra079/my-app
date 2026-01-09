function ChildComponent ({name, age}){
    return(
        <div className="child-data">
            <h4 className="title">Child Component</h4>
            <span> Name : {name}</span>      
            <span className="d-block"> Age  : {age}</span>
        </div>
        
    )
}
export default ChildComponent

