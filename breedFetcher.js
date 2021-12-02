const request = require('request');
const args = process.argv.slice(2);
const URL = `https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`;

const catBreedDiscription = request(URL, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log(typeof body);//serialized object, should be string
  const data = JSON.parse(body); // deserialize the object
  // if error, exit and tell me why
  if (error !== null) {
    console.log('error:', error);
    process.exit();
  }
  // if cat webpage doesnt exist
  if (data.length === 0) {
    console.log(`we dont have any information on ${args[0]}, are you sure its spelled like that?`);
    process.exit();
  }
  console.log(data[0]. description);
});

catBreedDiscription;


