# M4W9 - Asynchronous JavaScript and XML

### Content
- [X] AJAX
- [X] Demo: XMLHttpRequest (XHR)
- [X] Demo: AJAX jQuery Intro with API
- [X] Demo: AJAX jQuery with API (Dogs)
---

## Links
* [M4W9 - AJAX](https://github.com/clopez11/WebFlex-Lectures-October18/tree/master/M4/W9)

---

## Key Notes
* **TinyApp**: Multi-page, refreshes and responds with new page. Sends back rendered `HTML`.
* **Tweeter**: Single-page, no refresh and responds with `json` data. We create elements on the fly.

---

## AJAX
* Asynchronous JavaScript and XML.
* `AJAX` is the use of the `XMLHTTPRequest` object to communicate with servers.
* `AJAX` is not a programming language, it is a **web development technique**.
* `AJAX` makes it seems our site is more responsive and faster.
* Formats include `json`, `xml`, `html`, `.txt` and 99% of the time, data format you will send or recieve will be `.json`.

---

## AJAX: Real World Example
* Load More Recipes: https://www.allrecipes.com/recipes/16376/healthy-recipes/lunches/
* Load More Tweets on Scroll: https://twitter.com/home
* `XMLHTTPRequest` sends a request to a web server.
* New **tweets** or **recipes** will be loaded without page being refreshed.
* **Dev Tools**: Network > Fetch/XHR to check for the `requests`.

---

## Demo: AJAX with XHR
* `AJAX` uses `JavaScript's` `XMLHTTPRequest` object in order to make `HTTP` requests behind the scenes.
* `jQuery` abstracts all this to us with only a few lines of code.

```javascript
    const showCountries = () => {
      let xhr = new XMLHttpRequest();

      xhr.open('GET', 'https://restcountries.eu/rest/v2/all', true);

      xhr.onload = function() {
        if(xhr.status === 200) {
          const countries = JSON.parse(this.response);
          countries.forEach(country => {
            const countryCard = document.createElement('div');
            const countryFlag = document.createElement('img');

            countryCard.innerHTML = country.name;
            countryFlag.src = country.flag;

            countryCard.appendChild(countryFlag)
            document.getElementById('feed').appendChild(countryCard);
          });
        }
      }

      xhr.send();
    };
```
---

## jQuery
* `JavaScript` library, which introduces helper functions for `DOM` manipulation.
* `jQuery` allows us to manipulate the `DOM` with less code by providing us with helper functions (`bind`, `append`, `submit`...etc).

---

## DOM
* `Document Object Model`
* When browsers loads page it stores a text version in a DOM. Represents your Web Page.
* Important because this allows other programming language to interact and manipulate the elements.

---

## Recap: `HTTP` Requests
* **Tiny App**: routes that we make requests to. Routes live in the server side.
* `HTTP` works by making a `request` and receiving a `response`.
* A `request` is made with a `VERB` and `path` we are making request to.
* A `response` comes back with `code` and `request` we ask for.

```markdown
* GET /login
* POSTS /urls
* Request (VERB) / path
* Tweeter: REQ <-> RES (JSON)
```

---

## API
* Application Programming Interface
* We make `HTTP` requests to an `API`.
* `API` will send a `response` with some kind of data `JSON`.

```markdown
* CLIENT (HTTP) -> API -> API (JSON) -> CLIENT
* CLIENT <-> API
```

---

## `.append()` | `.text()` | `.html()`
* `.append()`: adds new element to the `DOM` at the end of the `parent`. Adds `children` to `DOM` element selected.
* `.text()`:
    1) Provide content of the selector element AND all the contents of that element’s children. It will do this for ALL elements that match the selector.
    2) Set the content of the selected element.

```javascript
$("h2").text()
$("h2").text("I am the new title");
```

* `.html()`:
    1) Provide content of the selected element if not given an argument between the parentheses.
    2) Set the content of the selected HTML element.

```javascript
$("h2").html();
$("h2").html("I am the new title");
```

* add these examples to see how it manipulates the `DOM`.

```html
  <p class="append">Append</p>
  <p class="text">Text</p>
  <p class="html">HTML</p>
```

```javascript
  $('.append').append('<h1>Append this</h1>');
  $('.text').text('<span>Replace with this text.</span>');
  $('.html').html('<p>Replace with this html.</p>');
```

---

## Demo: AJAX with jQuery
* A note with the `callback` in `getDogImg()`. A few of you may have got lost at this point.
* When the page loads, it calls `loadsDogs()`
* Loop through each dog to render the name and image to our page.
* We are using `renderDog()` to create these elements on the fly.
* `renderDog()` will call `getDogImg()`.
* `getDogImg()` will make an `AJAX` request to `API`.
* Then runs a `callback` that is passed from `getDogImg()` to process the data.
* Whatever response is passed in this `callback`, create a dog element.

```javascript
  const renderDog = (dog) => {
    getDogImg((response) => {
      let img = `
        <div>
          <h2>${dog.name}</h2>
          <img src=${response.message} width="30%"/>
        </div>
      `;
      $('.dogsList').append(img);
    })
  }

  const getDogImg = (callback) => {
    $.get('https://dog.ceo/api/breeds/image/random').then(callback);
  }

  const loadDogs = () => {
    $.get('/dogs').then(dogs => { // make a req to /dogs
      dogs.forEach(dog => { // for each dog, render on page
        renderDog(dog)
      })
    });
  }

  // this syntax means to run code right away or can also run loadDogs();
  $(() => {
    loadDogs();
  });
```

* Note: that any data requests (ie. API) is `async`.
* Can also do this without passing in `callback` and will give you the same result.

```javascript
  const renderDog = (dog) => {
    getDogImg();
  }

  const getDogImg = () => {
    $.get('https://dog.ceo/api/breeds/image/random').then((response) => {
      let img = `
        <div>
          <h2>${dog.name}</h2>
          <img src=${response.message} width="30%"/>
        </div>
      `;
      $('.dogsList').append(img);
    });
  }
```

## Resources:
* https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseText
* https://youmightnotneedjquery.com
* https://api.jquery.com
* https://restcountries.eu/#api-endpoints
* https://jsonplaceholder.typicode.com
* https://jsonplaceholder.typicode.com/todos/1
* https://dog.ceo/dog-api
* https://api.jquery.com/jQuery.get/#jQuery-get-url-data-success-dataType
* https://api.jquery.com/jquery.ajax/
* https://api.jquery.com/jquery.getJSON/
