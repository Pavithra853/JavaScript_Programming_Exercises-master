const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// Print out all the cat names in to catNames variable.


fetch(catsAPI)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const catNames = data.map(cat => cat.name);
    console.log(catNames);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
