//Create namespace
const app = {};

//Create a function to handle button clicks
app.handleClick = function () {
    console.log('clicked!')
    app.generatePalette()
}

//Add an event listener to each button
const buttons = document.querySelectorAll('button');
buttons.forEach(function(button) {
    button.addEventListener('click', handleClick)
})

app.generatePalette = function () {



} 