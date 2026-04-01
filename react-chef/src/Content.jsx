import React from "react"

export default function Content(){

    const ingredients = ['chicken', 'oregano', 'Tomato']
    const addIngredient = ingredients.map((ingredient) =>{
        return <li key={ingredient}>{ingredient}</li>
    })

    function handleSubmit(event){
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        ingredients.push(newIngredient)
        console.log(ingredients)
    }

    const [result, func]  = React.useState("Hello")
    console.log(result, func)

    function handleClick(){
        func("Definitely")
    }

    const [count, setCount] = React.useState(10)

    function add(){
        setCount(count+1)
    }


    function minus(){
        setCount(count-1)
    }

    return(
        <main>
            <form onSubmit={handleSubmit} className="add-ingredient-form">
                <input type="text" placeholder="Oregano" name="ingredient"/>
                <button type="submit"> Add ingredient</button>
                <button onClick={handleClick}> {result}</button>
            </form>
            <ul>
                {addIngredient}
            </ul>
            <div>
                <button onClick={minus}>-</button>
                <h2>{count}</h2>
                <button onClick={add}>+</button>
            </div>
        </main>
    )
}

