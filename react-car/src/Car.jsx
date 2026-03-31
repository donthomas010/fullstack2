export default function Car(props){
    return(<article>
        <h1>Car : {props.name}</h1>
        <h1>Color: {props.color}</h1>
        <h2>Image : {props.img}</h2>
    </article>)
}