import Card from "./Card";


function DashboardCard() {
    return (
        <>
            <h2 className="font-bold text-xl">Dashboard</h2>
            <div className="grid grid-cols-3 gap-3 items-center">

               {[...Array(6)].map((_, i) => (
                <Card key={i} className="flex flex-col items-start p-4 flex-wrap">
                    <h2 className="font-bold text-lg">Dashboard Card</h2>
                    <p className="font-semibold text-xs">This is a card component used in the dashboard.</p>
                </Card>
                ))}
            </div>
        </>
    );
}

export default DashboardCard;