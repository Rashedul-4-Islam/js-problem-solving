// let score = [25,56,74,32,86,95,74,62,57,69];
// for(let i=0; i<score.length;i++){
//     let result = score[i];
//     if(result>70){
//         continue;
//     }
//     console.log(result);
    
// }

// function getFactorial(number){
//     let factorial = 1;
//     for(let i=1; i<=number;i++){
//         factorial = factorial * i;
//     }
//     return factorial;
// }
// const result = getFactorial(6);
// console.log(result);

function getFactorial(n){

    if(n==1){
        return 1; 
    }
    return n * factorial(n-1);
}
const result = getFactorial(6);
console.log(result);