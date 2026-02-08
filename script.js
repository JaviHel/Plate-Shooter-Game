                        // OBTAINING ELEMENTS OF THE DOM


// OBTAINING THE BUTTON AND THE PLATE

const container = document.querySelector('div'); // Selects First div

const btnThrowPlate = document.getElementById('throw-plate');

const plateOne = document.getElementById('plate-1');

const plateTwo = document.getElementById('plate-2');

const bothPlates = document.getElementsByClassName('plate-style'); // Array

const scorePts = document.getElementById('pts');

const lastScorePts = document.getElementById('last-score-pts')

const highScore = document.getElementById('high-score');


                    //  HIGH SCORE CALL

// Is needed here for the starting point

highScore.innerText = +localStorage.getItem('record');


                        // FUNCTIONS


// RANDOM FUNCTIONS TO ALTER THE PLATE POSITION, SIZE & COLORING

// RANDOM NUMBERS BETWEEN TWO NUMBERS
function rndmNum(min, max) {
    
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// RANDOMIZE COLORS

function rndmColor() {
    let digitos = '0123456789ABCDEF';
    let colorHex = '#';
    
    for (let i = 0; i < 6; i++) {
        let indiceAleatorio = Math.floor(Math.random() * 16);
        colorHex += digitos[indiceAleatorio];
    }
    return colorHex
}



// RANDOMIZE PLATE SIZE - 20px 40px 60px 80px 100px - <= 6% 10% 14% 35% 35% || >=94% 90% 84% 65% 65%

function rndmSize() {
    
    let rndmNumSize = Math.floor(Math.random() * 101);
    
    if (rndmNumSize >= 96) {
        return 25;
    }else if (rndmNumSize >= 90) {
        return 40;
    } else if (rndmNumSize >= 84) {
        return 80;
    } else if (rndmNumSize >= 65) {
        return 60; // I want the "medium" level most often
    }else {
        return 100; // I want the "veryEasy" level as often as the "medium" 
    }
}


                // PLATE 1


// FUNCTION TO RANDOMIZE THE POSITION & STYLE

function rndmPositionAndStyle1() {
    
// Show the plate
    plateOne.style.display = 'flex';
// Random Initial Position
    plateOne.style.top = 92 + '%';
    plateOne.style.left = rndmNum(2, 98) + '%';
// Random Size
    let size = rndmSize();
    plateOne.style.height = size + 'px';
    plateOne.style.width = size + 'px';
// Random Colors
    plateOne.style.backgroundColor = rndmColor();
    plateOne.style.borderColor = rndmColor();
    
// Assigning a score value to the size of the plate
    if (size == 25) {
var points = plateOne.innerText = 100;// Score-VeryHard 100-Points
    } else if (size == 40) {
var points = plateOne.innerText = 50; // Score-Hard 50-Points
    } else if ( size == 60) {
var points = plateOne.innerText = 30; // Score-Medium 30-points
    } else if ( size == 80) {
var points = plateOne.innerText = 20; // Score-Easy 20-Points
    } else {
var points = plateOne.innerText = 10; // Score-VeryEasy 10-Points
    }
}


// FUNCTION FOR ANIMATING THE FLYING PLATE

function plateAnimation1() {
    
    plateOne.animate([{
    // KEY FRAMES
        top:(rndmNum(2, 68)+ '%'),
        left:(rndmNum(2, 98)+ '%'),
            
    }],{
    // OPTIONS
        // delay: 500,
        // direction: ,
        duration: 1250, /* veryFast-800 fast-1000 normal-1500 slow-2000 verySlow-2500*/
        // easing:,
        // fill:,
        // iterations: 1,
    })
}


                // PLATE 2


// FUNCTION TO RANDOMIZE THE POSITION & STYLE

function rndmPositionAndStyle2() {
    
// Show the plate
    plateTwo.style.display = 'flex';
// Random Initial Position
    plateTwo.style.top = 92 + '%';
    plateTwo.style.left = rndmNum(2, 98) + '%';
// Random Size
    let size = rndmSize();
    plateTwo.style.height = size + 'px';
    plateTwo.style.width = size + 'px';
// Random Colors
    plateTwo.style.backgroundColor = rndmColor();
    plateTwo.style.borderColor = rndmColor();
    
// Assigning a score value to the size of the plate
    if (size == 25) {
var points = plateTwo.innerText = 100;// Score-VeryHard 100-Points
    } else if (size == 40) {
var points = plateTwo.innerText = 50; // Score-Hard 50-Points
    } else if ( size == 60) {
var points = plateTwo.innerText = 30; // Score-Medium 30-points
    } else if ( size == 80) {
var points = plateTwo.innerText = 20; // Score-Easy 20-Points
    } else {
var points = plateTwo.innerText = 10; // Score-VeryEasy 10-Points
    }
}



// FUNCTION FOR ANIMATING THE FLYING PLATE

function plateAnimation2() {
    
    plateTwo.animate([{
    // KEY FRAMES
        top:(rndmNum(2, 68)+ '%'),
        left:(rndmNum(2, 98)+ '%'),
            
    }],{
    // OPTIONS
        // delay: 500,
        // direction: ,
        duration: 1250, /* veryFast-800 fast-1000 normal-1500 slow-2000 verySlow-2500*/
        // easing:,
        // fill:,
        // iterations: 1,
    })
}



                        // EVENT LISTENERS

// BUTTON "THROW-PLATE" EVENT LISTENER

// Throws the plate animation
btnThrowPlate.addEventListener('click', plateAnimation1)
// Randomizes the position and style
btnThrowPlate.addEventListener('click', rndmPositionAndStyle1);
// Hides the button after you press it
btnThrowPlate.addEventListener('click', (e) => {
    btnThrowPlate.style.display = 'none'

// Starts the GAME OVER countdouwn
    gameOver();
})

//  PLATES EVENT LISTENERS

        // 1st PLATE

// 1st plate event listener
plateOne.addEventListener('click', (e) => {
    if (e.target == plateOne) {
// Hides the 1st plate
        plateOne.style.display = 'none';
// Shows the 2nd plate 
        plateTwo.style.display = 'flex';
        
// Randomize 2nd plate position and style
        rndmPositionAndStyle2();
// Randomize 2nd plate animation
        plateAnimation2();
        
// Button throwPlate GAME OVER countdown reset
        gameOverReset();
    }
})

        // 2nd PLATE

// 2nd plate event listener
plateTwo.addEventListener('click', (e) => {
    if (e.target == plateTwo) {
// Hides the 2nd plate
        plateTwo.style.display = 'none';
// Shows th 1st plate
        plateOne.style.display = 'flex';
// Randomize 1st plate position and style
        rndmPositionAndStyle1();
// Randomize 1st plate animation
        plateAnimation1();

// Button throwPlate GAME OVER countdown reset
        gameOverReset()
    }
})

// WINDOW EVENT LISTENER TO RESET THE GAME AND SHOW AN ALERT WITH THE PLAYER POINTS

container.addEventListener('click', (e) => {
    if (e.target == container) {
// Shows the GAME OVER alert
        alert('GAME OVER!!' + '\n' 
            + 'FINAL SCORE: ' + scorePts.innerText);
// Shows the throw button
        btnThrowPlate.style.display = 'unset';

// Reloads the page automatically
    window.location.reload()

// Reset countdouwn
        gameOverStop();
    }
})


                // GET THE POINTS


window.addEventListener('click', (e) => {
    if (e.target == plateOne) { 
// The "+" in front of the variable converts it into an integer\number like .parseInt() or parseFloat()
        scorePts.innerText = (+plateOne.textContent + +scorePts.innerText);
        // Saves the points into a session storage
        sessionStorage.setItem('lastScore', parseInt(scorePts.innerText));

    
    } else if (e.target == plateTwo) {
        scorePts.innerText = (+plateTwo.textContent + +scorePts.innerText);
        // Saves the points into a session storage
        sessionStorage.setItem('lastScore', parseInt(scorePts.innerText));
    }
})


                // SAVE HIGHSCORES

// Saves each game high-score
lastScorePts.innerText = (+scorePts.innerText + +sessionStorage.getItem('lastScore'));

// Saves the high-score 
if (+lastScorePts.innerText > highScore.innerText) {
localStorage.setItem('record', +lastScorePts.innerText)
}

highScore.innerText = 0 + +localStorage.getItem('record')



                    // TIMERS GAME OVER


// TIMERS TO RESET THE GAME BEFORE THE PLATE ANIMATION FINISHES

var timeout = '';

function gameOver() {
    
    timeout = setTimeout(logThis, 1250);
    
function logThis() {
// When the timer reaches '0' launch this functions
    alert('GAME OVER!!' + '\n' 
          + 'FINAL SCORE: ' + scorePts.innerText);
// Button Reappears
    btnThrowPlate.style.display = 'unset';
// Hides plates
    // plateOne.style.display = 'none';
    // plateTwo.style.display = 'none';
    
// Reloads the page automatically
    window.location.reload()
}
}

// Resets The Count Every Time You Shoot A Plate
function gameOverReset() {
// Clears the timer to 0 
    clearTimeout(timeout);
// Restarts the timer
    gameOver();
}

function gameOverStop() {
// Clears the timer to 0 
    clearTimeout(timeout);
}

/********

FINISHED: 25/9/23 - 11:30 AM

JAVI VEGERDO (JAYDROSHIN)

********/