// get the fibonacci series by the function
/*
function fibonacciSeries(num){
    let initalValue = [0,1];
    for(let i=2; i<=num; i++){
         initalValue[i] = initalValue[i-1] + initalValue[i-2];
         
    }
    return initalValue;
}
let fibo = fibonacciSeries(10);
console.log(fibo);*/

// get the factorial by the function
/*
function getFactorial(num){
    let factValue = 1;
    for(let i=1; i<=num; i++){
       
          factValue = factValue * i;
    }
    return factValue;

}
const total = getFactorial(6);
console.log(total);  */

 const products = [
     {name: 'walton laptop', price :33000},
     {name : 'Realme c12' , price : 12000},
     {name : 'apple smart watch', price: 8000},
     {name : 'Dell Monitor', price: 9000},
     {name : 'Gree ac', price: 40000},
     {name : 'Redmi smart watch', price: 40000},
]
function searchProduct(products){
    for( const product of products){
        let itemPrice = product.price;
        if(itemPrice<10000){
            continue;
       }
       console.log(product)
    }
    
}
const match = searchProduct(products )
console.log(match);
 

//recurstion way to solve factorial
/*
function getFactorial(n){
    if(n==1){
        return 1;
    }
    return n * getFactorial(n-1);
}
console.log(getFactorial(6))  */

//  fibonacci series solve
/*
function getFibonacci(n){
    let fibo = [0,1];
for(let i=2; i<=n; i++){
    fibo[i] = fibo[i-1] + fibo[i-2]
    console.log(fibo[i])
}
}
console.log(getFibonacci(8)) */

// fibonacci solve by recursive way 
/*
function getFibonacci(n){
    if(n==0){
        return 0;
    }
    if(n==1){
        return 1;
    }
    return getFibonacci(n-1) + getFibonacci(n-2);
}
console.log(getFibonacci(8)) */