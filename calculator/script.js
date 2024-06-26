var a = 0;
var b = 0;
var number_string = "";
var current_operator = "";

var display = document.querySelector("#display");

function press(value){
    number_string = number_string + value.toString();
    display.innerHTML = number_string;
}

function setOP(op){
    current_operator = op;
    if (number_string != ""){
        a = Number(number_string)
        number_string = ""
    }
}

function calculate(){
    b = Number(number_string);
    // if (current_operator == "+") {
    //     a = a + b;
    // }else if(current_operator == "-"){
    //     a = a - b
    // }else if(current_operator == "/"){
    //     a = a / b;
    // }else {
    //     a = a * b;
    // }
    ch = `${a}${current_operator}${b}`;
    a = eval(ch)
    
    b = 0;
    number_string = ""
    display.innerHTML = a;
}

function clr(){
    a = 0;
    b = 0;
    number_string = ""
    current_operator = ""
    display.innerHTML = "0"
}
