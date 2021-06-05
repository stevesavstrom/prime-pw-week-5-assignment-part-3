console.log('***** Music Collection *****')

let collection  = [];

// Creating addToCollection function:
function addToCollection(title, artist, yearPublished) {
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  }
  collection.push(album);
  return album;
}

// Testing addToCollection function by adding 6 albums to collection:
addToCollection('On The Beach', 'Neil Young', 1974);
addToCollection('Lost in the Dream', 'The War on Drugs', 2014);
addToCollection('#1 Record', 'Big Star', 1972);
addToCollection('Illmatic', 'Nas', 1994);
addToCollection('Guitar Romantic', 'The Exploding Hearts', 2003);
addToCollection('Punisher', 'Phoebe Bridgers', 2020);
console.log(collection);


// Creating showCollection function:
function showCollection ( array ) {
  console.log('Number of items in array:', array.length);
  for (var i = 0; i < array.length; i++) {
    console.log(array[i].title, 'by', array[i].artist, 'published in', array[i].yearPublished );
  }
}

// Testing showCollection function -- should log 6 statements.
showCollection(collection);

// Creating findByArtist function:
function findByArtist ( artist ) {
  let searchResults = [];
  for (var i = 0; i < collection.length; i++) {
    if ( artist === collection[i].artist ) {
      searchResults.push(collection[i]);
    }
  }
  return searchResults;
}
// Testing findByArtist function:
console.log('Search: Neil Young - Should log an array with a matching album:', findByArtist('Neil Young'));
console.log('Search: Bon Iver - Should log an empty array:', findByArtist('Bon Iver'));

// Stretch Goals
// Creating search function:
function search (artist, yearPublished){
  let searchResults = [];
  for (var i = 0; i < collection.length; i++) {
    if ( artist === collection[i].artist && yearPublished === collection[i].yearPublished ) {
      searchResults.push(collection[i]);
    }
  }
  return searchResults;
}

// Testing findByArtist function:
// Should log  an array with a matching artist/album/year.
console.log('Matches all criteria - should log an array with match', search('Phoebe Bridgers', 2020));

// Year doesn't match. Should log an empty array.
console.log('Year doesnt match - should log empty array', search('Phoebe Bridgers', 1992));

// Artist and year don't match. Should log an empty array.
console.log('Artist and year dont match - should log empty array', search('Sly and the Family Stone', 1971));

// I could not figure out how to return the all the albums in the collection with an empty search.
// This just returns an empty array.
console.log(search ());
