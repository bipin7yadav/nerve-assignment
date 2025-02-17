import React,{useState} from "react";

export default function Cards ({selectedViewStrategies,view, selectedDate}) { 
    console.log("selected :",selectedViewStrategies);

    let [state,setState]=useState(false)
    let [tab,selectedTab]=useState(null)
    let uniqueData = selectedViewStrategies.reduce((acc,cur)=>{
        if(!acc.includes(cur)){
            acc.push(cur)
        }
        return acc
    },[])

    const handleClick=(strategy)=>{
        console.log("clicked",strategy)
        selectedTab(strategy)
        setState(true)

        setTimeout(()=>{
            // prompt(`${strategy} clicked`)
            setState(false)
            selectedTab(null)
        },3000)
    }

     
    
    return (
        <div className="cards">
            {uniqueData.length>0 && <div>Total Results :{uniqueData.length}</div>}
        {uniqueData.length > 0 ? (
            
            uniqueData.map((strategy, index) => {
            const count = selectedViewStrategies.filter((item) => item === strategy).length;
            return (
                <div key={index} onClick={()=>handleClick(strategy)} className="card">
                  {state &&
                   <div style={{position:"fixed",width:"500px",height:"500px",position:"fixed",top:"50%",left:"50%",margin:"auto"}}>{tab} clicked</div>
                   }
                  <h3>{strategy}</h3>
                  <p>{count} {count > 1 ? "Strategies" : "Strategy"}</p>
                </div>
              );
            })
            
        ) : (
            <div className="not-found">
                <p>{view}</p>
                {/* <h2>{selectedDate.split("-").join(" ")}</h2> */}
            </div>
            
        )}
        </div>
    );
}