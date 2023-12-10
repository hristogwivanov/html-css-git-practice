// const redBox = document.querySelector("div.red-box");

// redBox.onclick = function (event) {
//     console.log("You clicked the box!");
//     redBox.onclick = null;
// }

// redBox.onclick = function (event) {
//     this.style.background = "blue";
// }

// redBox.addEventListener(
// 'click'
// , function (event){
//     console.log("You clicked the box!");
// }, 
// {
//     once: true,
//     capture: false,
//     passive: false,
// }
// );

// function changeBGtoBlue(event) {
//     this.style.background = "blue";
//     console.log("You changed the color to blue!");
// }

// redBox.addEventListener('click', changeBGtoBlue);

// redBox.removeEventListener('click', changeBGtoBlue);

// console.log({redBox});

// redBox.addEventListener('mouseover', function(event){
//     console.log(event);
// });

// redBox.addEventListener('click', function(event){
//     console.log(event);
// });

// redBox.addEventListener('keydown', function(event){
//     preventDefault();
//     console.log(event);
// });

// const testInput = document.querySelector('#test');

// testInput.addEventListener('mouseover', function(event){
//     console.log(event);
// });

// testInput.addEventListener('keyup', function(event){
//     preventDefault();
//     console.log(event);
// });

// const form = document.querySelector('form');
// form.addEventListener('submit', function (event){
//     event.preventDefault();
// });

// const div = document.querySelector("div");
// const p = div.querySelector("p");

// function foo(event) {
//     console.log(event, "Div")
// }

// div.addEventListener("click", foo, {
//         capture: true,
//     });

// div.removeEventListener('click', foo , {
//     capture: true,
// })
// p.addEventListener("click", function (event) {
//     console.log(event, "p");
// });

// const container = document.querySelector(".container");

// container.addEventListener("mouseover", function(event) {
//     const target = event.target;

//     if(target.classList.contains('item')){
//         target.style.background = `#${Math.floor(Math.random() * 1600000).toString(16)}`
//     }
// })

/**
 * HANGMAN
 */
const form = document.querySelector("form");
const placeholderContainer = document.querySelector('div.placeholder');
const attemptsPlaceholder = document.querySelector('div.attempts span');
const correctLettersContainer = document.querySelector("div.correct-letters p.correct");
const wrongLettersContainer = document.querySelector("div.wrong-letters p.wrong");

let hiddenWord = '';
let attemptsCount = 0;
const guessedLetters = [];

// const words = ["Hello", "Submit", "Events", "Someone"];

// const word = words[Math.floor(Math.random() * words.length)];
// console.log(word);

form.addEventListener('submit', function (event) {
    event.preventDefault();
    hiddenWord = this.querySelector('#hiddenword').value;
    this.querySelector('input[type="submit"').disabled = true;
    setPlaceholder(hiddenWord);
    document.body.addEventListener('keypress', handleKeyPress);
});

function setPlaceholder(word) {
    for(let char of word){
        const placeholder = document.createElement('span');
        placeholder.textContent = "_";
        placeholderContainer.append(placeholder);
    }
}

function handleKeyPress(event) {
    const { keyCode, key } = event;
    if (!(keyCode >=  97 && keyCode <= 122)) {
        alert('Invalid letter');
        return;
    }


    if(guessedLetters.includes(key)) {
        alert('Letter already used!');
        return;
    }

    guessedLetters.push(key);

    if(hiddenWord.includes(key)){
        // unravel the position of the letter
        correctLettersContainer.append(key);
        const placeholders = placeholderContainer.querySelectorAll("span");
        for(let i = 0; i < hiddenWord.length; i++){
            if(key === hiddenWord[i]) {
                placeholders[i].textContent = key;
            }
        } 
    } else {
        // Add the letter to the wrong guessed list
        wrongLettersContainer.append(key);
        attemptsCount++;
        attemptsPlaceholder.textContent = attemptsCount;
    }
    checkProgress();
}

function checkProgress(){
    if(attemptsCount === 8){
        alert("You lost the word was " + hiddenWord);
        document.body.removeEventListener("keypress", handleKeyPress);
        return;
    }

    const placeholders = Array.from(placeholderContainer.querySelectorAll("span"));
    const lettersleft = placeholders.filter(item => item.textContent === "_")
    if (lettersleft.length === 0){
        alert('You guessed correctly the word was: ' + hiddenWord);
        return;
    }
}