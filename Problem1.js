/*Project Euler Problem One
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
This implementation will work for many different entries other than 1000 
complexity O(n)*/

let limit = prompt("Please Enter A Number", "");

if (!isNaN(limit)){
    alert(getMulitplesOfThreeAndFive(limit));
    var mult1 = prompt("Please Enter A Multiple");
    var mult2 = prompt("Please Enter Another Multiple");
    if (!isNaN(mult1) && !isNaN(mult2)){
        alert(getMulitples(limit,mult1,mult2));
    }
    else{
        alert("One or both numbers are not multiples!"); 
    }
}
else{
    alert("NOT A NUMBER!");
}


function getMulitplesOfThreeAndFive(limit){
    let sum = 0;
    for (i=0; i < limit; i++){
        if (i % 5 === 0){
            sum += i;
        }
        else if (i % 3 === 0){
            sum += i;
        }
    }
    return sum;
}


//Version that allows any multiples

function getMulitples(limit,mult1,mult2){
    let sum = 0;
    for (i=0; i < limit; i++){
        if (i % mult1 === 0){
            sum += i;
        }
        else if (i % mult2 === 0){
            sum += i;
        }
    }
    return sum;
}
