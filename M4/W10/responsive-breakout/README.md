# M4W10 - Breakout Session

### Content
- [X] Advanced: CSS Preprocessors
- [X] Advanced: Intro to SASS/SCSS
- [X] Advanced: Convert CSS to SASS

---

## CSS Preprocessors
* Systantically Awesome Style Sheet. Known as a preprocessor.
* Needs to be processed or translated before we can run it.
* Browser does not understand SASS. It only understands in CSS.
* Resource: [SASS](https://sass-lang.com/)
* Resource: [SASS MEDIA QUERIES](https://www.vincentntang.com/sass-media-queries/)

---

## Intro to SASS/SCSS
* `npm install sass`
* Once installed, you can now convert `.scss` files to `css` through command line.
* Please check `package.json` to see example scripts added.
* `SASS` is popular for nesting, variables, partials & mixins.

---

### Nesting
```scss
/* Section: Header */
.header-main {
  background-color: #fff;
  box-shadow: 0 2px 10px rgb(90 97 105 / 12%);
  font-size: 13px;
  height: 60px;

  .logo {
    float: left;
    height: auto;
    margin-top: -45px;
    padding: 10px;
    width: 150px;
  }

  .header-profile {
    display: inline;
    float: right;
    padding: 10px;
  }

  .header-profile .profile-name {
    color: rgba(0,0,0,.5);
    display: inline-block;
    font-size: 1em;
    margin-right: 3px;
    position: relative;
    top: -12px;
  }

  .header-profile .profile-image {
    border-radius: 50%;
    height: auto;
    width: 40px;
  }
}
```

---

### Variables
```scss
// Variables will be added at the top of .scss file.
$background-color: #ecedf0;
$border-width: 1px;
$border-type: solid;
$border-color: #e1e5eb;
$border: $border-width $border-type $border-color;

body {
  background-color: $background-color;
  font-family: "Roboto", sans-serif;
  padding: 0.625rem;
  width: 100vw;
}

.tweets .tweet-card .tweet-card-footer {
  border-radius: 0 0 10px 10px;
  border-top: $border;
  padding: 20px 0;
}
```

### Partials
```scss
@import '../_variables';
@import '../mixins';
```

---

### Mixins
```scss
// _mixins.scss
@mixin add-underline($decoration, $color, $style) {
  text-decoration: $decoration;
  text-decoration-color: $color;
  text-decoration-style: $style;
}

// index.scss
.header-profile .profile-name {
  @include add-underline(underline,#818ea3, double);
  color: rgba(0,0,0,.5);
  display: inline-block;
  font-size: 1em;
  margin-right: 3px;
  position: relative;
  top: -12px;
}

.new-tweet .page-title {
  @include add-underline(underline, blue, dashed);
  clear: left;
  color: #3d5170;
  font-size: 26px;
  font-weight: 500;
  line-height: 1;
  padding: 12px 0;
}
```

---

## Resources:
* https://sass-lang.com/
* https://css-tricks.com/sass-vs-less/
* http://getbem.com/introduction/
* https://css-tricks.com/bem-101/
