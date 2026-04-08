
import Card from "./Card"

function InfoCard() {
    return (
        <>
           <h2 className="font-bold text-lg">Info Details</h2>
            <div className="grid grid-cols-3 gap-2">
                <Card>
                    <div className="flex flex-col gap-2">
                        <h2 className="font-bold text-lg">Information</h2>
                        <p className="font-semibold text-xs">This is an information card.</p>
                    </div> 
                </Card>
                 <Card>
                    <div className="flex flex-col gap-2">
                        <h2 className="font-bold text-lg">Information</h2>
                        <p className="font-semibold text-xs">This is an information card.</p>
                    </div> 
                </Card>
                 <Card>
                    <div className="flex flex-col gap-2">
                        <h2 className="font-bold text-lg">Information</h2>
                        <p className="font-semibold text-xs">This is an information card.</p>
                    </div> 
                </Card>
            </div>
        </>
    );
}

export default InfoCard;