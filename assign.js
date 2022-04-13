/*/ write 3 variables (number , string , boolean)

var number = 23;
console.log(typeof(number));
var name = "rashed";
console.log(typeof(name));
var sunsetEast = true;
console.log(typeof(sunsetEast)); */

// variable using (let ,const)

// let name = "rashed";
//  name = "rashedul Islam";
// console.log(name);

/*/ ‍simple math operation 
let num1 = 25;
let num2 = 20;
let total = num1 + num2;
let minus = num1 - num2;
let multification = num1* num2;
let divide = num1 / num2;
let modulus = num1 % num2;
console.log(total,minus,multification,divide,modulus);*/

/*/ while loop to display 7 to 19 numbers and show odd number

let i = 7;
while(i<=19){
    let even = i;
    console.log(even);
    i = i+2;
} */

/*/ declare an array and checking its various problem
let arr = ['maruf','najmul', 'rihin','dishat','sakib','siam'];
arr[3] = 'didar';
arr.push('sabib', 'mushfiq');
arr.pop();
console.log(arr.length, arr);*/

//  display the number bigger than 80 in array

// let arr = [52,64,95,74,52,86,32,91,89,101,105];
// for(i=0; i<=arr.length; i++){
//     let element =arr[i]
//     if(element>80){
//         console.log(element);
//     }
// }

/*/ declare an object 

let products = 
    {name:'laptop',
     price: 120000,
     ram :'8gb',
     color: 'black',
     processor: 'qore i9'
    }
products.processor = 'qore i7';
console.log(products); */

// feet to Inch
/* case-1
function feetToInch(feet){
    let inch = feet * 12;
    return inch;
   
} 
const inches = feetToInch(10);
console.log(inches);
*/

/* case -2
// centimeter to Meter
function centimeterToMeter(centimeter){
    let meter = centimeter / 100;
    return meter;
}
const input = centimeterToMeter(550);
console.log(input);  */

/*/ case -3
function pageRequirements(book1,book2, book3){
    let book1Page = 100 * book1;
    let book2Page = 200 * book2;
    let book3Page = 300 * book3;
    let totalPage = (book1Page + book2Page + book3Page);
    return totalPage;
}
const input = pageRequirements(6,4,9);
console.log(input);*/

/*/ case -4 only positive number;

function onlyPositive(positiveNum){
      let positiveArray = [] 
      for( let i=0; i<=positiveNum.length; i++){
          if(positiveNum[i] > 0){
              positiveArray.push(positiveNum[i]); 
          }else{
              return positiveArray;
          }        
      } 
      return positiveArray; 
}
let positiveNum = [21,56,43,41,12,-20,52,74,85,31];
let input = onlyPositive(positiveNum);
console.log(input); */

// best player big name


  /*  function longFriend(arr){
                var long = arr[0];
                for (let i = 0; i < arr.length; i++) {
                    const element = arr[i];
                        if( long.length < element.length){
                            long = element
                        }
                    }
                    return long
                }

        var  friend = ['Mushfiqur', 'Tamim', 'Mahmudullah','Mahedi', 'Mustafizur','Naim']
        var longword = longFriend(friend);
        console.log(longword) */

function lowestAge(age){
    let lowAge = age[0];
    for(let i=0; i<age.length; i++){
           let element = age[i];
           if(element<lowAge){
               lowAge = element;
           }
    }
    return lowAge

}
let mensAge = lowestAge([21,44,62,51,24,15,35,45,25,41,5,20,18]);
console.log(mensAge);


