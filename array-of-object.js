// map recap
const product= [
    {id:1, name:'hp', price:167788},
    {id:2, name:'lenovo', price:16000},
    {id:3, name:'dell', price:32000},
    {id:4, name:'accer', price:870000}
]
const result= product.map(n=>n.price)
// console.log(result)
const result1=product.map(n=>n.name)
// console.log(result1)
// for each
// product.forEach(p=> console.log(p.id))
// filter
const expensive= product.filter(p=> p.price>70000)
// console.log(expensive)
// find
const affordable= product.find(p=>p.price<50000)
console.log(affordable)
// reduce
const result6=product.reduce((p,c)=>p+c.price,0)
console.log(result6)
