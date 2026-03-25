export const getDataByPathParams = (data, place, urlLocation) =>{
    return data.filter((person) =>{
        return person[place].toLowerCase() === urlLocation.toLowerCase()
    })
}