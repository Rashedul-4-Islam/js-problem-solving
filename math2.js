// cheapest phone checking

/* const phones = [
    {name:'samsung-m30', price:30000, camera:20,storage:16},
    {name:'shaomi-m30', price:25000, camera:20,storage:16},
    {name:'walton-n30', price:8000, camera:20,storage:16},
    {name:'symphony-z30', price:10000, camera:20,storage:16},
    {name:'relme-r30', price:30000, camera:20,storage:16}
]
  let cheapest = phones[0];
for(const phone of phones){
    // console.log(phone);
    if(phone.price<cheapest.price){
        cheapest = phone;
    }
}
console.log(cheapest); */

// cheapest phone by function


/* function cheapPhone(phones){
    let cheapest = phones[0];
    for(const phone of phones){
        if(phone.price<cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;  
}
const phones = [
    {name:'samsung-m30', price:30000, camera:20,storage:16},
    {name:'shaomi-m30', price:25000, camera:20,storage:16},
    {name:'walton-n30', price:18000, camera:20,storage:16},
    {name:'symphony-z30', price:10000, camera:20,storage:16},
    {name:'relme-r30', price:29000, camera:20,storage:16}
]
let result = cheapPhone(phones);
console.log(result); */

// remove duplicate in the array
/*
const names = ['abul','kabul','rahul','tutul','ebul','kabul','ratul', 'tutul','putul'];

function removeDuplicate(names){
    const unique = [];
    for(const element  of names){
        if(unique.indexOf(element)== -1){
            unique.push(element);
        }
    }
    return unique;
}
const uniqueNames = removeDuplicate(names);
console.log(uniqueNames); */

/*  //shoping cart calculating

const products = [
    {name:'laptop',price:43000,quantity:1},
    {name:'shirt',price:550,quantity:5},
    {name:'watch',price:1000, quantity:2},
    {name:'chicken',price:250, quantity:5}
]
let totalPrice = 0;
for(const product of products){
    const productPrice = product.price * product.quantity;
    totalPrice = totalPrice + productPrice;
}
console.log(totalPrice);*/

