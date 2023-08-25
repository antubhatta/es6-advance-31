class Vehicle{
    constructor(name,price){
        this.name=name
        this.price=price
    }
    move(){
        console.log('ghari chole na chole na')
    }
}
class Bus extends Vehicle{
    constructor(name,price,seat,vara){
        super(name,price)
        this.seat=seat
        this.vara=vara
    }
}
class Truck extends Vehicle{
    constructor(name,price,load,destination){
        super(name,price)
        this.load=load
        this.destination=destination
    }
}
const result=new Vehicle('cng','48484')
console.log(result)
const result1=new Truck('truck',84884,'no','nk')
console.log(result1)
const result2= new Bus('bus',554,'j1',600)
console.log(result2)

