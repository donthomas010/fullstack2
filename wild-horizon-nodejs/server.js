import http from 'node:http';
import { getDataFromDB } from './db.js';
import { getDataByPathParams } from './getDataByPathParams.js';
import { sendJSONResponse } from './sendJSONResponse.js';


const PORT = 8000
const server = http.createServer( async (req,res) =>{
    const data = await getDataFromDB();
    
    if(req.url === "/api" && req.method === "GET"){

        sendJSONResponse(res, 200, data)

    }else if(req.url.startsWith(('/api/location')) && req.method === 'GET'){

        const location = req.url.split('/').pop();
        const filteredData = getDataByPathParams(data, "location", location)

        sendJSONResponse(res, 200, filteredData)

    }else if(req.url.startsWith(('/api/country')) && req.method === 'GET'){

        const country = req.url.split('/').pop();
        const filteredData = getDataByPathParams(data, "country", country)

        sendJSONResponse(res, 200, filteredData)

    }else{
        
        sendJSONResponse(res, 404, {
            error: "not found", 
            message: "the request not exist"}
            )
    }
})

server.listen(PORT, () => console.log(`connected on port ${PORT}`))