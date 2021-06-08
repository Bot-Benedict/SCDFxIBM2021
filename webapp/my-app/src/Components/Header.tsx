import React from 'react';
import { Divider } from 'semantic-ui-react'
import CSS from 'csstype';


const title = "Emergency Detection System";
const locationName = "Tuas";

export default function AppHeader(){
    return(
        <div style={mainContainerStyle}>           
            <div style={flexContainerStyle}>
                <p style={titleFontStyle}>{title}</p>
                <p style={locationFontStyle}>{locationName} 📍</p>           
            </div>
            <Divider />
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