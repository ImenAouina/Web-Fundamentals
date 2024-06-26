

var numberOfLikes=document.querySelector("#likes-number");

function increaseLike(element){
    //console.log(element);
    numberOfLikes.innerText ++;
    //console.log(numberOfLikes);
    numberOfLikes.innerText= numberOfLikes.innerText ++ +" ";
}