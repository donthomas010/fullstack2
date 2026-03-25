export async function parseJSONBody(req){
    
    let body = ''

    for await (const chunk of req){
        body += chunk
    }

    try {

    }catch(err){
         throw new Error(`invalid json error ${err}`)
    }
}