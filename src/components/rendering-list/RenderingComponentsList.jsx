
export const RenderingComponentsList = ({ product }) => {
    return (
        <>
            <div className="card">
                <p>{product.name} - { product.price}</p>                
            </div>
        </>  
    );
}