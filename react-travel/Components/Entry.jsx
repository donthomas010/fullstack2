export default function Entry(props){
    console.log(props)
    return(
        <article className="journey-entry">
            <img className="main-img" src = {props.img} alt= {props.alt} />
            <div>
                <span>{props.country}</span>
                <a href="">View google</a>
                <h2>{props.location}</h2>
                <p>{props.date}</p>
                <p>Helojfbvkjdfhbvjfshvjsfbvkjsdbvjcsbvujbsfvudfsuib</p>
            </div>
        </article>
    )
}