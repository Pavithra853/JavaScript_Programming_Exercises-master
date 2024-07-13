// Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div.

// 1. Even numbers background is green
// 2. Odd numbers background is yellow
// 3. Prime numbers background is red

<html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Number Generator</title>
  <style>
    .number {
      display: inline-block;
      width: 50px;
      height: 50px;
      margin: 5px;
      text-align: center;
      line-height: 50px;
      font-size: 18px;
      font-weight: bold;
    }
    .green { background-color: green; }
    .yellow { background-color: yellow; }
    .red { background-color: red; }
  </style>
</head>
<body>
  <div id="numberContainer"></div>

  <script>
    // JavaScript code will go here
    document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('numberContainer');

  // Function to check if a number is prime
  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
      i += 6;
    }
    return true;
  }

  // Generate numbers from 1 to 100 and append to container
  for (let i = 1; i <= 100; i++) {
    const numberDiv = document.createElement('div');
    numberDiv.textContent = i;
    numberDiv.classList.add('number');

    if (i % 2 === 0) {
      numberDiv.classList.add('green'); // Even numbers background is green
    } else {
      numberDiv.classList.add('yellow'); // Odd numbers background is yellow
    }

    if (isPrime(i)) {
      numberDiv.classList.add('red'); // Prime numbers background is red
    }

    container.appendChild(numberDiv);
  }
});

  </script>
</body>
</html>
