export default function Joke(props){
    console.log(props)
    return(
            <h1>Inside Joke {props.setup} {props.punch} {props.count}</h1>
        )
}