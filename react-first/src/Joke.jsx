import React from "react"


export default function Joke(props){

    const [isShown, setIsShown] = React.useState(false)

    function toggleShown(){
        setIsShown(prevShown => !prevShown)
    }
    //console.log(props)
    console.log(isShown)
    return(<>
            {isShown && <h1>Inside Joke {props.setup} {props.punch} {props.count}</h1>}
            <button onClick={toggleShown}>Show Punchline</button>
            </>
        )
}