//for 1st dice
var randomNumber1 = Math.floor(Math.random()*7);

var src1 = "./images/dice"+randomNumber1+".png";

document.querySelector(".img1").setAttribute("src" , src1);

// for 2nd dice
var randomNumber2 = Math.floor(Math.random()*7);

var src2 = "./images/dice"+randomNumber2+".png";

document.querySelector(".img2").setAttribute("src" , src2);

if(randomNumber1>randomNumber2){
    document.querySelector(".container h1").innerHTML = "🚩 Player1 Wins";
}

else if(randomNumber1<randomNumber2){
    document.querySelector(".container h1").innerHTML = "Player2 Wins 🚩 ";
}
 
else{
    document.querySelector(".container h1").innerHTML = "Draw";
}