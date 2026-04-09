
export default function Pads(props){

    const opacityValue = props.on ? "1" : "0.1";

    console.log(opacityValue );
    return(<button 
        style={{backgroundColor: props.color, width: "50px", height: "30px", opacity: opacityValue}}></button>)
}