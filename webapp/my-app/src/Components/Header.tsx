import React from 'react';
import logo from './../assets/SCDF.png';
export default function Header(){
    return(
        <div style={{display:"flex", flexDirection:"row", justifyContent:"center", paddingTop:"10px"}}>
            <img src={logo} alt="logo" style={{width:"100px", height:"100px"}}/>
            <h1 style={{textAlign:"center", fontSize:"40px", fontWeight:"bold"}}>EMERGENCY RESPONSE SYSTEM</h1>
        </div>
    );
}