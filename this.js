class Person{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    sleep(){
        console.log(`now sleep ${this.name}`)
    }
}
const result= new Person('kodom ali',32)
console.log(result)
result.sleep()
const result1= new Person('Akkas ali',21)
console.log(result1)
result1.sleep()