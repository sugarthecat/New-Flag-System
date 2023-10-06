function randomInRange(start,end){
    return Math.random()*(end-start)+start
}

function randomIntInRange(start,end){
    return Math.floor(randomInRange(start,end))
}
export {
    randomInRange,
    randomIntInRange
}