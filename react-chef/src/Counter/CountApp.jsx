import React from "react";
import Count from "./Count";

export default function CountApp(){


    // //Testing
    // const [result, func]  = React.useState("Hello")
    // console.log(result, func)

    //Counter addition & Substraction
    const [count, setCount] = React.useState(5)
    function add(){
        setCount(prevCount => prevCount + 2)
    }

    function minus(){
        setCount(prevCount => prevCount - 2)
    }

    // //Set state yes, No
    // const [isGoing, setIsGoing] = React.useState(true)

    // function clickState(){
    //     setIsGoing(prevIsGoing => !prevIsGoing )
    // }

    // //Complex arrays
    // const [myThings, setMyThings] = React.useState(["aaaa","fdfdef"]);
    // const allThings = ["11", "qq", "44", "vdgfd"];
    // const thingsElement = myThings.map(thing =>  <p key={thing}>{thing}</p>)

    // function addthings(){
    //     setMyThings(prevMyThings => [...prevMyThings, allThings[myThings.length]])
    //     console.log(myThings.length)
    // }

    return(<main>
            <div>
                {/* <button onClick={handleClick}> {result}</button> */}
                <button onClick={minus}>-</button>
                <Count number= {count}/>
                <button onClick={add}>+</button>
                {/* <button className="value" onClick={clickState}>{isGoing ? "Yex" : "No"}</button>
                <div>
                    {thingsElement}
                </div>
                <button onClick={addthings}>Add</button> */}
            </div>
    </main>)
}