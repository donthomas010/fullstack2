export default function Star(Props){


    return(<p className="favourite" onClick={Props.handleClick}> favour: {Props.starStatus}</p>)
}