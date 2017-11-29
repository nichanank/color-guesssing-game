var colors = generateRandomColor(6)
var squares = document.querySelectorAll(".square")
var pickedColor = pickColor()
var colorDisplay = document.getElementById("colorDisplay")
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1")
var resetButton = document.querySelector("#reset")

resetButton.addEventListener("click", function() {
    colors = generateRandomColor(6)
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i]
    }
    h1.style.backgroundColor = "#232323"
})

colorDisplay.textContent = pickedColor

for(var i = 0; i < squares.length; i++) {
    //Add initial colors to squares
    squares[i].style.background = colors[i]
    //Add click listeners to squares
    squares[i].addEventListener("click", function() {
    //Grab color of clicked square
        var clickedColor = this.style.backgroundColor
        //Compare color to picked color
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!"
            changeColors(clickedColor)
            h1.style.backgroundColor = clickedColor
            resetButton.textContent = "Play Again?"
        } else {
            this.style.backgroundColor = "#232323"
            messageDisplay.textContent = "Try again"
        }
    })
}

function changeColors(color) {
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length)
    return colors[random]
}

function generateRandomColor(num) {
    var arr = []
    for(var i = 0; i < num; i++) {
        arr.push(randomColor())
    }
    return arr
}

function randomColor() {
    var red = Math.floor(Math.random() * 256)
    var blue = Math.floor(Math.random() * 256)
    var green = Math.floor(Math.random() * 256)
    return "rgb(" + red + ", " + green + ", " + blue + ")"
}

