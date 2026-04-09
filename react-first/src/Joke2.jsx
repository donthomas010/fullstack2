import React from "react"


export default function Joke2(props){

    //const [isShown, setIsShown] = React.useState(false)
    let isShown2 = false

    function toggleShown(){
        isShown2 = true
    }
    //console.log(props)
    console.log(isShown2)
    const buttonText = isShown2 ? "Hide" : "Show";
    return(<>
            {isShown2 && <h1>Inside Joke </h1>}
            <button onClick={toggleShown}>{buttonText}</button>
            </>
        )
}