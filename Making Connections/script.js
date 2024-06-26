console.log("page loaded...");
var UserName = document.querySelector(".username");
function editName(){
    UserName.innerText = "Dojo User";
}
/*******remove user******decrease requests********/
var requests=document.querySelector("#badge1");
var requestsval=parseInt(requests.innerText);
var userInfo1 =document.querySelector("#user1");
var userInfo2 =document.querySelector("#user2");
var btn1= document.querySelector("#icon1");
var btn2= document.querySelector("#icon2");
function removeUser(element){
    if(element == btn1){
        userInfo1.remove();
    } else {
        userInfo2.remove();
    }
requestsval-=1;
requests.innerText=requestsval;
}
/**************increase connections *****/
var connections=document.querySelector("#badge2");
connectionsVal=parseInt(connections.innerText);
function increase(){
    connectionsVal+=1;
    connections.innerText=connectionsVal;
}