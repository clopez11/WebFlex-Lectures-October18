$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();

    const form = $(this);

    $.ajax({
      type: 'POST',
      url: '/dogs',
      data: form.serialize(),
    }).then((response) => {
      renderDog(response);
    })
  });

  // Helper Functions
  // const renderDog = (dog) => {
  //   getDogImg((response) => {
  //     let img = `
  //       <div>
  //         <h2>${dog.name}</h2>
  //         <img src=${response.message} width="30%"/>
  //       </div>
  //     `;
  //     $('.dogsList').append(img);
  //   })
  // }

  // const getDogImg = (callback) => {
  //   $.get('https://dog.ceo/api/breeds/image/random').then(callback);
  // }

  const renderDog = (dog) => {
    getDogImg();
  }

  const getDogImg = () => {
    $.get('https://dog.ceo/api/breeds/image/random').then((response) => { // check above code to see version of passing a callback
      let img = `
        <div>
          <h2>${dog.name}</h2>
          <img src=${response.message} width="30%"/>
        </div>
      `;
      $('.dogsList').append(img);
    });
  }

  const loadDogs = () => {
    // make a req to /dogs
    $.get('/dogs').then(dogs => {
      // for each dog, render on page
      dogs.forEach(dog => {
        renderDog(dog)
      })
    });
  }

  // this syntax means to run code right away
  $(() => {
    loadDogs();
  });
});