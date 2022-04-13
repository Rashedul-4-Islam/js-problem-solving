// inche to feet
/* function getToFeet(inche){
       var feet = inche/12;
       return feet;
}
var totalFeet = getToFeet(144);
console.log("Total feet = ", totalFeet);
var totalFeet = getToFeet(250);
console.log(totalFeet);
// kilometes to mile
function getToKm(miles){
    var kilometer = miles * 1.624;
    return kilometer;
}
var totalKm = getToKm(10);
console.log("Total kilometer =", totalKm);*/

// even odd number check

/*
function evenAndOdd(number){
    if(number % 2 ==0){
        return "even Number";
    }else{
        return "odd Number";
    }
}
var checking = evenAndOdd(24);
console.log("The Number is", checking);
var checking = evenAndOdd(4125);
console.log("The Number is", checking);*/

//Check leap year

/* function leapYear(year){
    if(year % 4==0 && year !=2100 && year != 1900){
        return "leap year";
    }else{
        return "Not leap year";
    }
}
var years = leapYear(1900);
console.log(years); */

// solve factorial increment away

/* function getFactorial(num){
    var factorial = 1;
    for( let i=1; i<=num; i++){
        factorial = factorial * i;
    }
    return factorial;
}
var number = getFactorial(5);
console.log("The factorial result is :", number); */

// solve factorial  decrement away

/* function getFactorial(num){
    var factorial = 1;
    for( let i=num; i>=1; i--){
        factorial = factorial * i;
    }
    return factorial;
}
var number = getFactorial(5);
console.log("The factorial result is :", number);
var number = getFactorial(7);
console.log("The factorial result is :", number); */

// factorial by while loop
/*
function getFactorial(num){
    var factorial = 1;
    let i=1;
    while(i<=num){
        factorial = factorial * i;
        i++;
    }
    return factorial;
}
var number = getFactorial(5);
console.log("The factorial result is :", number); */

// factorial in a recursive function

/* function getFactorial(n){
      if(n==1){
          return 1;
      }
      return n * getFactorial(n-1);
}
var result = getFactorial(7);
console.log(result); */

//arrow function
/*
let calAge = birthYear => (2021 - birthYear);
var age = calAge(1999);
console.log(age);
console.log(calAge(1988)); */

function fruitSlice(apples , oranges){
         let apple = apples * 4;
         let orange = oranges *4;
         let result = `apples slice are ${apple} pieces and Orange slice are ${orange} pieces`;
         return result;
}
console.log(fruitSlice(9,7));