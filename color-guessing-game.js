var numSquares = 6
var colors = generateRandomColors(6)
var squares = document.querySelectorAll(".square")
var pickedColor = pickColor()
var colorDisplay = document.getElementById("colorDisplay")
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1")
var resetButton = document.querySelector("#reset")
var easyBtn = document.querySelector("#easyBtn")
var hardBtn = document.querySelector("#hardBtn")

easyBtn.addEventListener("click", function() {
    easyBtn.classList.add("selected")
    hardBtn.classList.remove("selected")
    numSquares = 3
    colors = generateRandomColors(numSquares)
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor
    for(var i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.background = colors[i]
        } else {
            squares[i].style.display = "none"
        }
    }
})

hardBtn.addEventListener("click", function() {
    hardBtn.classList.add("selected")
    easyBtn.classList.remove("selected")
    numSquares = 6
    colors = generateRandomColors(numSquares)
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i]
        squares[i].style.display = "block"
    }
})

resetButton.addEventListener("click", function() {
    colors = generateRandomColors(numSquares)
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i]
    }
    h1.style.backgroundColor = "steelblue"
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

function generateRandomColors(num) {
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

