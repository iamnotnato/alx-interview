#!/usr/bin/node

const request = require('request');
if (process.argv.length === 3) {
  const filmId = process.argv[2];
  const url = `https://swapi-api.alx-tools.com/api/films/${filmId}`;

  request(url, { json: true }, async (err, _, { characters }) => {
    if (err) throw err;

    for (const char of characters) {
      const getCharName = () => {
        return new Promise((resolve, _reject) => {
          request(char, { json: true }, function (err, _, { name }) {
            if (err) throw err;
            resolve(name);
          });
        });
      };
      console.log(await getCharName());
    }
  });
}
