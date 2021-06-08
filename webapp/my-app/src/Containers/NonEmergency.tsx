import React from 'react';
import AppHeader from '../Components/Header';
import CSS from 'csstype';

export default function NonEmergency(){
    return(
        <div style={mainComponentStyle}>
            <AppHeader />
            
        </div>
    );
}

const mainComponentStyle: CSS.Properties = {
    backgroundColor: "#b3eb9b", 
    minHeight: "100vh"
};