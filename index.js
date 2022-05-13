var randomNumber1 = Math.floor(Math.random() * 6) + 1
var randomNumber2 = Math.floor(Math.random() * 6) + 1

ranomDiceImg1 = "images/dice" + randomNumber1 + ".png"
randomDiceImg2 = "images/dice" + randomNumber2 + ".png"

document.querySelector("img.img1").setAttribute("src", ranomDiceImg1)
document.querySelector("img.img2").setAttribute("src", randomDiceImg2)

if (randomNumber1 > randomNumber2) {
  document.querySelector(".container h1").textContent = "🚩 Player 1 Wins!"
} else if (randomNumber1 < randomNumber2) {
  document.querySelector(".container h1").textContent = "Player 2 Wins! 🚩"
} else {
  document.querySelector(".container h1").textContent = "Draw!"
}
