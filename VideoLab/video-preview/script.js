console.log("page loaded...");

function over(element){
    element.play();
    element.muted= true;
}

function out(element){
    element.pause();
}
function mute(element){
    element.muted= true;
    /*element.volume=1.0;*/
}