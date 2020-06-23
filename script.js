//Create namespace
const app = {};

//Preselected colour palettes
app.earlGrey = ["C4B1AE", "B4ADA3", "BFB59E", "CAB7A2", "C4C9C7"]
app.mangoSorbet = ["F7DF3E", "FACC6B", "FFD131", "F5B82E", "F4AC32"]
app.liquorice = ["731C29", "341F1A", "433846", "75625C", "2C1D1A"]
app.cookieCrumble = ["050507", "B6A695", "655034", "FAEBD2", "FDF6E0"]
app.cinnamonHearts = ["91191A", "CC2D27", "DC413C", "F84D48", "C33E41"]
app.matcha = ["BDBB40", "F1ECC6", "BFD38E", "A1CC74", "9AB267"]

app.colour1 = document.querySelector('.colour1');
app.colour2 = document.querySelector('.colour2');
app.colour3 = document.querySelector('.colour3');
app.colour4 = document.querySelector('.colour4');
app.colour5 = document.querySelector('.colour5');

//Create a function to handle button clicks
app.handleClick = function (e) {
    console.log(e.target.name)


    if (e.target.name === 'earlGrey') {
        for (let i = 0;i<5; i++ ) {
            app['colour' + (i + 1)]['style']['backgroundColor'] = '#' + app.earlGrey[i];
            app['colour' + (i + 1)]['innerText'] = app.earlGrey[i];
        }
    } else if (e.target.name === 'mangoSorbet') {
        
        for (let i = 0;i<5; i++ ) {
            app['colour' + (i + 1)]['style']['backgroundColor'] = '#' + app.mangoSorbet[i];
            app['colour' + (i + 1)]['innerText'] = app.mangoSorbet[i];
        }
    } else if (e.target.name === 'liquorice') {
        for (let i = 0; i < 5; i++) {
            app['colour' + (i + 1)]['style']['backgroundColor'] = '#' + app.liquorice[i];
            app['colour' + (i + 1)]['innerText'] = app.liquorice[i];
        }
    } else if (e.target.name === 'cookieCrumble') {
        for (let i = 0; i < 5; i++) {
            app['colour' + (i + 1)]['style']['backgroundColor'] = '#' + app.cookieCrumble[i];
            app['colour' + (i + 1)]['innerText'] = app.cookieCrumble[i];
        }
    } else if (e.target.name === 'cinnamonHearts') {
        for (let i = 0; i < 5; i++) {
            app['colour' + (i + 1)]['style']['backgroundColor'] = '#' + app.cinnamonHearts[i];
            app['colour' + (i + 1)]['innerText'] = app.cinnamonHearts[i];
        }
    } else if (e.target.name === 'matcha') {
        for (let i = 0; i < 5; i++) {
            app['colour' + (i + 1)]['style']['backgroundColor'] = '#' + app.matcha[i];
            app['colour' + (i + 1)]['innerText'] = app.matcha[i];
        }
    }
}

//Add an event listener to each button
const buttons = document.querySelectorAll('button');
buttons.forEach(function(button) {
    button.addEventListener('click', app.handleClick)
})