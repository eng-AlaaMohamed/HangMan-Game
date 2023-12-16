// Generate letters
let leters = 'abcdefghijklmnopqrstuvwxyz';
// Transformation letters to array
let letersArr = Array.from (leters);
//get the parent element of letters
let getLetters = document.querySelector ('.letters');
//Loop on get Letters to create span 
letersArr.forEach( (leter) => {
    let span = document.createElement('span');
    span.className = "letter";
    let spaContent = document.createTextNode(leter);
    span.appendChild(spaContent);
    getLetters.appendChild(span);
})
// Object Of Words + Gategorise 
let words = {
    programming:["php", "javascript", "go", "scala", "fortran", "mysql", "python", "r"],
    movise: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
    pepole: ["Alpert Enisteni", "Hichcock", "Alexander", "Cleopatra", "Mahtam Ghandi"],
    countrise: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
}
//Get Random Number from Keys
let allKeys = Object.keys(words);
let randomNumber = Math.floor(Math.random() * allKeys.length);
let randomName = allKeys[randomNumber];
// Add Gategorise to the DOcument
let wordOf = document.querySelector(".gategorey");
wordOf.innerHTML = randomName;
//Get Random Number Propertes Value
let propValue =  words[randomName];
let randomNumberPropValue = Math.floor(Math.random() * propValue.length);
//Arry From  Random Number Property Value
let arryFromPropValue = Array.from(propValue[randomNumberPropValue]);
//Loop on chosen word to create span by number letters word
arryFromPropValue.forEach( () => {
    //create element to put the guessed letters inside it
    let letterGuess = document.querySelector('.letter-guess');
    //create span to put the letter inside it
    let span = document.createElement('span');
    span.className = 'Theletters-of-theword';
    letterGuess.appendChild(span);
})
// Wrong Number
let wrongNumber = 0;
let rightNumber = 0;
//Check Click
document.addEventListener('click', (e) => {
    let theState = false;
    if ( e.target.className === 'letter') {
        // Add Class Clicked
        e.target.classList.add('clicked'); 
        //Get Clicked Letter
        let getLetterClicked = e.target.innerHTML.toLowerCase(); 
        let theChossinWord = Array.from(propValue[randomNumberPropValue].toLowerCase());
        //Loop For Letter Word And Combare to Letter Clicked
        theChossinWord.forEach ((wordLetter, wordIndex) => {
          if (wordLetter == getLetterClicked) {
            theState = true;
            let letterGuess = document.querySelectorAll('.letter-guess span');
            letterGuess.forEach((span, spanIndex) => {
                if (wordIndex == spanIndex) {
                    span.innerHTML = getLetterClicked;
                    }
                })
            }   
         })      
        if (theState !== true) {
        wrongNumber++;
        document.querySelector(".the-drawing").classList.add(`wrong-${wrongNumber}`);
    }
    //music
    if (theState == true) {
        document.getElementById("music-correct").play();
    } else {
        document.getElementById("music-wrong").play();
    };

        if (wrongNumber == 9) {
            getLetters.classList.add('finshed');
            EndGame();
            document.getElementById("music-end").play();
        } 
        //correct choice case
        if (theState === true) {
            rightNumber++;
        }
        //Call function own by gain
        if (rightNumber == theChossinWord.length) {
            getLetters.classList.add('finshed');
            congratulations();
            document.getElementById("music-gain").play();
        }
    }
})

// Own by End Game
function EndGame() {
    let div = document.createElement('div');
    div.className = 'game-over';
    let divContent = document.createTextNode(`Game Over The Word Is ${propValue[randomNumberPropValue]}`)
    div.appendChild(divContent)
    document.body.appendChild(div);
}

//Own by congratulations

function congratulations () {
    let div = document.createElement('div');
    div.className = 'congratulations';
    let divContent = document.createTextNode(`congratulations`);
    div.appendChild(divContent);
    document.body.appendChild(div);
}



