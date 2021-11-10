const fetch = require("node-fetch");

const url = "https://dog.ceo/api/breeds/image/random";

const response = fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log("data", data);
  });

const showImage = response.data;
console.log("showImage", showImage);
