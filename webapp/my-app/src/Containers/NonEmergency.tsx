import React from 'react';
import AppHeader from '../Components/Header';
import CSS from 'csstype';

export default function NonEmergency(){
    return(
        <div style={mainComponentStyle}>
            <AppHeader />
            <div style={centerTextContainerStyle}>
                <p style={centerTextFontStyle}>System is running. No emergency detected so far.</p>
            </div>
        </div>
    );
}

const mainComponentStyle: CSS.Properties = {
    backgroundColor: "#b3eb9b", 
    minHeight: "100vh"
};

const centerTextContainerStyle: CSS.Properties = {
    position: "absolute",
    width: "100%",
    height: "50%",
    top: "50%",
}

const centerTextFontStyle: CSS.Properties = {
    textAlign: "center",
    fontSize: "40px"
}