import React from "react"

export default function Card(){
 
    const [avatar, setAvatar] = React.useState({
        firstName : "dd",
        lastName: "tt",
        phone: "2222",
        email: "d@g.cm",
        isFavorite: false
    })

    let starStatus = avatar.isFavorite ? "Yes" : "No";

    function toggleFavourite(){
        setAvatar(prevAvatar =>{
            return {...prevAvatar, isFavorite: !prevAvatar.isFavorite}
        })
    }

    return(<main>
        <h1 className="name">{avatar.firstName}</h1>
        <h1 className="name">{avatar.lastName}</h1>
        <h2 className="contact">{avatar.phone}</h2>
        <h3 className="contact">{avatar.email}</h3>
        <p className="favourite" onClick={toggleFavourite}> favour {starStatus}</p>
        </main>)
}