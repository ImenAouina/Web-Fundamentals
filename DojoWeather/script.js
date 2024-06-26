function cityAlert(e){
    alert("loading weather report"+" : "+e.innerText);
}

var cookies = document.querySelector(".footer");
function accept(){
    cookies.remove();
}

function CtoF(temp){
    return Math.round(9 / 5 * temp + 32);
}
function FtoC(temp){
    return Math.round(5 / 9 * (temp - 32));
}
function change(element){
    for(var i=1; i<9;i++){
        var tSpan = document.querySelector("#temp"+i);
        var tVal=parseInt(tSpan.innerText);
        if (element.value == "°C"){
        
            tSpan.innerText=FtoC(tVal);

        } else {
            tSpan.innerText=CtoF(tVal);
        }
    }
}