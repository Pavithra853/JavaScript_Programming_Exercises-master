// Displaying a multiple choice question

var displayQuestion = function (questionAndAnswer) {
    var options = [ "A", "B", "C", "D", "E" ];
    
    console.log(questionAndAnswer.question);
    
    questionAndAnswer.answers.forEach(
      function (answer, i) {
        console.log(options[i] + " - " + answer);
      }
    );
  };
  
  var question1 = {
    question : "What is the capital of France?",
    answers : [
      "Bordeaux",
      "F",
      "Paris",
      "Brussels"
    ],
    correctAnswer : "Paris"
  };
  
  displayQuestion(question1);
  
  var question2 = {
    question: "What is the largest planet in our solar system?",
    answers: [
      "Earth",
      "Jupiter",
      "Mars",
      "Venus"
    ],
    correctAnswer: "Jupiter"
  };
  
  var question3 = {
    question: "What is the smallest unit of life?",
    answers: [
      "Atom",
      "Molecule",
      "Cell",
      "Organ"
    ],
    correctAnswer: "Cell"
  };

  var questions = [question1, question2, question3];

  questions.forEach(displayQuestion);

  var displayQuestion = function (questionAndAnswer) {
    var options = ["A", "B", "C", "D", "E"];
    
    console.log(questionAndAnswer.question);
    
    questionAndAnswer.answers.forEach(function (answer, i) {
      console.log(options[i] + " - " + answer);
    });
  };
  
  var question1 = {
    question: "What is the capital of France?",
    answers: [
      "Bordeaux",
      "F",
      "Paris",
      "Brussels"
    ],
    correctAnswer: "Paris"
  };
  
  var question2 = {
    question: "What is the largest planet in our solar system?",
    answers: [
      "Earth",
      "Jupiter",
      "Mars",
      "Venus"
    ],
    correctAnswer: "Jupiter"
  };
  
  var question3 = {
    question: "What is the smallest unit of life?",
    answers: [
      "Atom",
      "Molecule",
      "Cell",
      "Organ"
    ],
    correctAnswer: "Cell"
  };
  
  var questions = [question1, question2, question3];
  
  questions.forEach(displayQuestion);
  
  // To display a particular question, you can call:
  displayQuestion(question2);
  
  /* Further Adventures
   *
   * 1) Add two more question objects.
   *
   * 2) Create an array with your question objects.
   *
   * 3) Use forEach to call displayQuestion on
   *    each of your questions.
   *
   * 4) Can you execute a command at the prompt
   *    to display a particular question?
   */