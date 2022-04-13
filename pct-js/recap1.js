// farenheight to celcius

/* let fahrenheit = 108;
let celcius = (fahrenheit - 32) * 5/9;
console.log(celcius);

function getToCelcius(fahrenheit){
    let celcius = (fahrenheit - 32) * 5/9;
    return celcius;
}
var result = getToCelcius(108);
console.log(result);  */

// celcius to fahrenheit 

/* function getToFahrenheit(celcius){
    let fahrenheit = (celcius * 9/5) +32 ;
    return fahrenheit;
}
var result = getToFahrenheit(108);
console.log(result); */

/*let number = 41;
if( number>= 80 && number<= 100){
    console.log("A+");
}else if(number>=70 && number<=79){
    console.log("A");
}else if(number>=60 && number<=69){
    console.log("A-");
}else if(number>=50 && number<=59){
    console.log("B");
}else if(number>=40 && number<=49){
    console.log("C");
}else if(number>=33 && number<=39){
    console.log("D");
}else if(number>=0 && number<=32){
    console.log("F");
}else{
    console.log("Not a valid Number");
}*/
// grade checker by Function

/* function getGrade(number){
      if( number>= 80 && number<= 100){
        var grade = "A+";
        return grade;
    }else if(number>=70 && number<=79){
        var grade = "A";
        return grade;
    }else if(number>=60 && number<=69){
        var grade = "A-";
        return grade;
    }else if(number>=50 && number<=59){
        var grade = "B";
        return grade;
    }else if(number>=40 && number<=49){
        var grade = "C";
        return grade;
    }else if(number>=33 && number<=39){
        var grade = "D";
        return grade;
    }else if(number>=0 && number<=32){
        var grade = "F";
        return grade;
    }else{
        var grade = "Not a valid Number";
        return grade;
    }  
}
var result = getGrade(33)
console.log(result);
var result = getGrade(101)
console.log(result); */

//grade checking by switch statement
/*
let score = 40;

switch(true){
    case score>=80 :
        console.log("A+")
        break;
    case score >=70:
        console.log("A");
        break;
    case score >=60:
        console.log("A-");
        break;
    case score >=50:
        console.log("B");
        break;
    case score >=40:
        console.log("C");
        break;
    case score >=33:
        console.log("D");
        break;
    case score >=0:
        console.log("F");
        break;
    default:
        console.log("NOt a valid Number");
    
} */

// break and return 

// var score = [25,56,74,32,86,95,74,62,57,69];
// for(let i=0; i<=score.length;i++){
//     let result = score[i];
//     console.log(result);
//     if(result > 90){
//         break;
//     }
// } 

var score = [25,56,74,32,86,95,74,62,57,69];
for( var i = 0; i<=score.length; i++){
    var result = score[i];
    if(result > 70){
        continue;
    }
    console.log(result);
}
