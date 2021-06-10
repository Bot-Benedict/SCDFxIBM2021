import React from 'react';
import logo from './../assets/SCDF.png';
import CSS from 'csstype';
import logos from './../assets/logo.png';
export default function Header(){
    return(
        <div style={{display:"flex", flexDirection:"row", justifyContent:"center", paddingTop:"10px"}}>
            
            <img src={logo} alt="logo" style={{width:"105px", height:"105px", marginRight:"15px"}}/>
            <div>
                <h1 style={{textAlign:"center", fontSize:"40px", fontWeight:"bold"}}>EMERGENCY RESPONSE SYSTEM</h1>
                <div style={{textAlign:"center", fontSize:"20px", fontWeight:"bold"}}>TUAS VIEW FIRE STATION</div>
            </div>
            <img src={logos} alt="logo" style={{ height:"105px"}}/>

        </div>
    );
}

const mainContainerStyle: CSS.Properties = {
    paddingLeft: "40px",
    paddingRight: "40px",
    paddingTop: "40px",
    width: "100%"
}

const flexContainerStyle: CSS.Properties = {
    display: "inline-flex", 
    flexDirection: "row", 
    justifyContent: "space-between",  
    width: "100%",
    height: "80px"
};

const titleFontStyle: CSS.Properties = {
    fontWeight: "bold", 
    fontSize: "50px",
};

const locationFontStyle: CSS.Properties = {
    fontWeight: "bold", 
    fontSize: "25px",
    height: "40px",
    alignSelf: "flex-end"
}