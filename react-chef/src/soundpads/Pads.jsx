import React from "react";
export default function Pads(props){

    const opacityValue = props.on ? "1" : "0.1";

    return(<button 
        style={{backgroundColor: props.color, width: "50px", height: "30px", opacity: opacityValue}}
        onClick={() => props.toggle(props.id)}
        ></button>)
}