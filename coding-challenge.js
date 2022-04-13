// for(var i = 1; i <= 10; i++)
// {
//     console.log(i);
// }

/*/Coding challenge #2: Print the odd numbers less than 100
for(let i=1; i<=100; i = i+2){
      console.log(i);
} */
// multification table in javascript
/*
var result = 'x ';
for (var i = 0; i < 11; i++) {

    for (var j = 0; j < 11; j++) {

        if(i == 0 && j > 0){
          result += '[' + j + ']';
        } 
        else if(j == 0 && i>0){
          result += '[' + i + '] ';
        } 
        else if(i>0 && j>0){
        result =result + (i*j) + ' ';
        }
    }
    result += '\n'
}

console.log(result); */

// calculate factorial 10
/*
var factorial = 1;
for(let i=1; i<=10;i++){
  factorial = factorial * i;
  
}
console.log(factorial);  */

//Coding challenge #7: Calculate the sum of odd numbers greater than 10 and less than 30
/*
function getSumOdd(lastNum){
  let sum = 0;
  for(let i=11;i<lastNum; i+=2){
    sum += i;
  }
  return sum;
}
const lastNumber = getSumOdd(30);
console.log(lastNumber); */

/*
function sumArray(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
      let numbers =arr[i];
      sum += numbers;
    }
    return sum;
}


var ar = [2, 3, -1, 5, 7, 9, 10, 15, 95];
var sumResult = sumArray(ar);
console.log(sumResult);  */
/*

function averageArray(arr){
  let sum = 0;
  for(let i=0; i<arr.length; i++){
    sum = sum + arr[i];
  }
  let average = sum / arr.length;
  return average;
}

var ar = [1, 3, 9, 15, 90];
var avg = averageArray(ar);
console.log(avg) */