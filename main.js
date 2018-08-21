//Create an array of strings which will be puzzle words
    
var words = ['HEYIMFALLING', 'WINTERISCOLD', 'EGGSBENEDICT', 'HEYWHATSUPYO',
            'DAMNYOUGOTIT', 'HYPERCOMPLEX', 'PSYCHOBABBLE', 'HYPOCALCEMIC', 
            'UNAPPETIZING', 'JAVASCRIPTOR', 'HVRZXYQWJVZQ', 'HELPMEIMDUMB', 
            'HEYIMFAILING', 'GETLOSTCREEP', 'SUPERMANFLYS', 'SUMMERISWARM',
            'SPRINGISNICE', 'FALLISBREEZY', 'FOOTBALLGOOD', 'SOCCERISDUMB',
            'TENNISISLAME', 'GUESSTHEWORD', 'VELOCIRAPTOR', 'GRANDPARENTS'];

//Multiply array length by random fraction and floor divsion
//to get index of randome word from 0-indexmax

var randomWord = words[Math.floor(Math.random() * words.length)];

//Object which holds clues

var obj = {HEYIMFALLING: 'GOOD TO SAY BEFORE YOU FALL', WINTERISCOLD: 'WHAT IS WINTER?', 
EGGSBENEDICT: 'FANCYMAN EGGS', HEYWHATSUPYO: 'GREETING', DAMNYOUGOTIT: "YOU'LL NEVER GUESS THIS ONE", 
HYPERCOMPLEX: 'LIKE SUPER COMPLEX', PSYCHOBABBLE: 'HOW JAVASCRIPT LOOKS TO ME', 
HYPOCALCEMIC: 'NOT ENOUGH CALCIUM', UNAPPETIZING: 'FOOD TRUCK DOWNSTAIRS',
JAVASCRIPTOR: 'SOMEONE WHO WRITES JAVASCRIPT', HVRZXYQWJVZQ: 'RANDOM LETTERS YOU WON\'\T GUESS', 
HELPMEIMDUMB: 'WHAT TO SAY WHEN STUCK', HEYIMFAILING: 'GOOD TO SAY BEFORE YOU FAIL', 
GETLOSTCREEP: 'BAD DATE', SUPERMANFLYS: 'FUNCTION OF SUPERMAN', SUMMERISWARM: 'WHAT IS SUMMER?',
SPRINGISNICE: 'WHAT IS SPRING?', FALLISBREEZY: 'WHAT IS FALL?', FOOTBALLGOOD: 'WHAT IS FOOTBALL?',
SOCCERISDUMB: 'WHAT IS SOCCER?', TENNISISLAME: 'WHAT IS TENNIS?', GUESSTHEWORD: 'GUESS THE WORD',
VELOCIRAPTOR: 'TYPE OF DINOSAUR', GRANDPARENTS: 'PARENTS PARENTS'};

//Clues is displayed in an h2-> use bracket notation to get value of randomword key

document.querySelector('h2').innerHTML = "CLUE:  " + obj[randomWord];

//set up some global variables. function splits string into an array
//then for loop to see if letter clicked matches letter at that index
//and puts letter in the proper block.  A counter starts will move to
//a new game if you complete puzzle or hit valid letters too many times

var store;
var counter = 0;
function checkLetter(guessLetter) {
    var game = randomWord;
    var gameArr = randomWord.split('')
    for (var i = 0; i < game.length; i++) {
        if (guessLetter == game[i]) {
            document.querySelector('#block' + i).innerHTML = guessLetter;
            counter++
        }
        if (counter === game.length) {
            document.querySelector('#lose').innerHTML = 'NEXT GAME!';
            setTimeout(function() {
                location.reload()
            }, 2400)
        }
        if (counter > game.length) {
            document.querySelector('#lose').innerHTML = 'YOU LOSE!';
            setTimeout(function() {
                location.reload()
            }, 2400)
        }
    }
}

// this listens for a keypress and coverts it to uppercase
// then we check this letter in above checkLetter fx

document.addEventListener('keypress', function(event){
    store = event.key.toUpperCase();
    checkLetter(store);
    
})

//kind of a joke

function hint() {
    document.querySelector('#joke').innerHTML ="Smash Every Key";
}

//button to skip to next game

function nextGame() {
    location.reload();
}

