


$(document).ready(function() {

    $("#PONext").click(function(){
        DelIfnoTab();
    });

    $("#POPrev").click(function(){
        PizzfnoTab();
    });

    $("#ONext").click(function(){
        OrdIfnoTab();
        reviewSize();
        reviewCrust();
        reviewAddress();
        reviewToppings();
        orderTotal();
    });

});

function PizzfnoTab(){
    $('[href="#t1"]').tab('show');
}

function DelIfnoTab(){
    $('[href="#t2"]').tab('show');
}

function OrdIfnoTab(){
    $('[href="#t3"]').tab('show');
}

$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    var target = $(e.target).attr("#t3")
    alert(target);
});

function reviewToppings() {

    let checkedBoxes = $('input[name="topping"]:checked');
    let total = 0;

    checkedBoxes.each(function() {
        total += $(this).data("price");
    });



    document.getElementById("toppingOptions").innerHTML = checkedBoxes;


    /*
    let pepp = '';
    let sas = '';
    let anch = '';
    let mush = '';
    let onion = '';

    if (document.getElementById('pepperoni').checked){
        pepp = "Pepperoni";
    }

    if (document.getElementById('sasuage').checked){
        sas = "Sasuage";
    }

    if (document.getElementById('anchovies').checked){
        anch = "Anchovies";
    }

    if (document.getElementById('mushrooms').checked){
        mush = "Mushrooms";
    }

    if (document.getElementById('onions').checked){
        onion = "Onions";
    }

    document.getElementById("toppingOptions").innerHTML =  pepp + "<br>" +  sas + "<br>" +  anch + "<br>" +  mush + "<br>" +  onion + "<br>";
     */
}

function reviewSize(){
    document.getElementById("size").innerHTML = $('input[name=size]:checked').val();
}

function reviewCrust(){
    document.getElementById("crustType").innerHTML = $('input[name=crust]:checked').val();
}

function orderTotal(){
    let checkedBoxes = $('input[name="topping"]:checked');
    let total = 0;

    checkedBoxes.each(function() {
        total += $(this).data("price");
    });
    total = total + (total * .51) + 2;
    document.getElementById("orderTotal").innerHTML = total;

}

function reviewAddress() {

    let n = document.getElementById("name").value;
    let a = document.getElementById("address").value;
    let p = document.getElementById("phone").value;

    document.getElementById("addressInfo").innerHTML = n + "<br> " + a + "<br> " + p;
}