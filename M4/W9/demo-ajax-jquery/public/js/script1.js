$(document).ready(function() {
  let counter = 1;
  $('button').click(function(event) {
    event.preventDefault();

    counter++;
    $.get(`https://jsonplaceholder.typicode.com/todos/${counter}`, function( data ) {
      console.log('data', data);
    });
  });
});