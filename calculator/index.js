$(".col").click(function(){
    y = $(this).attr("id");
    if (y=="enter"){
        var res = eval(x);
        dis.innerHTML = res;
    }
    else if (y=="clear"){
        dis.innerHTML = " ";
    }
    else if(y=="del"){
        dis.innerHTML = " ";
        z = String(x).slice(0,-1);
        x = (dis.innerHTML = z);
    }
    else{
        x = (dis.innerHTML += y);
    }
});

