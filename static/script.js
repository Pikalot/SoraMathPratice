let currentAnswer;
let correctAddCount = 0;
let totalAddCount = 0;
let correctSubCount = 0;
let totalSubCount = 0;
let lastQuestion = '';

function generateAdditionQuestion() {
    lastQuestion = 'addition';
    const num1 = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 10
    const num2 = Math.floor(Math.random() * 100) + 1;
    currentAnswer = num1 + num2; // For addition questions
    document.getElementById('question').innerHTML = `What is ${num1} + ${num2}?`;
}

function generateSubtractionQuestion() {
    lastQuestion = 'subtraction';
    const num1 = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 10
    const num2 = Math.floor(Math.random() * 100) + 1;
    if (num2 > num1) { // Swap if num 2 is greated than num 1
        const temp = num1;
        num1 = num2;
        num2 = temp;
    }
    currentAnswer = num1 - num2; // For addition questions
    document.getElementById('question').innerHTML = `What is ${num1} - ${num2}?`;
}

function checkAnswer() {
  const userAnswer = parseInt(document.getElementById('answer').value);
  const cheerImage = document.getElementById('cheerImage');
  const submitButton = document.querySelector('button'); // Assuming there is only one button, otherwise give it an ID and select by ID
  const answerInput = document.getElementById('answer');

  if (userAnswer === currentAnswer) {
    document.getElementById('feedback').innerHTML = 'Correct! Great job!';
    document.getElementById('correctSound').play(); // Play the correct answer sound
    if (lastQuestion === 'addition') {
      correctAddCount++;
    }
    if (lastQuestion === 'subtraction') {
        correctSubCount++;
      }
  }
  else {
    document.getElementById('feedback').innerHTML = 'Oops! Try again.';
    document.getElementById('wrongSound').play(); // Play the incorrect answer sound
  }

  if (lastQuestion === 'addition') {
    totalAddCount++;
  }
  if (lastQuestion === 'subtraction') {
    totalSubCount++;
  }
  if (correctAddCount >= 5) {
    // User has answered 5 questions correctly
    passScore = correctAddCount / totalAddCount * 100;
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
      correctAddCount = 0; // Reset correct count
      totalAddCount = 0;
    }, 9000);  
  }
  if (correctSubCount >= 5) {
    // User has answered 5 questions correctly
    passScore = correctSubCount / totalSubCount * 100;
    document.getElementById('feedback').innerHTML = 'You will make it to a Hashira soon! Your score is: ';
    document.getElementById('result').innerHTML = passScore.toFixed(2) + '%';
    subImage.style.display = 'block'; // Show the cheering image
    answerInput.disabled = true; // Disable the input field
    submitButton.disabled = true; // Disable the submit button
    document.getElementById('passSound').play(); // Play the correct pass song

    setTimeout(function() {
      subImage.style.display = 'none'; // Hide the cheering image after 9 seconds
      var correctSound = document.getElementById('passSound');
      correctSound.pause(); // Pause the sound
      correctSound.currentTime = 0; // Rewind to the start
      answerInput.disabled = false; // Re-enable the input field
      submitButton.disabled = false; // Re-enable the submit button
      correctAddCount = 0; // Reset correct count
      totalAddCount = 0;
    }, 9000);
  }
  generateLastQuestion(); // Generate a new question
  document.getElementById('answer').value = ''; // Clear the answer field

}

function generateLastQuestion() {
  if (lastQuestion === 'addition') {
    generateAdditionQuestion();
  }
  else if (lastQuestion === 'subtraction') {
    generateSubtractionQuestion();
  }
  else if (lastQuestion === 'comparison') {
    generateComparisonQuestion();
  }
  else {
    // Default or error handling
    console.log('Unknown question type. Defaulting to addition.');
    generateAdditionQuestion();
  }
}

window.onload = generateQuestion; // Generate the first question when the page loads
document.getElementById('cheerImage').style.display = 'none';
