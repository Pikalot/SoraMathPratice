let currentAnswer1;
let currentAnswer2;
let largeNumber;
let correctCount = 0;
let totalCount = 0;
let correctSubCount = 0;
let totalSubCount = 0;
let lastQuestion = '';
let num1;
let num2;
let num3;
let num4;

function generateQuestion() {
  let random = Math.floor(Math.random() * 2);
  switch (random) {
    case 0: {
      //lastQuestion = 'subtraction';
      num1 = Math.floor(Math.random() * 20) + 1; // Random number between 1 and 20
      num2 = Math.floor(Math.random() * 20) + 1;
      num3 = Math.floor(Math.random() * 20) + 1; // Random number between 1 and 20
      num4 = Math.floor(Math.random() * 20) + 1;
      if (num2 > num1) { // Swap if num 2 is greated than num 1
          const temp = num1;
          num1 = num2;
          num2 = temp;
      }
      if (num4 > num3) { // Swap if num 2 is greated than num 1
          const temp = num4;
          num4 = num3;
          num3 = temp;
      }
      currentAnswer1 = num1 - num2; // For subtraction questions
      currentAnswer2 = num3 - num4;
      document.getElementById('question1').innerHTML = `What is: ${num1} - ${num2}?`;
      document.getElementById('question2').innerHTML = `And, what is ${num3} - ${num4}?`;
      break;
      }
    case 1: { 
      //lastQuestion = 'addition';
      num1 = Math.floor(Math.random() * 20) + 1; // Random number between 1 and 20
      num2 = Math.floor(Math.random() * 20) + 1;
      num3 = Math.floor(Math.random() * 20) + 1; // Random number between 1 and 20
      num4 = Math.floor(Math.random() * 20) + 1;
      currentAnswer1 = num1 + num2; // For addition questions
      currentAnswer2 = num3 + num4;
      document.getElementById('question1').innerHTML = `What is: ${num1} + ${num2}?`;
      document.getElementById('question2').innerHTML = `And, what is ${num3} + ${num4}?`;
      break;
   }  
  }
  
  if (currentAnswer1 < currentAnswer2) {
    largeNumber = currentAnswer2;
  }
  else {
    largeNumber = currentAnswer1;
  }
  document.getElementById('question').innerHTML = `Which number is greater?`;
}

function checkAnswer() {
  const userAnswer1 = parseInt(document.getElementById('answer1').value);
  const userAnswer2 = parseInt(document.getElementById('answer2').value);
  const userAnswer = parseInt(document.getElementById('answer').value);
  const cheerImage = document.getElementById('cheerImage');
  const submitButton = document.querySelector('button');
  const answerInput1 = document.getElementById('answer1');
  const answerInput2 = document.getElementById('answer2');
  const answerInput = document.getElementById('answer');


  if (userAnswer1 === currentAnswer1 && userAnswer2 === currentAnswer2 && userAnswer === largeNumber) {
    document.getElementById('feedback').innerHTML = 'Bingo! Excellent job!';
    document.getElementById('correctSound').play(); // Play the correct answer sound
    correctCount++;
  }
  else {
    document.getElementById('feedback').innerHTML = 'Uh oh! Try again.';
    document.getElementById('wrongSound').play(); // Play the incorrect answer sound
  }
  
  totalCount++;
  
  if (correctCount >= 5) {
    // User has answered 5 times correctly wins the game
    passScore = correctCount / totalCount * 100;
    document.getElementById('feedback').innerHTML = 'Excellent job! Your score is: ';
    document.getElementById('result').innerHTML = passScore.toFixed(2) + '%';
    cheerImage.style.display = 'block'; // Show the cheering image
    answerInput.disabled = true; // Disable the input field
    answerInput1.disabled = true;
    answerInput2.disabled = true;
    submitButton.disabled = true; // Disable the submit button
    document.getElementById('passSound').play(); // Play the correct pass song
    correctCount = 0; // Reset count
  }

  generateQuestion();
  document.getElementById('answer1').value = ''; // Clear the answer field
  document.getElementById('answer2').value = '';
  document.getElementById('answer').value = '';
}

window.onload = generateQuestion; // Generate the first question when the page loads
document.getElementById('cheerImage').style.display = 'none';
