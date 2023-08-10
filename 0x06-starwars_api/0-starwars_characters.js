#!/usr/bin/node

const request = require('request');

if (process.argv.length !== 3) {
  console.error('Usage: ./0-starwars_characters.js <Movie_ID>');
  process.exit(1);
}

const movieId = process.argv[2];
const url = `https://swapi.dev/api/films/${movieId}/`;

request(url, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    const film = JSON.parse(body);
    film.characters.forEach((characterUrl) => {
      request(characterUrl, (err, res, charBody) => {
        if (err) {
          console.error(err);
        } else {
          const character = JSON.parse(charBody);
          console.log(character.name);
        }
      });
    });
  }
});
