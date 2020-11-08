
$(document).ready(function() {

    $("#rankName").click(function(){
        nameAndRank();
    });

    $("#learningIn").keypress(learningKey);
    $("#donateIn").keypress(donateKey);

});

function nameAndRank() {
    let f = document.getElementById("fName").value;
    let l = document.getElementById("lName").value;

    document.getElementById("nameRank").innerHTML = 'Hello, ' + $('input[name=rank]:checked').val() + " " + f + " " + l;
}

function learningKey(event) {
    let lTotal = parseInt(event.key) * 39.99;
    $("#learningTotal").text(`$${lTotal}`);
}

function donateKey(event) {
    let lTotal = parseInt(event.key) * 14.99;
    $("#donateTotal").text(`$${lTotal}`);
}

