const eventSource = new EventSource(/temp/live)

const tempDisplay = document.getElementById('temp-dsiplay');

eventSource.onmessage = () =>{
    const data = JSON.parse(event.data)
    const temperature = data.temp 

    tempDisplay.textContent = temperature
}

eventSource.onerror = () =>{
    console.log("connection failed")
}