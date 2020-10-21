

var numClicks = 0;

function generateLetter()
{
    var num = Math.floor(Math.random() * 26) + 65;
    var letter = String.fromCharCode(num);
}


function onClick() {
    numClicks++;
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