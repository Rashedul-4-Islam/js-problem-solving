// function inchesToFeet(inches){
//     var feet = (inches / 12);
    
//     return feet;
// }
// var inche = 144
// var result = inchesToFeet(inche);
// console.log(`The calculating result: ${result} `);

// function mileToKm(mile){
//     var kilometers = mile*1.6085;
//     return kilometers;
// }
// var miles = 5;
// var totalKm = mileToKm(miles);
// console.log("Total distance in", totalKm , "kilometes" );

function leapYear(year){
    if(year % 4 ==0 && year !=2100 && year !=1900){
        return true;
    }else{
        return false;
    }
}
 var input = 1904;
 var result = leapYear(input);
 console.log(result);