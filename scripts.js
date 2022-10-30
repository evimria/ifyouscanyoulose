var textfeld2 = document.getElementById("textfeld2")

var zufallsbutton = document.getElementById("zufallsbutton")

function randomAction() {
    textfeld2.value = getRandomIntInclusive(1,10)
    var randomColourValue1 = getRandomIntInclusive(0,255)
    var randomColourValue2 = getRandomIntInclusive(0,255)
    var randomColourValue3 = getRandomIntInclusive(0,255)
    var blackContainer = document.getElementById("black")
    blackContainer.style.backgroundColor = "rgb(" + randomColourValue1 + "," + randomColourValue2 + "," + randomColourValue3 + ")"
}

function getRandomIntInclusive(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}
