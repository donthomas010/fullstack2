
import Joke from "./Joke"
import JokeData from "./JokeData";

export default function App(){
    
    console.log(JokeData)

    const jokeElements = JokeData.map((joke) =>{
        return <Joke setup = {joke.setup} punch = {joke.punch} />
    })

    return(<>
            <Joke setup = "Joke 1" punch = "Punch 1" count = {3}/>
            <Joke setup = "Joke 2" punch = "Punch 2" count = {6}/>
            <Joke setup = "Joke 3" punch = "Punch 3" count = {8}/>
            {jokeElements}
        </>)
}