let currentAnswer;

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 10
    const num2 = Math.floor(Math.random() * 100) + 1;
    currentAnswer = num1 + num2; // For addition questions
    document.getElementById('question').innerHTML = `What is ${num1} + ${num2}?`;
}

function checkAnswer() {
  const userAnswer = parseInt(document.getElementById('answer').value);
  const cheerImage = document.getElementById('cheerImage');
  
  if (userAnswer === currentAnswer) {
        document.getElementById('feedback').innerHTML = 'Correct! Great job!';
        cheerImage.style.display = 'block'; // Show the cheering image

    setTimeout(function() {
        cheerImage.style.display = 'none'; // Hide the cheering image after 5 seconds
    }, 5000);
    } 
  else {
        document.getElementById('feedback').innerHTML = 'Oops! Try again.';
        cheerImage.style.display = 'none'; // Hide the cheering image
    }
    generateQuestion(); // Generate a new question
    document.getElementById('answer').value = ''; // Clear the answer field
}

window.onload = generateQuestion; // Generate the first question when the page loads
document.getElementById('cheerImage').style.display = 'none';
