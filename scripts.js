// Variables
var timer = document.querySelector("#timer");
var questBox = document.querySelector("#question-box");
var ansChoiceDiv = document.querySelector("#answer-choice");
var startBtn = document.querySelector("#start-button");
var timerSec = 75;
var score = 0;
var answerList = document.createElement("ul");

console.log(ansChoiceDiv); // Test

// List of questions
var questionsArr = [
    {
        question: "What does HTML stand for?",
        answerChoices: ["Hype Tool Making Language", "How To Make Language", "Hyper Text Markup Language", "Home Text Marker Language"],
        answer: "Hyper Text Markup Language",
    },
    {
        question: "Which set is an Array?",
        answerChoices: ["{1,2,3,4}", "[1,2,3,4]", "(1,2,3,4)", "|1,2,3,4|"],
        answer: "[1,2,3,4]",
    },
    {
        question: "How do you make a comment in CSS?",
        answerChoices: ["/$comment$/", "//comment//", "/!comment!/", "/*comment*/"],
        answer: "/*comment*/",
    },
    {
        question: "Which language does jQuery use?",
        answerChoices: ["JavaScript", "HTML", "CSS", "C++"],
        answer: "JavaScript",
    },
    {
        question: "Which of the following is not a data type?",
        answerChoices: ["Strings", "Methods", "Numbers", "Booleans"],
        answer: "Methods",
    }
];

console.log(questionsArr[3].answerChoices[2]); // Test


// Even listener for start button

startBtn.addEventListener("click", function() {
    
    startBtn.style.display = "none"
    
    setInterval(function() {
        if(timerSec == 0) {
            clearInterval();
            timer.textContent = "Time is over."
        }
        else {
            timerSec --;
            timer.textContent = "Time: " + timerSec;
        }
    }, 1000);
    
    console.log(timerSec);
});

// Function to bring in questions

function nextQuestAns() {
    
}