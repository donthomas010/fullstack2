const data = await fetch("/api");
const response = await data.json;
console.log(response);