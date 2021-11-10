// How to return values Asynchronously?
const request = require("request");

const getUser = (id, callback) => {
  const user = {
    pet: "Maui",
  };

  request(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
    function (error, response, body) {
      const data = JSON.parse(body);
      console.log("data", data);
      console.log("----------");

      // add details to our user object
      user.details = data;
      callback(user);
    }
  );
};

getUser(1, (userObj) => console.log(userObj));
