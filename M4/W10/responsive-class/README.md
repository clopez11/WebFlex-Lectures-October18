# M4W10 - Responsive Design

### Content
- [X] Responsive Design
- [X] Viewport Meta Tag
- [X] Viewport Height / Width (`vh` / `vw`)
- [X] Percentages
- [X] `em` / `rem`
- [X] `max-width` & `min-width`
- [X] Review: Border Box
- [X] Review: Box Model
- [X] Review: Block | Inline | Inline-Block
- [X] Review: Flex Box
- [X] Demo: Flexbox Layout 2
- [X] Demo: Media Queries
- [X] Demo: Responsive Sample Site w/ Media Queries & FlexBox

---

## Links
* [M4W10 - Responsive Design](https://github.com/clopez11/WebFlex-Lectures-October18/tree/master/M4/W10)
* [Class Recording](https://us02web.zoom.us/rec/share/T7TGSjotqEAhb2ut47g5JsVNAxvSjYh_SzKj3G8bO3igzBJXTn5d5fWykgDoPvQA.OHBc9ctV_x0ZSwPs) | **Passcode:** vwUY?ip7

---

## Responsive Design
* Our website or app can respond to different screen sizes and orientations.
* We have hundreds of devices that vary in size and our site needs to look good in all of them.
* Resource: [MDN Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)

---

## Viewport Meta Tag
* We want our webpage to display as wide as your device & 100% zoom.
* It controls the `width` and `scaling` of `viewport` so it's sized correctly on all devices.
* This is important, especially for mobile devices.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

---

## Viewport Height / Width (`vh` / `vw`)
* `1vw` = `1%` of the width of the page.
* Each `vh` or `vw` unit is equal to one percent of the page length.
* `vw` and `vh` fall into the relative sizing category meaning it is relative to window not parent.
* In the case of the viewport units, the size is relative to the user viewports.

```css
/* 1 vw = 1% of the width of the page. */
body {
  background-color: #ecedf0;
  font-family: 'Roboto', sans-serif;
  padding: 10px;
  /* Modify the viewport width below */
  width: 100vw;
}
```

---

## Pixels
* Pixels fall into the absolute sizing category which means the object size you configure will remain static on the page.
* It doesn’t matter if the user toggles their screen width or views the web page from a small screen mobile device for instance.
* `10px` wide is `10px` wide in all devices.

---

## Percentages
* Instead of absolute values like `px`, we can deal with `percentage`.
* Always relative to the parent not the page.
* Pay attention to how you use percentages because the elements react depending on parent.

```css
.tweets {
  width: 50%;
}

.tweets .tweet-card {
  width: 33%;
}
```

* Height percentages doesn't work unless parent has an explicit `height`.
* Default behaviour of `height` will be just enough to contain element.

```css
.tweets-content {
    height: 100px;
}

.tweets .tweet-card {
    background-color: #fff;
    border-radius: 5px;
    display: inline-block;
    margin: 5px 0;
    padding: 25px;
    width: 33%;
    height: 10%;
}
```

---

## `em` / `rem`
* An `em` is the `font-size` of parent element.
* `rem` is relative to the absolute top parent of entire `dom`, which is `html`.
* By default, the default `font-size` is `16px` on every page on the internet.
* `rem` is standard and generally used instead of px, em or %.
* `16px` is equal to `1rem` (ie. `8px` is equal to `0.5rem`, `32px` is equal to `2rem` ..etc).

---

## `max-width` & `min-width`
* The `width` does not shrink less than minimum size.
* The `width` does not grow greater than maximum size.
* Stop from continuing to grow or shrink.

```css
.tweets .tweet-card {
  background-color: #fff;
  border-radius: 5px;
  display: inline-block;
  margin: 5px 0;
  padding: 25px;
  min-width: 200px;
  max-width: 300px;
}
```

---

## Review: Border Box
* Resource: [MDN Box Sizing](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)
* Ref: Demo Display Property Folder

> Box Model
* We use box model for layouts, since each html element is a box.
* It has 4 main components (content, padding, border, margin).
* This is how we control how each elements is position and how it looks in relationship to other html elements.

> Display
* Every HTML element has a default display property.
* CSS can override this default property or any default css property.
* Before flex box, we had to use these properties to create our layouts.

```css
display: inline;
display: inline-block;
display: block;
```

---

## Review: Box Model
* We use box model for layouts, since each html element is a box.
* It has 4 main components `(content, padding, border, margin)`.
* This is how we control how each elements is position and how it looks in relationship to other `html` elements.

---

## Review: Block | Inline | Inline-Block
* Every `HTML` element has a default `display` property.
* `CSS` can override this default property or any default `css` property.
* Before `flexbox`, we had to use these properties to create our layouts.

```css
display: inline;
display: inline-block;
display: block;
```

---

## Review: Flex Box
* Another `display` property other than `block`, `inline` and `inline-block`.
* When you apply `display: flex` to a `container`, a `parent` `container` such as, `div`, `section`, `main`..etc
* The immediate `children` elements are turned into `flex` boxes.
* `Flex Box` adjusts immediate children, only first level of nesting.
* The `parent` stays as `block` element, does not get affected.
* `Parents` tell `children` what to do and how to arrange themselves.
* Keynotes are the two `axis`, `main` & `cross`. Can change orientation depending on `vertical` (cross) and `hortizontal` (main).

---

## Demo: Flexbox Layout 2

```html
<body>
  <header>
    <div class="box a">A</div>
  </header>
  <main>
    <div class="container">
      <article>
        <div class="box b">B</div>
      </article>
      <section>
        <div class="box c">C</div>
        <div class="box d">D</div>
        <div class="box e">E</div>
      </section>
    </div>
    <aside>
      <div class="box f">F</div>
    </aside>
  </main>
  <footer>
    <div class="box g">G</div>
  </footer>
</body>
```

```css
/* Add your code below */
main {
  display: flex;
}

.container {
  flex: 3;
}

aside {
  display: flex;
  flex: 1;
}

section {
  display: flex;
}
```

---

## Demo: Media Queries
* The best way to make pages responsive.
* **Media Type:** `screen, print, speech, all`.
* **Expression:** `min-width, max-width, orientation, device-height, light-level`.
* Think of this as a `condition`. At this `breakpoint`, apply these styles. Trigger the style changes at this `width`.

```css
@media [media-type] and (expression) {
  div {
    /* styles to be applied */
  }
}

@media screen and (min-width: 1024px) {}

@media screen and (max-width: 768px) {}
```

* `min-width` means to apply styles when screen is greater than `1024px`.
* `max-width` means to apply styles when screen is less than `768px`.

```css
/* Example of responsive background color base on width. */
@media screen and (min-width: 350px) {
  body {
    background-color: red;
  }
}

@media screen and (min-width: 750px) {
  body {
    background-color: blue;
  }
}

@media screen and (min-width: 760px) and (max-width: 980px) {
	body {
    background-color: purple;
  }
}

@media screen and (min-width: 981px) {
  body {
    background-color: orange;
  }
}
```

---

## Demo: Responsive Sample Site w/ Media Queries & FlexBox
* Mobile first approach will be our default styles.
* Media Queries will be for tablet and desktop breakpoints.
* You may have more than three depending on what UX team finds in research.

```css
/* Modify default styling */
.tweets-content {
  display: flex;
  flex-direction: column;
}

.tweets .tweet-card {
  background-color: #fff;
  border-radius: 5px;
  margin: 5px 0;
  padding: 25px;
}
```

```css
@media screen and (min-width: 750px) {} /* Tablet */

@media screen and (min-width: 1200px) { /* Desktop */
  .tweets .tweets-content {
    flex-direction: row;
  }

  .tweets .tweet-card {
    margin: 5px 5px;
  }
}
```

---

## Resources:
* https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design
* https://engageinteractive.co.uk/blog/em-vs-rem-vs-px
* https://css-tricks.com/snippets/css/a-guide-to-flexbox
* https://www.bitdegree.org/learn/css-box-sizing
* https://www.browserstack.com/
* https://crossbrowsertesting.com/
* http://browsershots.org/
* https://pixelsconverter.com/px-to-em
* https://pixelsconverter.com/px-to-rem
* https://marketplace.visualstudio.com/items?itemName=sainoba.px-to-rem
