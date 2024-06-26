var banner_image = document.querySelector("#banner_image");
var image_list = ["assets/banner_1.jfif" , "assets/banner_2.jfif","assets/banner_3.jfif", "assets/banner_4.jfif"];
var image_index = 1;

var x = document.querySelectorAll(".image_index");
console.log(x);

var shopping_count = document.querySelector("#shopping_count");

console.log(image_list[2]);

function move(direction) { /// -1

    // Before moving the image index
    x[image_index].classList.remove("highlighted");


    image_index = image_index + direction; // image_index = image_index + 1;
    if (image_index > 3){
        image_index = 0;
        console.log("You have left the range of the array .. ")
    }
    else
    if (image_index < 0){
        image_index = 3;
        console.log("You have left the range of the array .. ")
    }


    // After move the image index
    x[image_index].classList.add("highlighted");

    banner_image.src = image_list[image_index];
}


function addItem(button){
    shopping_count.innerText++;
    button.innerText = "Bought";
    button.disabled = true;
}

