import { propertyInfo } from "./propertyInfo.js";

function getPropertyHTML(properties) {
  return properties.map((item) => {
    const { location, price, rooms } = item;
    const roomSize = rooms.reduce((total, current) => total + current);

    return `<section>
    <h1>${location}</h1>
    <h1>${price}</h1>
    <h1>${roomSize}</h1> 
    </section>`;
  });
}

//console.log(getPropertyHTML(propertyInfo));
document.getElementById("container").innerHTML = getPropertyHTML(propertyInfo);
