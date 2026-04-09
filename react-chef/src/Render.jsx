
import React from "react"

export default function Render(){

    const [messages, setMessage] = React.useState(["1", "2"])
    
    const displayText =  messages.length == 0 ? "all caught up" :  messages.length == 1 ? "1 message" : "2 and more"
    return(
        <div>
            {
                <h1>{displayText}</h1>
            }
        </div>
    )
}