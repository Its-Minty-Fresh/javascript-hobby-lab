

var numClicks = 0;

function generateLetter()
{
    var num = Math.floor(Math.random() * 26) + 65;
    var letter = String.fromCharCode(num);
}


function onClick() {
    numClicks++;
}

function calcBac() {
    var beer = parseInt(document.getElementById("beer").value) * 0.54;
    var wine = parseInt(document.getElementById("wine").value) * 0.6;
    var shot = parseInt(document.getElementById("shot").value) * 0.6;
    var weight = parseInt(document.getElementById("weight").value);
    var hours = parseInt(document.getElementById("hours").value);


    var x = (beer + wine + shot) * 7.5;
    var y = x / weight;
    var bac = y - (hours * .015);

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
    var books = parseInt(document.getElementById("books").value) * 0.25;
    var dvd = parseInt(document.getElementById("dvd").value) * 0.5;
    var days = parseInt(document.getElementById("days").value);

    var fee = (books * days) + (dvd * days)


    document.getElementById("fee").innerHTML = 'Your total  late fees are:  $'+ fee.toFixed(2);
}

function calcBill() {
    var ppl = parseInt(document.getElementById("ppl").value);
    var t = parseInt(document.getElementById("toppings").value) * 1.5;

    var cost = (15 + t) / ppl;

    document.getElementById("bill").innerHTML = 'The bill per person is $' + cost.toFixed(2);
}