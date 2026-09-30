# 📘 Assignment: Interactive Web Pages with JavaScript

## 🎯 Objective

Build a small multiple-choice quiz using JavaScript to update a web page in response to user actions. Practice selecting HTML elements, creating buttons, handling click events, and updating page content.

## 📝 Tasks

### 🛠️ Display a question and its choices

#### Description
Open `starter-code.html` in a web browser. Complete `showQuestion()` in `script.js` so the quiz displays the current question and a button for each answer choice.

#### Requirements
Completed program should:

- Display the current question and all of its answer choices.
- Show the question number and total number of questions.
- Create each answer choice as a button the user can click.

### 🛠️ Check answers and keep score

#### Description
Complete `checkAnswer()` so the quiz responds when a student selects an answer. After answering, let the student move to the next question.

#### Requirements
Completed program should:

- Tell the student whether the selected answer is correct.
- Increase the score only when the selected answer is correct.
- Disable the answer buttons after a choice and show the Next Question button.
- Display the next question when the Next Question button is selected.

### 🛠️ Show results and play again

#### Description
Complete `showResults()` and `restartQuiz()` to finish the quiz and allow another attempt.

#### Requirements
Completed program should:

- Show the student's final score after the last question.
- Hide the quiz questions while showing the results.
- Restart at the first question with a score of zero when Play Again is selected.