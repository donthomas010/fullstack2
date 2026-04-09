import React from "react"

export default function Content(){

    const [ingredients, setIngredients]= React.useState([])
    const addIngredient = ingredients.map((ingredient) =>{
        return <li key={ingredient}>{ingredient}</li>
    })

    function addNew(formData){
 
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredient => [...prevIngredient, newIngredient])
    }


    const [recipeShown, setRecipeShown] = React.useState(false)
    function GetRecipe(){
        setRecipeShown(prevRecipe => !prevRecipe)
    }

    return(
        <main>
            <form action={addNew} className="add-ingredient-form">
                <input type="text" placeholder="Oregano" name="ingredient"/>
                <button type="submit"> Add ingredient</button>
            </form>
            {
                addIngredient.length > 0 && 
                <section>
                    <h1>Ingredients are </h1>
                    <ul>
                        {addIngredient}
                    </ul>
                    {
                        addIngredient.length > 2 && 
                        <div>
                        <button onClick={GetRecipe}>Get a Recipe</button>
                        {
                            recipeShown &&
                            <p>New recipe with ingredient</p>}
                    </div>}
                </section>}
        </main>
    )
}

