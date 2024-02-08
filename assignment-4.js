

function calculateMoney(ticketSale) {
    if(typeof ticketSale !== 'number' || ticketSale <0 ){
        return "Invalid Number";
    }

    const ticketSoldMoney = 120 * ticketSale;
    const everyDayCost = 500 + (50 * 8);
    const remainingBalance = ticketSoldMoney - everyDayCost;

    return remainingBalance; 
    
    }


    

function checkName(name) {
    if(typeof name !== "string"){
        return "invalid";
    }

    const lastAlpha = name.slice(-1).toLowerCase() || name.toUpperCase();
    const sampleChars = ["a", "y", "i" ,  "e", "o" , "u", "w"];
    if(sampleChars.includes(lastAlpha)){
        return "Good Name";
    }else{
        return "Bad Name";
    }
 }



 function deleteInvalids(array) {
    if(!Array.isArray (array)){
        return "Invalid Array";
    }

    const correctArray = [];
    for(num of array){
       if(typeof num === 'number' && !isNaN(num)){
        correctArray.push(num);
       }
       
    }
    return correctArray;
    }




function password(obj) {
    if(!obj || !obj.name || !obj.birthYear || !obj.siteName || typeof obj.birthYear !== 'number' || obj.birthYear.toString().length !== 4){
        return 'invalid';
    }

    const name =obj.name;
    const birthYear = obj.birthYear;
    const siteName= obj.siteName.slice(0,1).toUpperCase() +obj.siteName.slice(1);

    const str = siteName + '#' + name + "@" + birthYear;
    return str;
     
    
    }

 

    function monthlyremainingMoney(arr, livingCost) {

        if (!Array.isArray(arr) || typeof livingCost !== 'number') {
            return 'invalid input';
        }
    
        let total = 0;
    
        for (const income of arr) {
          
    
            if (income >= 3000) {
                let vat = (income * 20) / 100;
                let withoutVat = income - vat;
                total += withoutVat;
            } else {
                total += income;
            }
        }
    
        let remainingMoney = total - livingCost;
    
        if (remainingMoney >= 0) {
            return remainingMoney;
        } else {
            return 'earn more';
        }
    }
    
    
 
    