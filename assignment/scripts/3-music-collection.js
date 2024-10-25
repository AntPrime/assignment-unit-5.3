console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
let myCollection = [];
// pushing record object into the array and returning the object
function addToCollection(collection, title, artist, yearPublished) {
const newAlbum = {
  title,
  artist,
  yearPublished
};
collection.push(newAlbum);
return newAlbum;
}
// Logging my 6 albums and console logging results
addToCollection(myCollection, `2014 Forest hill drive`, `J. Cole`, 2014);
console.log(`Added "2014 Forest hill Drive":`, myCollection);
addToCollection(myCollection, `Freudian`, `Daniel Caeser`, 2017);
console.log(`Added "Freudian":`, myCollection)
addToCollection(myCollection, `4 Your Eyez Only`, `J. Cole`, 2016)
console.log(`Added "4 Your Eyez Only":`, myCollection)
addToCollection(myCollection,`For broken Ears`, `Tems`, 2020);
console.log(`Added "For Broken Ears":`, myCollection)
addToCollection(myCollection, `What's Going On`, `Marvin Gaye`, 1971)
console.log(`Added "What's Going on":`, myCollection)
addToCollection(myCollection, `Uprising`, `Bob Marley`, 1980);
console.log(`Added "Uprising":`, myCollection);

//Create a function named showCollection that should: take in a collection parameter (this allows it to be reused to show any array of album objects) 
// and loop through the collection and console.log each albums information formatted within a single string
function showCollection (collection) {
  for (i=0; i < collection.length; i++) {
    console.log(`${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublished}`);
  };
}
showCollection(myCollection)

// create new functaion to findbyArtist with the collection and artist (string) paramater to search any collection.
function findByArtist (collection, artist) {
// an empty array to hold any matching results, if any
  let sameArtist = [];
// looping through the collection to add any album objects with a matching artist to the array
  for (i=0; i < collection.length; i++) {
    if (collection[i].artist=== artist){
      sameArtist.push(collection[i]);
// return the array with the matching results (if no results are found, an empty array should be returned)    
    }
  }
  return sameArtist;
}

console.log("Albums by J. Cole:", findByArtist(myCollection, `J. Cole`));
console.log("Albums by Bob Marley:", findByArtist(myCollection,`Bob Marley`));
console.log("Albums by Ludacris:", findByArtist(myCollection, `Ludacris`));


// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
