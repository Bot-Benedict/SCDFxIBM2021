import React from 'react';
export default function StatisticsDisplay(props: {numIncidents: number}){
    return(
        <div className="ui unstackable steps" style={{margin:"20px 70px 20px 70px", paddingTop:"0px", width:"90%", height:"100px"}}>
            <div className="active step">
                <i className="chart line icon"></i>
                <div className="content" style={{textAlign:"center", fontSize:"22px"}}>
                    <div className="title" style={{paddingBottom:"15px"}}>Emergencies This Month</div>
                    <div className="description" style={{fontWeight:"bold"}}>{props.numIncidents}</div>
                </div>
            </div>
            <div className="active step">
                <i className="bed icon"></i>
                <div className="content" style={{textAlign:"center", fontSize:"22px"}}>
                    <div className="title" style={{paddingBottom:"15px"}}>Common Emergency</div>
                    <div className="description" style={{fontWeight:"bold"}}>Fire</div>
                </div>
            </div>
            <div className="active step">
                <i className="hourglass outline icon"></i>
                <div className="content" style={{textAlign:"center", fontSize:"22px"}}>
                    <div className="title" style={{paddingBottom:"15px"}}>Average Response Time</div>
                    <div className="description" style={{fontWeight:"bold"}}>7 Minute 43 Seconds</div>
                </div>
            </div>
            </div>

    );
}

{/* <div className="ui three column grid" style={{margin:"0px 70px 0px 70px", paddingTop:"70px"}}>
    <div className="column">
        <div className="ui fluid card">
            <div className="content" style={{textAlign:"center"}}>
                <h1 >Number of Emergencies</h1>
                <h1 style={{color:"grey"}}>4</h1>
            </div>
        </div>
    </div>
    <div className="column">
        <div className="ui fluid card">
        <div className="content" style={{textAlign:"center"}}>
                <h1>Most Common Emergency</h1>
                <h1 style={{color:"grey"}}>Fire</h1>

            </div>
        </div>
    </div>
    <div className="column">
        <div className="ui fluid card">
            <div className="content" style={{textAlign:"center"}}>
                    <h1>Most Common Emergency</h1>
            </div>
        </div>
    </div>
</div> */}