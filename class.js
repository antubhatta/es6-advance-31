// const products= [
//     {id:1, name:'hp', price:167788},
//     {id:2, name:'lenovo', price:16000},
//     {id:3, name:'dell', price:32000},
//     {id:4, name:'accer', price:870000}
// ]
// // has some properties method
// class Product{
//     country='Bangladesh'
//     constructor(name){
//         this.name=name
//     }
//     speak(talk){
//         console.log(`talking about ${talk}`)
//     }
// }
// const dell = new product('le le lenovo')
// // console.log(dell)
// // dell.speak('oba kitha kou')
// class Teacher{
//     constructor(name,subject){
//         this.name=name
//         this.subject=subject
//     }
//     lecterur(){
//         console.log('sir is teaching')
//     }
// }
// const details= new Teacher('Yasin Sir','Math')
// console.log(details)
// const details1= new Teacher('lakshman sir','bangla')
// console.log(details1)
// details1.lecterur()

class Student{
    constructor(name,id,dep){
        this.name=name
        this.id=id
        this.dep=dep
    }
    chatra(){
        console.log('I am a student of university of information technoloy and scinces')
    }
}
const details=new Student('antu bhatta',207,'Cse')
console.log(details)
details.chatra()