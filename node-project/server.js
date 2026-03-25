import http from 'node:http';
import path, { dirname } from 'node:path';
import url from 'node:url';
import { handleGet } from './utils/routeHandlers.js';
import {handlePost} from './utils/routeHandlers.js'


import { serveStatic } from './utils/serveStatic.js';
import { getData } from './utils/getData.js';


const PORT = 8000;

// const __filename = url.fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// console.log(__dirname);
// console.log(__filename);
console.log(await getData());

const relPath = path.join('public', 'index.html');
console.log('relative : ', relPath)


const server = http.createServer( async (req, res) => {

    
    if(req.url === '/api'){
        if (req.method === 'GET'){
            return await handleGet(res);
        }
        if(req.method === 'POST'){
            return await handlePost(req, res);
        }
    }else{
        return await serveStatic(req, res, relPath);
    }
    
})

server.listen(PORT, () => console.log(`connected to port ${PORT}`))