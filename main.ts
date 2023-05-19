input.onButtonPressed(Button.A, function () {
    Score += 1
})
input.onButtonPressed(Button.AB, function () {
    Score = 0
})
let Score = 0
Score = 0
basic.forever(function () {
    basic.showNumber(Score)
})
