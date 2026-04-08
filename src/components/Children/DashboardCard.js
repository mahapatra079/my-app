import Card from "./Card";
import InfoCard from "./InfoCard";

function DashboardCard() {
    return (
        <>
            <h2 className="font-bold text-xl">Dashboard</h2>
            <div className="grid grid-cols-3 gap-3 items-center">

                {[...Array(6)].map((_, i) => ( 

                //Since this is a static list, index is fine. But for dynamic data, I would use a unique id.
                
                <Card key={i} className ="flex flex-col gap-2 flex-wrap">
                    <h2 className="font-bold text-lg">Dashboard Card</h2>
                    <p className="font-semibold text-xs break-words">This is a card component used in the dashboard.</p>
                </Card>
                ))}
            </div>
            <InfoCard/>
        </>
    );
}

export default DashboardCard;

// What’s happening here?
    // Card is a wrapper component
    // Each <Card>...</Card> passes different UI as children
    // Inside Card, {children} renders that content


