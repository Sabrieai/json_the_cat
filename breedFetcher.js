const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  
  request(URL, (error, response, body) => {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    const data = JSON.parse(body);
    if (error !== null) {
      callback(error, null);
      process.exit();
    }
    if (data.length === 0) {
      const  message = `we dont have any information on ${breedName}, are you sure its spelled like that?`;
      callback(null, message);
      process.exit();
    }
    const catBreedDescription = data[0]. description;
    callback(null, catBreedDescription);
  });
};



module.exports = { fetchBreedDescription};




