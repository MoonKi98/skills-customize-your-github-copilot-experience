const questions = [
  {
    prompt: "Which language adds interactivity to a web page?",
    answers: ["HTML", "JavaScript", "CSS"],
    correctAnswer: 1,
  },
  {
    prompt: "Which HTML element is commonly used for a clickable control?",
    answers: ["<button>", "<title>", "<footer>"],
    correctAnswer: 0,
  },
  {
    prompt: "Which event happens when a user presses a button?",
    answers: ["load", "click", "change-color"],
    correctAnswer: 1,
  },
];

const progressElement = document.querySelector("#progress");
const scoreElement = document.querySelector("#score");
const questionElement = document.querySelector("#question");
const answerButtonsElement = document.querySelector("#answer-buttons");
const feedbackElement = document.querySelector("#feedback");
const nextButton = document.querySelector("#next-button");
const quizPanel = document.querySelector("#quiz-panel");
const resultsPanel = document.querySelector("#results-panel");
const finalScoreElement = document.querySelector("#final-score");
const restartButton = document.querySelector("#restart-button");

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
  // TODO: Show the current question, progress, and one button for each answer.
}

function checkAnswer(selectedAnswerIndex) {
  // TODO: Check the answer, update feedback and score, then enable Next Question.
}

function showNextQuestion() {
  currentQuestionIndex += 1;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  // TODO: Show the final score and hide the quiz panel.
}

function restartQuiz() {
  // TODO: Reset the score and question, then show the quiz panel again.
}

nextButton.addEventListener("click", showNextQuestion);
restartButton.addEventListener("click", restartQuiz);
showQuestion();