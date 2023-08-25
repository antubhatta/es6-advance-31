// data access
const data =[{name:'antu', id: 207, address:'kochu khet'}]
// console.log(data[0].id)
// find the second price of product
const products={
    count:5000,
    data:[
        {id:1, name:'lenovo-laptop',price:'65000'},
        {id:2, name: 'hp-laptop',price:'77000'}
    ]
}
// console.log(products.data[1].price)

// nested object
const user={
    name:'Shoriful-Raj',
    address: {
        street: {
            first: 'dhaka-lalbagh 2/1',
            second: 'notun-bazar',
            third: 'dhaka,bangladesh'
        },
        city: 'dhaka'
    }
}

const user2={
    id :207,
    name:'antu',
    address:{
        city:'noakhali',
        upazila:'kabirhat'

    }
}
// optional chaining ?
console.log(user.address.street?.third)

console.log(user2.address.street?.third)