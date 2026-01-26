
export const Button = ({text,onClick}) =>{
    return(
        <>
            <button type="button" className="addBtn" onClick={onClick}>{text}</button>
        </>
    )
}

// Reusable Component 