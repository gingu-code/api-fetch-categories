
// Using the url below:
// https://api.publicapis.org/entries
// Do 1 of the two challenges.
// All output is in the terminal

// If you are up for the challenge and can reason about a solution for #2 then do #2
// Otherwise, do #1

// Make sure you are challenging yourself

// #1
// EASIER CHALLENGE:
// // Instructions:
// // Using the api.publicapis.org/entries endpoint:
// // Use fetch to call the data (const fetch = require('node-fetch'))
// // Parse the data and return output to terminal based on a dynamic random category choice 
// // The random choice must come from the categories available in the api
// // Do not hard code the categories.
// // List the resulting data in the terminal as it is formatted below
// // Make sure to also list the category in the opening string in all caps 
// // The dynamically chosen random category below is Animals
// // Copy the format
// EXAMPLE OUTPUT: 

// You random category is ANIMALS:

// API: Cat Facts
// Description: Daily cat facts
// Link: https://alexwohlbruck.github.io/cat-facts/
// Category: Animals

// ---

// API: Cats
// Description: Pictures of cats from Tumblr
// Link: https://docs.thecatapi.com/
// Category: Animals

// ---

// API: Dogs
// Description: Based on the Stanford Dogs Dataset
// Link: https://dog.ceo/dog-api/
// Category: Animals

// ---

// API: HTTPCat
// Description: Cat for every HTTP Status
// Link: https://http.cat/
// Category: Animals

// ---

// API: IUCN
// Description: IUCN Red List of Threatened Species
// Link: http://apiv3.iucnredlist.org/api/v3/docs
// Category: Animals

// ---

// API: Movebank
// Description: Movement and Migration data of animals
// Link: https://github.com/movebank/movebank-api-doc
// Category: Animals

// ---

// API: Petfinder
// Description: Adoption
// Link: https://www.petfinder.com/developers/v2/docs/
// Category: Animals

// ---

// API: PlaceGOAT
// Description: Placeholder goat images
// Link: https://placegoat.com/
// Category: Animals

// ---

// #2
// TOUGHER CHALLENGE

// // Instructions:
// // Using the api.publicapis.org/entries endpoint:
// // Use fetch to call the data (const fetch = require('node-fetch'))
// // Parse the data so that the output renders as follows below for each category.
// // Log only 3 items per category
// // Recommendation:
// // First just solve the problem and get the output
// // Then refactor and use array methods if you can
// // Also use destructuring if you can
// // Refer to the video instructions

// SUMMARY:
// API Data from https://api.publicapis.org/entries:
// 3 Options listed per Category.

// OUTPUT SHOULD BE:

// ANIMALS
// ---
// Api: Cats
// Description: Pictures of cats from Tumblr
// Link: https://docs.thecatapi.com/
// Category: Animals

// Api: Dogs
// Description: Based on the Stanford Dogs Dataset
// Link: https://dog.ceo/dog-api/
// Category: Animals
// Api: HTTPCat

// Description: Cat for every HTTP Status
// Link: https://http.cat/
// Category: Animals

// ANIME
// ---
// Api: Cats
// Description: Pictures of cats from Tumblr
// Link: https://docs.thecatapi.com/
// Category: Anime

// Api: Dogs
// Description: Based on the Stanford Dogs Dataset
// Link: https://dog.ceo/dog-api/
// Category: Anime

// Api: HTTPCat
// Description: Cat for every HTTP Status
// Link: https://http.cat/
// Category: Anime

// ANTI-MALWARE
// ---
// Api: Cats
// Description: Pictures of cats from Tumblr
// Link: https://docs.thecatapi.com/
// Category: Anti-Malware

// Api: Dogs
// Description: Based on the Stanford Dogs Dataset
// Link: https://dog.ceo/dog-api/
// Category: Anti-Malware

// Api: HTTPCat
// Description: Cat for every HTTP Status
// Link: https://http.cat/
// Category: Anti-Malware
// ....and so on for each of the 45 categories
