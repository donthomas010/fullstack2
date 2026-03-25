let degree = 10

export function getTemp(min = -30, max = 50){
    const change = Math.random() < 0.5 ? -1 : 1
    degree +=change

    degree = Math.max(min, Math.min(max,  degree))

    return degree
}