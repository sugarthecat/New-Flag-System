/**
 * Retreives a random item from the given array
 * @param {Array} array the array to select an item from
 * @returns the selected item
 */
export function randomItem(array){
    return array[Math.floor(array.length*Math.random())]
}
/**
 * 
 * @param {Array} array 
 * @param {Number} weight 
 * @returns 
 */
export function getFrontWeightedItem(array,weight){
    return array[Math.floor(array.length*Math.pow(Math.random(),weight))]
}