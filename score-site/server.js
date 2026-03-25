import http from 'node:http'

import {getTemp} from './getTemp.js'
//const relPath = path.join('public', 'index.html');
//console.log('relative : ', relPath)


const server = http.createServer(async (req, res) =>{

    if(!req.url.startsWith('/temp/live')){
        return await handleFiles(req, res, relPath)
    }else if(req.url === '/temp/live'){
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/event-stream')
        res.setHeader('Cache-Control', 'no-cache')
        res.setHeader('Connection', 'keep-alive')

        setInterval( () =>{

            const temperature = getTemp()
            res.write(
                `data: ${JSON.stringify({event: 'temp-updated', temp: temperature})}\n\n`
            )
        })
    }
    
})

server.listen(8000, () => console.log('listening 8000'))