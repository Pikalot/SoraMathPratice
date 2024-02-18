let currentAnswer;
let correctCount = 0;
let totalCount = 0;

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
    const num2 = Math.floor(Math.random() * 10) + 1;
    currentAnswer = num1 + num2; // For addition questions
    document.getElementById('question').innerHTML = `What is ${num1} + ${num2}?`;
}

function checkAnswer() {
  const userAnswer = parseInt(document.getElementById('answer').value);
  const cheerImage = document.getElementById('cheerImage');
  const submitButton = document.querySelector('button'); // Assuming there is only one button, otherwise give it an ID and select by ID
  const answerInput = document.getElementById('answer');

  if (userAnswer === currentAnswer) {
    document.getElementById('feedback').innerHTML = 'Correct! Great job!';
    document.getElementById('correctSound').play(); // Play the correct answer sound
    correctCount++;
    }
  else {
    document.getElementById('feedback').innerHTML = 'Oops! Try again.';
    document.getElementById('wrongSound').play(); // Play the incorrect answer sound
  }

  totalCount++;
  if (correctCount >= 5) {
    // User has answered 5 questions correctly
    passScore = correctCount / totalCount * 100;
    document.getElementById('feedback').innerHTML = 'Awesome! Your score is: ';
    document.getElementById('result').innerHTML = passScore.toFixed(2) + '%';
    cheerImage.style.display = 'block'; // Show the cheering image
    answerInput.disabled = true; // Disable the input field
    submitButton.disabled = true; // Disable the submit button
    document.getElementById('passSound').play(); // Play the correct pass song

    setTimeout(function() {
      cheerImage.style.display = 'none'; // Hide the cheering image after 9 seconds
      var correctSound = document.getElementById('passSound');
      correctSound.pause(); // Pause the sound
      correctSound.currentTime = 0; // Rewind to the start
      answerInput.disabled = false; // Re-enable the input field
      submitButton.disabled = false; // Re-enable the submit button
      correctCount = 0; // Reset correct count
      generateQuestion(); // Generate a new question
    }, 9000);  
  
    // Reset the count if needed or handle the end of the game
    correctCount = 0; // Reset or remove this line if you're handling the end of the game differently
  }
  else {
    generateQuestion(); // Generate a new question
    document.getElementById('answer').value = ''; // Clear the answer field
  }
}

window.onload = generateQuestion; // Generate the first question when the page loads
document.getElementById('cheerImage').style.display = 'none';
