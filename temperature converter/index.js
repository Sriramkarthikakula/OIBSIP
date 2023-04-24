$("#sub").click(function(){
    $("#sub").fadeOut(70).fadeIn(70);
});
function calling(){
    var x = document.getElementById("deg").value;
    var c = document.getElementById("cat").value;
    if (c=="celsius"){
        var res = x *(9/5)+32;
        document.getElementById("res").innerHTML="Result: "+res+"<sup>o</sup>F";
    }
    if (c=="Fahrenheit"){
        var res = (x-32)*(5/9);
        document.getElementById("res").innerHTML="Result: "+res+"<sup>o</sup>C";
    }
};


