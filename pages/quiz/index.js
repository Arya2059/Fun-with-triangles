const quizForm = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector("#submit");
const output = document.querySelector("#output");

const correctAnswers = ["90°", "right angled", "yes", "yes", "5cm"];

submitAnswerBtn.addEventListener("click", calculateScore);

function calculateScore() {
  let score = 0;
  let index = 0;
  const formResults = new FormData(quizForm);
  //FormData is an API
  for (let entry of formResults.entries()) {
    console.log(entry);
  }
 for (let value of formResults.values()) {
    // console.log(value)
    if (value === correctAnswers[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  console.log(score);

  // console.log(score)
  output.innerText = `Your score is: ${score} /5`;
}