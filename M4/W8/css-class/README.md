# M3W7 - Intro to CSS

## Content
- [X] Tips & Adjustments
- [X] Overview: Tweeter
- [X] Multi Page vs Single Page
- [X] Review: HTML
- [X] Review: HTML Attributes
- [X] Review: Nesting Tags (`indentation`)
- [X] Review: HTML Semantic Tags
- [X] Dev Tools
- [X] Intro to CSS
- [X] Inline | Internal | External Styles
------------------ Break: 10 minutes
- [X] CSS Resets | Normalize
- [X] Selectors (`tag`, `nesting`, `class`, `id`)
- [X] Cascade
- [X] Specificity
- [X] Box Model
- [X] Box Sizing
- [X] Display Properties (`block`, `inline`, `inline-block`, `flex`)
- [X] Advanced: Intro Flex Box
- [X] Advanced: Demo (Tweet)

---

## Links
* [M4W8 - Intro to CSS](https://github.com/clopez11/WebFlex-Lectures-October18/tree/master/M4/W8/css-class)
* [Class Recording](https://us02web.zoom.us/rec/share/qNKxkzeKfYj5RtgUMRg94coU6rbD1Fclr7cjfzjEEjBGMy58QQj98yv4j1Rq3Td_.tQHamVrw7KgCF4m1) | **Passcode:** $J3$t15d

---

## Tips & Adjustments
* Lesser emphasis on giving you all the resources, functions, tips that you need to complete an activity
* Research, experiment & poke around some subjects on your own.
* Google, mentors, instructors and your own peers are your resources.
* **Rule of Thumb:** if you're still stuck after 30 minutes and you've researched to try and understand concept, ask for help. Don't suffer alone.

---

## Multi Page vs Single Page
* **Multi Page** example is what you just built, **TinyApp**.
* Traditional website, page reloads when moving from one page to another.
* `HTML` & `CSS` is loaded at every page reload.
* Single Page example is what you will be building next, **Tweeter**.
* Modern website, content is loaded dynamically without needing to reload the page.
* `HTML` & `CSS` is loaded once.

---

## Review: HTML
* Stands for: `Hyper Text Markup Language`.
* Used to give structure to your webpage. It can give context to your content.
* Think of `HTML` as the framing of the house, the walls and windows.
* Most `HTML` flags follow this pattern.

```markdown
1. Opening Tag
2. Content
3. Closing Tag
```

* `Tags` tell the browser what type of content to display (i.e. text, images, video or audio).
* Describe the content between the tags.

---

## Review: HTML Attributes
* Opening tags can carry attributes
* These are additional values inside to control elements behaviour.
* `attributes` require a name and value.
* `src` in `img` is where the image can be found.
* `alt` is displayed if image cannot be displayed and important to include for accessibility (screen reader).

```html
<img src="images/logo-tweeet.png" alt="tweet logo">
```

---

## Review: Nesting Tags (`indentation`)
* We can nest as many tags inside each other to build more complicated boxes.
* Nesting tags is modelled with `parent` & `child` relationship.
* **Rule of Thumb**: `children` get one `tab` more than `parent`.

```html
  <div>
    <img src="images/logo-tweeet.png" alt="tweet logo">
    <div>
      <h2>FirstName LastName</h2>
      <img src="images/avatar-astronaut.jpg" alt="astronaut avatar">
    </div>
  </div>
```

---

## Review: HTML Semantic Tags
* `semantic` tags or elements all behave like `div` and used to describe our content.
* `semantic` avoids `div soup`

```markdown
1. `header`
2. `footer`
3. `nav`
4. `aside`
5. `section`
6. `article`
```

```html
  <!-- Regular Tags: div soup -->
  <div>
    <h1>My Awesome Webpage</h1>
  </div>
  <div>
    <div>
      <h3>Article Title</h3>
      <p>article paragraph</p>
    </div>
  </div>

  <!-- Semantic Tags -->
  <header>
    <h1>My Awesome Webpage</h1>
  </header>
  <main>
    <article>
      <h3>Article Title</h3>
      <p>article paragraph</p>
    </article>
  </main>
```

---

## Dev Tools
* `inspect` our page, right click > inspect or use shortcut `Command + Option + I`.

---

## Intro to CSS
* Stands for `Cascading Style Sheet` and design part of websites.
* `Front-end` development consists of 3 parts as well.
* `HTML` is your structure (framing i.e. house).
* `CSS` is design (paint/colours/design ie. house).
* `JavaScript` is logic (electricity ie. house).

```markdown
1. HTML (content / structure)
2. CSS (layout / look)
3. JavaScript (interaction / functionality)
```

---

## Inline | Internal | External Styles
* There are three ways to style elements.

```markdown
* `inline`: add style attribute to selector.
* `internal`: add style tags in head.
* `external`: best practice and in separate file.
```

* `inline styles` is considered bad practice because this is not scalable and hard to read. Can be used for testing.

```html
<!-- inline styles -->
<h2 class="profile-name" style="color:blueviolet; font-size: 50px;">FirstName LastName</h2>
```

* `internal` styles by adding `styles` tag inside `head`.
* To apply styles to `HTML` elements, we use `CSS` selectors.
* Also considered bad practice.

```html
<!-- internal styles: inside <head> tag -->
<style>
  h2 {
    color: rgba(0,0,0,.5);
    display: inline-block;
    font-size: 1em;
    margin-right: 3px;
    position: relative;
    top: -12px;
  }
</style>
```

* Best options is `external` styles.
* All our styles will be added in this `.css` file.
* To connect / link our `HTML` with `CSS` file. We use `link` tag.

```html
  <link rel="stylesheet" href="/css/styles.css" type="text/css" >
```

* This is best practice because scalable, easier to manage and readable.
* Can share styling in multiple pages using one file, change styles that affect multiple files...etc

---

## CSS Resets | Normalize
* Browser sets different **default** `CSS` rules (styles).
* The term is called: **user agent stylesheet**.
* To remove these defaults, we include `CSS` reset or `normalize` to remove these defaults.
* Link: https://meyerweb.com/eric/tools/css/reset/
* Link: https://necolas.github.io/normalize.css/

---

## Selectors (`tags`, `nesting`, `class`, `id`)
* When we write `CSS`, we often don’t want to apply the same styles to every element on the page.
* Four ways to select `HTML` elements

```markdown
* `tags`
* `nesting`
* `class`
* `id`
```

```html
  <header class="header-main">
    <img src="/images/logo-tweeet.png" class="logo">
    <div class="header-profile">
      <h2 class="profile-name" id="main-title">FirstName LastName</h2>
      <img src="/images/avatar-astronaut.jpg" class="profile-image">
    </div>
  </header>
```

```css
/* select elements by tag name */
img {
  width: 500px;
  height: auto;
}

/* select elements by nesting */
header img {
  width: 500px;
  height: auto;
}

header div img {
  width: 100px;
  height: 100px;
}

/* select elements by class */
.logo {
  width: 500px;
  height: auto;
}

.profile-image {
  width: 100px;
  height: 100px;
}

/* select elements by id */
#main-title {
  font-size: 50px;
  color: orange;
}
```

---

## Cascade
* `CSS` rules are read by the browser from top to bottom (sequential).
* Styles at the bottom of a CSS file have the potential to override styles at the top.

```css
.page-title {
  color: #3d5170;
}

.page-title {
  color: red;
}
```

---

## Specificity
* Writing our CSS to be as specific as possible ensures that styles we want to see in the browser do not get overwritten!
* The more specific rule will win.


```markdown
1. Inline Styles
2. IDs
3. Classes
4. Tags
```

* Inline styles is the most specific.
* Key takeaway is to use classes & ids to target elements using `CSS` rules.

```html
<h1 id="orange" class="purple" style="color: red;">Headline Text Goes Here</h1>
```

```css
h1 {
  color: lavender;
}
.purple {
  color: purple;
}
#orange {
  color: orange;
}
```

---

## Box Model
* The box model refers to the fact that each HTML element we have on the page is made up of four main components.
* The box model refers to how these four properties relate to each other.
* We can alter all of these properties using CSS, but each element has a default property assigned to them.

```markdown
- margin
- padding
- content
- border
```

* Analogy: The Box Model as a suburban neighbourhood.

```markdown
## Height / Width
This is your house

## Padding / Border
The territory around the element that is limited by the border. This is kind of like the yard and fence on your property. This is the padding and border.

## Margin
The empty space that separates this element from the surrounding elements. This is similar to the trees that are still technically part of your property, but give you some privacy from the neighbors and are just meant to give you a buffer. This is the margin.
```

---

## Box Sizing
* Determines how the elements `width` and `height` are calculated.
* Should we include the `padding` & `borders` to total `width` & `height` or not?
* Link: http://guyroutledge.github.io/box-model

```css
* {
  box-sizing: border-box;
}
```

---

## Display Properties
* Every HTML element has a default display property.
* `CSS can override this default property.
* file: `box-model.ejs` & `box-model.css`.

---

## Flex Box
* Flexible Box (Layout) module.
* A lot more intuitive (expand or grow to best fill the space).
* Direction Agnostic compared to `block` (vertical) and `inline`(horizontal).

---

## Resources:
* https://lvivity.com/single-page-app-vs-multi-page-app
* http://guyroutledge.github.io/box-model
* https://css-tricks.com/snippets/css/a-guide-to-flexbox
* https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
* https://fonts.google.com
* https://stackoverflow.com/questions/12582624/what-is-a-user-agent-stylesheet
* https://css-tricks.com/bem-101
* https://en.bem.info/methodology/css
* http://getbem.com/introduction
* https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements
* https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes
* https://css-tricks.com/pseudo-class-selectors
* https://www.geeksforgeeks.org/why-are-dashes-preferred-for-css-selectors-html-attributes
* https://css-tricks.com/box-sizing
* https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing
* http://flexboxfroggy.com/
* https://css-tricks.com/snippets/css/a-guide-to-flexbox/
* https://medium.freecodecamp.org/css-box-model-explained-by-living-in-a-boring-suburban-neighborhood-9a9e692773c1
