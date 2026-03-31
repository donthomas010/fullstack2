import Header from "../Components/Header.jsx";
import Entry from "../Components/Entry.jsx";
import data from "./data.js";

export default function App(){

    //Method 1
    // const location = data.map((place) =>{
    //     return (<Entry 
    //         key = {place.id}
    //         img = {place.img.src} 
    //         alt = {place.img.alt} 
    //         country = {place.country} 
    //         location = {place.location}
    //         date = {place.date}/>)
    // })

    //Method 2
    // const location = data.map((entry) =>{
    //     return (<Entry 
    //         key = {entry.id}
    //         entry = {entry} />)
    // })

    //Method 3
    const location = data.map((entry) =>{
        return (<Entry 
            key = {entry.id}
            {...entry} />)
    })
    
    return(
        <>
            <Header />  
            {/* <Entry 
                img = "./src/assets/hero.png"
                alt = "hero img"
                country = "Japan"
                location = "Tokyo"
                date = "22th March 2026"
            />
              <Entry 
                img = "./src/assets/hero.png"
                alt = "hero 2 img"
                country = "Canada"
                location = "London"
                date = "22th january 2026"
            /> */}
            {location}
        </>
    )
} 