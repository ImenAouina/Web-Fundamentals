

var likeNumber1 =document.querySelector(".likes-number1");
var likeNumber2 =document.querySelector(".likes-number2");
var likeNumber3 =document.querySelector(".likes-number3");
var array =[];
var b1 = document.querySelector("#btn1");
var b2 = document.querySelector("#btn2");

array.push(likeNumber1.innerText);
array.push(likeNumber2.innerText);
array.push(likeNumber3.innerText);

function increaseLike(element){
   
   if(element == b1){
      array[0]++;
      likeNumber1.innerText = array[0]++;
   }else if (element == b2){
      array[1]++;
      likeNumber2.innerText = array[1]++;
   }else{
      array[2]++;
      likeNumber3.innerText = array[2]++;
   }
}