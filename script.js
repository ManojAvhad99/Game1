function play(){
var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomDiceImage1 = randomNumber1 + ".png";
var randomImageSource1 = "images/" + randomDiceImage1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src" , randomImageSource1);


var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImage2 = randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player1 Win🚩";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "Player2 Win 🚩";

}
else{
    document.querySelector("h1").innerHTML = "Draw";
}
}