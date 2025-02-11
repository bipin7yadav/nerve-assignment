export default function Cards ({selectedViewStrategies, selectedDate}) {  
    
    return (
        <div className="cards">
        {selectedViewStrategies.length > 0 ? (
            selectedViewStrategies.map((strategy, index) => {
            const count = selectedViewStrategies.filter((item) => item === strategy).length;
            return (
                <div key={index} className="card">
                  <h3>{strategy}</h3>
                  <p>{count} {count > 1 ? "Strategies" : "Strategy"}</p>
                </div>
              );
            })
        ) : (
            <div className="not-found">
                <p>There are no strategies for </p>
                <h2>{selectedDate.split("-").join(" ")}</h2>
            </div>
        )}
        </div>
    );
}