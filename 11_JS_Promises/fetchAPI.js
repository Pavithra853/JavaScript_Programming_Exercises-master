const url = 'https://restcountries.com/v2/all'; // countries API URL

fetch(url) // Fetch data from the URL
  .then(response => response.json()) // Convert response to JSON format
  .then(data => {
    // Handle the JSON data
    console.log(data); // Print the data to the console (or do further processing)
  })
  .catch(error => console.error(error)); // Catch and handle any errors that occur
