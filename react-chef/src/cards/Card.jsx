import React from "react"
import Star from "./Star";

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
        <h1 className="name">First Name: {avatar.firstName}</h1>
        <h1 className="name">Last Name: {avatar.lastName}</h1>
        <h2 className="contact">Phone: {avatar.phone}</h2>
        <h3 className="contact">Email: {avatar.email}</h3>
        <Star starStatus = {starStatus} handleClick = {toggleFavourite}/>
        </main>)
}