// var factorial = 1;
// for(let i=1; i<=7; i++){
//      factorial = factorial * i;
 
// }
// console.log(factorial);


/*function getFactorial(number){
    var factorial=1;
    for(let i= 1; i<=number; i++){
        factorial= factorial*i;
    }
    return factorial;
}
var result = getFactorial(9);
console.log("Your factorial result = ", result);

var result = getFactorial(6);
console.log("Your factorial result = ", result);*/

//factorial solve by recursive way

function factorial(n){
    if(n==1){
        return 1;
    }
   return n * factorial(n-1);
}
const result = factorial(6);
console.log(result)