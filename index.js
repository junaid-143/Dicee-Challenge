
var randomnumber1 = Math.floor(Math.random() * 6) + 1 ;
var randomimage = "dice" + randomnumber1 + ".png";
var randomimagesource="./images/" + randomimage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomimagesource );


var randomnumber2 = Math.floor(Math.random() * 6) + 1 ;
var randomimage1 = "dice" + randomnumber2 + ".png";
var randomimagesource1="./images/" + randomimage1;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomimagesource1 );

if(randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML="🥇 Player 1 win";
}

else if(randomnumber2 > randomnumber1) {
    document.querySelector("h1").innerHTML="🥇 Player 2 win";
}

else{
    document.querySelector("h1").innerHTML="🏳️draw";
}