function checkAnswer() {
  const correctAnswer = "4";

  const userAnswer = (document.querySelector('input[name="quiz"]:checked')).value;
  // const  = user_Answer.value

  feedback = document.getElementById("feedback");
  if (userAnswer === correctAnswer) {
    feedback.innerText = "Correct! Well done."
  } else {
    feedback.innerText = "That's incorrect. Try again!"
  }
}

const submit = document.getElementById("submit-answer");

submit.addEventListener("click", checkAnswer)