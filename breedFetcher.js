const request = require('request');
const args = process.argv.splice(2)[0];

request('https://api.thecatapi.com/v1/breeds', function(error, response, body) {
  if (error) throw new Error("Something is broken with the API URL");
  const data = JSON.parse(body);
  for (let cat of data) {
    if (cat.name === args) {
      return console.log(cat.description);
    }
  } return console.log("Breed name is not found");
});