import React from "react";
import Pads from "./Pads";
import padData from "./pad"

export default function Parentpad(props){

    const [pads, setPads] = React.useState(padData)

    const styles = {
        backgroundColor: props.darkMode ? "#222222" : "#cccccc",
        width: "50px",
        height: "20px"
    }

    const buttonElement = pads.map(pad =>{
        return <Pads key= {pad.id} color={pad.color} on={pad.on}/>
    })
    return(<main>
        {buttonElement}
    </main>)
} 