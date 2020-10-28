let numClicks = 0;

function onClick() {
    numClicks++;
}

function calcBac() {
    let beer = parseInt(document.getElementById("beer").value) * 0.54;
    let wine = parseInt(document.getElementById("wine").value) * 0.6;
    let shot = parseInt(document.getElementById("shot").value) * 0.6;
    let weight = parseInt(document.getElementById("weight").value);
    let hours = parseInt(document.getElementById("hours").value);


    let x = (beer + wine + shot) * 7.5;
    let y = x / weight;
    let bac = y - (hours * .015);

    bac = +bac.toFixed(3);

    if(bac < 0){
        bac = 0;
    }

    document.getElementById("bac").innerHTML = 'Your Blood Alcohol Content is: '+ bac + '%';
}



function showClicks() {
    if (numClicks === 0){
        alert("You have not clicked the button yet!");
    }
    else if (numClicks === 1){
        alert("You have clicked the button once!");
    }
    else{
        alert("You have clicked the button " + numClicks + " times!");
    }
}

function calcFee() {
    let books = parseInt(document.getElementById("books").value) * 0.25;
    let dvd = parseInt(document.getElementById("dvd").value) * 0.5;
    let days = parseInt(document.getElementById("days").value);

    let fee = (books * days) + (dvd * days)


    document.getElementById("fee").innerHTML = 'Your total  late fees are:  $'+ fee.toFixed(2);
}

function calcBill() {
    let ppl = parseInt(document.getElementById("ppl").value);
    let t = parseInt(document.getElementById("toppings").value) * 1.5;

    let cost = (15 + t) / ppl;

    document.getElementById("bill").innerHTML = 'The bill per person is $' + cost.toFixed(2);
}

$(document).ready(function() {
    $("#calcfee").click(function(){
        calcFee();
    });
});

$(document).ready(function() {
    $("#calcbill").click(function(){
        calcBill();
    });
});