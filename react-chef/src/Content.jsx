import React from "react"

export default function Content(){

    const [ingredients, setIngredients]= React.useState(['chicken', 'oregano', 'Tomato'])
    const addIngredient = ingredients.map((ingredient) =>{
        return <li key={ingredient}>{ingredient}</li>
    })

    function addNew(formData){
 
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredient => [...prevIngredient, newIngredient])
    }

    //Testing
    // const [result, func]  = React.useState("Hello")
    // console.log(result, func)

    // //Counter addition & Substraction
    // const [count, setCount] = React.useState(5)
    // function add(){
    //     setCount(prevCount => prevCount + 2)
    // }

    // function minus(){
    //     setCount(prevCount => prevCount - 2)
    // }

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
    return(
        <main>
            <form action={addNew} className="add-ingredient-form">
                <input type="text" placeholder="Oregano" name="ingredient"/>
                <button type="submit"> Add ingredient</button>
            </form>

            <ul>
                {addIngredient}
            </ul>
            {/* 
            <div>
            <button onClick={handleClick}> {result}</button>
                <button onClick={minus}>-</button>
                <h2>{count}</h2>
                <button onClick={add}>+</button>
                <button className="value" onClick={clickState}>{isGoing ? "Yex" : "No"}</button>
                <div>
                    {thingsElement}
                </div>
                <button onClick={addthings}>Add</button>
            </div> */}
        </main>
    )
}

