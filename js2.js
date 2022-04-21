// Expected Result = 7
// Direction : Find median of this array

const input = [8, 7, 7, 9, 5, 4, 2, 9]

input.sort((a, b) => a - b)

let median;

if(input.length%2 != 0){
    let middleIndex = Math.floor(input.length/2)
    median = input[middleIndex]
}else{
    let middleIndex = Math.floor(input.length/2)
    median = (input[middleIndex] + input[middleIndex - 1])/2
}
console.log(median,'this is the result console')