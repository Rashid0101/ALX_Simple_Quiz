// Define the checkAnswer function
function checkAnswer() {
  // Declare the correct answer
  const correctAnswer = "4";

  // Retrieve the user's selected answer
  const userAnswer = document.querySelector('input[name="quiz"]:checked').value;

  // Get the feedback element
  const feedback = document.getElementById("feedback");

  // Compare the user's answer with the correct answer and provide feedback
  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
  } else {
    feedback.textContent = "That's incorrect. Try again!";
  }
}

// Retrieve the submit button and add an event listener
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
