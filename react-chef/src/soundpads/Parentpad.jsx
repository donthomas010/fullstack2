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
        return <Pads key= {pad.id} id = {pad.id} color={pad.color} on={pad.on} toggle = {toggle}/>
    })

    function toggle(id){
        //console.log("clicked", id, pads) 
        setPads(prePad => prePad.map(item =>{
            return item.id === id ? {...item, on : !item.on} : item
        }))   
    }

    // function toggle(id) {
    //     setPads(prevPads =>
    //         prevPads.map(item =>item.id === id ? { ...item, on: !item.on } : item)
    //     );
    // }

    return(<main>
        {buttonElement}
    </main>)
} 