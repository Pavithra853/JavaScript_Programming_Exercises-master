const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// Read the countries API using fetch and print the name of country, capital, languages, 
// population and area.



fetch(countriesAPI)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    data.forEach(country => {
      const { name, capital, languages, population, area } = country;
      const languageNames = languages.map(lang => lang.name).join(', ');
      console.log(`Name: ${name}`);
      console.log(`Capital: ${capital}`);
      console.log(`Languages: ${languageNames}`);
      console.log(`Population: ${population}`);
      console.log(`Area: ${area}`);
      console.log('--------------------------');
    });
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
