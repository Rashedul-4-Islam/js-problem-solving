//// problem-1 : seer to Mon convert
/*
function seerToMon(seer){
     let fixedSeerToMon = 40;
     // error conditons
     if(seer <= 0){
         return 'The seer input value is not valid'
     }else if(typeof(seer) != "number" ){
         return 'Not a number'
     }
     let totalMon = seer / fixedSeerToMon;
     return totalMon;
}
const mon = seerToMon(500);
console.log( mon);  */




//// problem-2 : Total products sales 
/*
function totalSales(shirtQuantity,pantQuantity, shoeQuantity){
         const shirtPrice = 100;
         const pantPrice = 200;
         const shoePrice = 500;
         // error conditions
         if(shirtQuantity < 0 || pantQuantity < 0 || shoeQuantity < 0){
             return ' products Quantity is invalid'
         }else if(typeof(shirtQuantity)!= "number" || typeof(pantQuantity)!= "number" || typeof(shoeQuantity)!= "number" ){
             return "Not a number"
         }
         const shirtsPrice = shirtQuantity * shirtPrice;
         const pantsPrice = pantQuantity * pantPrice;
         const shoesPrice = shoeQuantity * shoePrice;
         const totalProductsPrice = (shirtsPrice + pantsPrice + shoesPrice);
         return totalProductsPrice;
}
const totalPrice = totalSales(10,10,10);
console.log(totalPrice);     */




//// problem-3 : Delivery cost per T-shirt
/*
function deliveryCost(quantity){
    const deliveryCostFirstHundred = 100;
    const deliveryCostSecondHundred = 80;
    const deliveryCostThirdHundred = 50;
    if(quantity>=1 && quantity<=100){
        let totalDeliveryCost1 = deliveryCostFirstHundred * quantity;
        return totalDeliveryCost1;
    }else if(quantity>100 && quantity<=200){
        const firstHundredShirtsCost = 100 * deliveryCostFirstHundred;
        const extraShirts = quantity - 100;
        const secondHundredShirtsCost = extraShirts * deliveryCostSecondHundred;
        const totalDeliveryCost2 = firstHundredShirtsCost + secondHundredShirtsCost;
        return totalDeliveryCost2;
    }else if (quantity>=200){
        const firstHundredShirtsCost = 100 * deliveryCostFirstHundred;
        const secondHundredShirtsCost = 100 * deliveryCostSecondHundred;
        const moreExtraShirts = quantity -200;
        const twoHundredPlusShirtCost = moreExtraShirts * deliveryCostThirdHundred;
        const totalDeliveryCost3 = firstHundredShirtsCost + secondHundredShirtsCost + twoHundredPlusShirtCost;
        return totalDeliveryCost3;
    }
    // error conditions
    else if(quantity<=0){
        return 'Your quantity number is invalid'
    }else if(typeof(quantity) !="number"){
         return "Not a number"
    }
}
const totalCost = deliveryCost(120);
console.log(totalCost)    */




///// problem -4 : Search the perfect friends whose name is only 5 characters
/*
function perfectFriend(names){
    for(let i=0; i<=names.length; i++){
        let friendName = names[i];
        if(friendName.length == 5){
            return friendName;
        }
        // error conditions
        else if(typeof(names) != "object"){
            return "Input value is not an Object"
        }else if (typeof(friendName) != "string"){
            return "Input value is not a string"
        }
        
    }  
}
let friendsName = ["Naim","shoumya","Tamim","shakib","afif","Nurul","Mahmudullah", "Mahedi","Mustafizur"];
const friends = perfectFriend(friendsName);
console.log(typeof (friends) );   */

