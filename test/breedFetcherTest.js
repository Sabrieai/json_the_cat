const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');
const breedName = process.argv[2];

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });

  it('returns "we dont have any information on breedName, are you sure its spelled like that?" for an invalid breed, via callback', (done) => {
    fetchBreedDescription('Tabby', (err, desc) => {
      // we expect an error for this
      assert.equal(err, null);

      const expectedDesc = `we dont have any information on Tabby, are you sure its spelled like that?`;

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });


});