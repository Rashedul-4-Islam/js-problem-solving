// function cuttingMachine(fruit){
//     return fruit*4;
// }

// function fruits(mango,orange){
//        const peiceMango = cuttingMachine(mango);
//        const pieceOrange = cuttingMachine(orange);
//        console.log(`They give me ${peiceMango} piece of Mango and ${pieceOrange} piece of orange`);
//        return;
// }
// fruits(2,3);

// solve retirement age
/*
   const personAge = age =>{
       const calcAge = 60 - age;
       if(calcAge >0){
           console.log("This person have a time to retirement");
           return;
       }else{
           console.log("This person was already retire");
           return; 
       }
   }
    personAge(55);
    personAge(61);
*/


// Bill tip calculating
/* 
 const calcTip = (perTaka) =>{
    const arra = [];
    for(var i=0; i<perTaka.length; i++ ){
        tipTaka = perTaka[i];
        // console.log(tipTaka);
        if(tipTaka>=50 && tipTaka<=300){
            tip = tipTaka * 0.15; 
            arra.push(tip); 
        }else{
            tip = tipTaka * 0.20;
            arra.push(tip);  
        }
       
    } 
    return arra; 
}

const result = calcTip([125,550,45])
console.log(result);
*/


/*
const jonas = {
    firstName: "Michel",
    lastName: "jackson",
    birthyear: 1985,
    job: 'singer',
    friends: ['root','buttler','stock'],
    drivingLisence:true,

    calcAge: function(){
        return 2022 - this.birthyear;
   }
}
 

 console.log(`${jonas.firstName} is a ${jonas.calcAge()} years old. he has  driving lisence`);
 */ 

/// Jhon and Mark BMI camparing
/*
 const person = {
     firstPer:'jhon',
     secondPer: 'Mark',
     johnWeight: 92,
     johnHeight: 1.95,
     markWeight: 78,
     markHeight: 1.69,
     johnBmi: function(){
         const bmi = this.johnWeight/this.johnHeight ** 2;
         return bmi;
     },
     markBmi: function(){
         const bmi = this.markWeight/this.markHeight ** 2;
         return bmi;
     }
 }

 console.log(`${person.johnBmi() > person.markBmi() ? 'John BMI is grater than Mark BMI' : 'Mark BMI is grater than Jhon BMI'}`)
 */


//  given an array of temperature on an one day . Calculate the temperature amplitude

/*
const temperature = [3, -2, -6, -1,"error", 9, 13, 17, 15, 14, 9, 5 ]

const calcTempAplitude = temps => {
    let max = temps[0];
    let min = temps[0];
      
    for(let i=0; i< temps.length; i++){
        const curTemp = temps[i];
          if(typeof curTemp !== 'number') continue;
          if(curTemp > max) max = curTemp;
          if(curTemp < min) min = curTemp;
    }
    console.log(max, min);
    return max - min;
}

const result =  calcTempAplitude(temperature);
console.log(result);

*/