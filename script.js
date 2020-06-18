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
        app.colour1.style.backgroundColor = '#' + app.earlGrey[0];
        app.colour1.innerText = app.earlGrey[0]
        app.colour2.style.backgroundColor = '#' + app.earlGrey[1];
        app.colour2.innerText = app.earlGrey[1]
        app.colour3.style.backgroundColor = '#' + app.earlGrey[2];
        app.colour3.innerText = app.earlGrey[2]
        app.colour4.style.backgroundColor = '#' + app.earlGrey[3];
        app.colour4.innerText = app.earlGrey[3]
        app.colour5.style.backgroundColor = '#' + app.earlGrey[4];
        app.colour5.innerText = app.earlGrey[4]
    } else if (e.target.name === 'mangoSorbet') {
        app.colour1.style.backgroundColor = '#' + app.mangoSorbet[0];
        app.colour1.innerText = app.mangoSorbet[0]
        app.colour2.style.backgroundColor = '#' + app.mangoSorbet[1];
        app.colour2.innerText = app.mangoSorbet[1]
        app.colour3.style.backgroundColor = '#' + app.mangoSorbet[2];
        app.colour3.innerText = app.mangoSorbet[2]
        app.colour4.style.backgroundColor = '#' + app.mangoSorbet[3];
        app.colour4.innerText = app.mangoSorbet[3]
        app.colour5.style.backgroundColor = '#' + app.mangoSorbet[4];
        app.colour5.innerText = app.mangoSorbet[4]
    } else if (e.target.name === 'liquorice') {
        app.colour1.style.backgroundColor = '#' + app.liquorice[0];
        app.colour1.innerText = app.liquorice[0]
        app.colour2.style.backgroundColor = '#' + app.liquorice[1];
        app.colour2.innerText = app.liquorice[1]
        app.colour3.style.backgroundColor = '#' + app.liquorice[2];
        app.colour3.innerText = app.liquorice[2]
        app.colour4.style.backgroundColor = '#' + app.liquorice[3];
        app.colour4.innerText = app.liquorice[3]
        app.colour5.style.backgroundColor = '#' + app.liquorice[4];
    } else if (e.target.name === 'cookieCrumble') {
        app.colour1.style.backgroundColor = '#' + app.cookieCrumble[0];
        app.colour1.innerText = app.cookieCrumble[0]
        app.colour2.style.backgroundColor = '#' + app.cookieCrumble[1];
        app.colour2.innerText = app.cookieCrumble[1]
        app.colour3.style.backgroundColor = '#' + app.cookieCrumble[2];
        app.colour3.innerText = app.cookieCrumble[2]
        app.colour4.style.backgroundColor = '#' + app.cookieCrumble[3];
        app.colour4.innerText = app.cookieCrumble[3]
        app.colour5.style.backgroundColor = '#' + app.cookieCrumble[4];
    } else if (e.target.name === 'cinnamonHearts') {
        app.colour1.style.backgroundColor = '#' + app.cinnamonHearts[0];
        app.colour1.innerText = app.cinnamonHearts[0]
        app.colour2.style.backgroundColor = '#' + app.cinnamonHearts[1];
        app.colour2.innerText = app.cinnamonHearts[1]
        app.colour3.style.backgroundColor = '#' + app.cinnamonHearts[2];
        app.colour3.innerText = app.cinnamonHearts[2]
        app.colour4.style.backgroundColor = '#' + app.cinnamonHearts[3];
        app.colour4.innerText = app.cinnamonHearts[3]
        app.colour5.style.backgroundColor = '#' + app.cinnamonHearts[4];
    } else if (e.target.name === 'matcha') {
        app.colour1.style.backgroundColor = '#' + app.matcha[0];
        app.colour1.innerText = app.matcha[0]
        app.colour2.style.backgroundColor = '#' + app.matcha[1];
        app.colour2.innerText = app.matcha[1]
        app.colour3.style.backgroundColor = '#' + app.matcha[2];
        app.colour3.innerText = app.matcha[2]
        app.colour4.style.backgroundColor = '#' + app.matcha[3];
        app.colour4.innerText = app.matcha[3]
        app.colour5.style.backgroundColor = '#' + app.matcha[4];
    }
}

//Add an event listener to each button
const buttons = document.querySelectorAll('button');
buttons.forEach(function(button) {
    button.addEventListener('click', app.handleClick)
})