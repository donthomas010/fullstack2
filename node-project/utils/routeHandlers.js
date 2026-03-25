import { getData } from "./getData.js";
import { parseJSONBody } from "./parseJSONBody.js";
import { sendResponse } from "./sendResponse.js";


export async function handleGet(res){
    const data = await getData();
    const content = JSON.stringify(data);
    sendResponse(res, 200, 'application/json', content)
}

export async function handlePost(req, res){
    const rawBody =  await parseJSONBody(req)
    console.log(rawBody)
}