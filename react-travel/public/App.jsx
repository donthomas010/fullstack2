import Header from "../Components/Header.jsx";
import Entry from "../Components/Entry.jsx";

export default function App(){

    const name ="don"
    return(
        <>
            <h1>name: {name}</h1>
            <Header />
            <Entry 
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
            />
            <Entry />
            <Entry />
        </>
    )
}