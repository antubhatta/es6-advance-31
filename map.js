// const numbers=[4,3,7,8,5,3,8,6]
// const blocked=[]
// for(const num of numbers){
//     const block=num*2
//     blocked.push(block)
// }
// console.log(blocked)

const numbers= [9,4,32,6,5]
function doubleIt(num){
    return num*2
}
const double2= n=>n*2
const result= numbers.map(doubleIt)
// console.log(result)
const result1=numbers.map(double2)
const result2=numbers.map(n=>n*2)
// console.log(result1)
console.log(result2)