//Enter Global Variables here
var myQuestions = [
    {
        question: "Who is the King of Wakanda?",
        answers: [
            "a: T'Challa",
            "b: Kang The Conqurer",
            "c: Shang Chi",
            "d: Drax"
        ],
        correctAnswer: "a: T'Challa"
    },
    {
        question: "Where is Fin Fang Foom from?",
        answers: [
            "a: Krypton",
            "b: Phantom Zone",
            "c: Maklor IV",
            "d: Apokolips"

        ],
        correctAnswer: "c: Maklor IV"
    },
    {
        question: "Who is Spider-Man?",
        answers: [
            "a: Peter Parker",
            "b: Miles Morales",
            "c: Ben Reilly",
            "d: All of the above"
        ],
        correctAnswer: "d: All of the above"
    }

];

let highscorespan = document.querySelector("#score");
let gameTimerEl = document.querySelector("#time");
let startbutton = document.querySelector("#startbutton");
let startbox = document.querySelector("#startbox");
let questionbox = document.querySelector("#questionbox");
let endbox = document.querySelector("#endbox");
let questiondescription = document.querySelector("#questiondescription")
let choices = document.querySelector("#choices")


var test = false;
var score = 0;
var quiz = {};

var gameDuration = 0;
var gameSecElapsed = 0
var time = 30

var questionIndex = 0;

startbutton.addEventListener("click", init)
function init() {
    startbox.setAttribute("class", "hide")
    questionbox.removeAttribute("class", "hide")
    timer = setInterval(timerStart, 1000);

    gameTimerEl.textContent = time;

populateQuestion();
}


function timerStart() {
    // Increment the time
    time--;

    // Give the timer element some text content
    gameTimerEl.textContent = time;

    //Create if statement to prevent negative time
    if (time <= 0){
        quizOver();
    }
}

function populateQuestion(){
    var activeQuestion = myQuestions[questionIndex];
    questiondescription.textContent = activeQuestion.question;

    activeQuestion.choices.forEach(function() {
        
        
        //create button for each choice
        //use set attribute to set the value
        //set textContent
        //add event listener


    })

}


function quizOver () {
    endbox.removeAttribute("class", "hide")
    questionbox.setAttribute("class", "hide")
}

//Hide the start screen
//Unhide Question
//Start Timer
//Call function to populate questions
