/*/ const number =  5.39;
 const output = Math.ceil(number);
 console.log(output); => the result is 6 
 */
/*
 const number = 7.99;
const output = Math.floor(number);
 console.log(output); => the result is 6
 */
/*
 const number = 7.44;
 const output = Math.round(number);
 console.log(output); => the result is 7

/*
const number = Math.random() *6;
const output = Math.round(number);
console.log(output); 
*/

/*/ get large number

 function getLargest(first , second, third){
    if(first>second && first>third){
        return first;
    }else if(second>first && second>third){
        return second;
    }else{
        return third;
    }
}
var largest = getLargest(251,821,742);
console.log(largest); 

// get small number

function getSmallest(first,second ,third){
    if(first<second && first<third){
        return first;
    }else if (second<first && second<third){
        return second;
    }else{
        return third;
    }
}
var smallest = getSmallest(512,415,454);
console.log("The small number is ",smallest); */

// how to get largest number in array
 /*function getLargest(numbers){
    let number = 0;
    for(let i=0;i<numbers.length;i++){
        element = numbers[i];
        if(element>number){
            number = element;
        }
    } 
    return number;  
 }
 let ages = [23,45,74,12,65,43,89,51];
 let result = getLargest(ages);
 console.log(result); */

 // how to get lowest number in array

/* function getLowest(numbers){
     let lowest = numbers[0];
     for(let i=0; i<numbers.length; i++){
         let element = numbers[i];
         if(element<lowest){
              lowest=element;
         }
     }
     return lowest;
 }
 let ages = [23,45,74,12,65,43,89,51];
 let lowestAge = getLowest(ages);
 console.log(lowestAge);*/


 // fibonacci series

//  let fibo = [0,1];
//  for(let i=2; i<=10; i++){
//      fibo[i] = fibo[i-1] + fibo[i-2];
   
//  }
//  console.log(fibo);

// fibonacci series by function

/*function getFibo(num){
    const fibo = [0,1];
    for(let i=2; i<=num;i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
       
    }
    return fibo;
   
}

let result = getFibo(10);
console.log(result); */

/*/ recursive fibonacci element

function fibonacci(n){
    if(n==0){
        return 0;     
    }
    if(n==1){
        return 1;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}
const fiboElement = fibonacci(6);
console.log(fiboElement);*/

/*// get factorial by function 
function getFactorial(num){
    let factorial = 1;
    for(let i=1; i<= num; i++){
        factorial = factorial * i
    }
    return factorial
}
const result = getFactorial(7);
console.log(result) */

/*/ get factorial by the recursive way

function getFactorial(n){
    if(n==1){
        return 1;
    }
    return n * getFactorial(n-1);
}
const result = getFactorial(6);
console.log(result); */