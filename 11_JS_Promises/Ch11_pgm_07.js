const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// Read the cats api and find the average weight of cat in metric unit.
// Read the countries api and find out the 10 largest countries
// Read the countries api and count total number of languages in the world used as officials.


// Fetch cat breeds data and calculate the average weight
fetch(catsAPI)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    let totalWeight = 0;
    let count = 0;

    data.forEach(cat => {
      const weightRange = cat.weight.metric.split(' - ').map(Number);
      const averageWeight = (weightRange[0] + weightRange[1]) / 2;
      totalWeight += averageWeight;
      count++;
    });

    const averageCatWeight = totalWeight / count;
    console.log(`Average weight of cats in metric units: ${averageCatWeight.toFixed(2)} kg`);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

// Fetch countries data and find the 10 largest countries by area
fetch(countriesAPI)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const sortedCountries = data.sort((a, b) => b.area - a.area);
    const largestCountries = sortedCountries.slice(0, 10);

    console.log('10 largest countries by area:');
    largestCountries.forEach(country => {
      console.log(`${country.name}: ${country.area} km²`);
    });
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

// Fetch countries data and count the total number of languages used as officials
fetch(countriesAPI)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const languages = new Set();

    data.forEach(country => {
      country.languages.forEach(language => {
        languages.add(language.name);
      });
    });

    console.log(`Total number of languages used as officials: ${languages.size}`);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
