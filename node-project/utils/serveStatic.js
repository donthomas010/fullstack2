import path from 'node:path';
import { sendResponse } from './sendResponse.js';
import fs from 'node:fs/promises';

export async function serveStatic(req, res, relPath){
    try{
        const content = await fs.readFile(relPath, 'utf8')
        sendResponse(res, 200, 'text/html', content)
    }catch(err){
        console.log(err)
    }
}