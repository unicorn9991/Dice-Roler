let randomNumber1 = Math.floor(Math.random(1) * 6);
let randomDiceImage = "./images/dice" + randomNumber1 + ".png";
console.log(randomNumber1);

document.querySelector("img").setAttribute("src", randomDiceImage);

let randomNumber2 = Math.floor(Math.random(1) * 6);
let randomDiceImage2 = "./images/dice" + randomNumber2 + ".png";

document.querySelector(".dice2 img").setAttribute("src", randomDiceImage2);

if (randomNumber1 < randomNumber2) {
  document.getElementById("f").innerHTML = "Player2 Won";
} else if (randomNumber1 > randomNumber2) {
  document.getElementById("f").innerHTML = "Player1 Won";
} else {
  document.getElementById("f").innerHTML = "Draw";
}
