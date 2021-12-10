# M3W7 - Breakout Session

## Content
- [X] Intro to Flexbox

---

## Flexbox
* Flexible Box (Layout) module.
* New feature in CSS that solves a lot of challenges with web design layouts.
* A lot more intuitive (expand or grow to best fill the space).
* Direction Agnostic compared to block(vertical) and inline(horizontal).

---

## What does `float` do before flexbox?
* Float property specifies how an element should `float` (left, right).
* Borrowed from print design (text wrap).
* Floats can be used to wrap text around images or create entire web layouts.
* Required a lot of workarounds (`clear: both`).

---

## What makes Flexbox more efficient to use?
* Efficient way to create layout, alignment and spacing of elements.

---

## `flex-direction`
* Default is row
* Sets axis (main and cross)
* `justify content` & `align items` depends on `flex-direction`
* When we define `flex-direction` as row or column
    * `row`: **main axis** is left to right.
    * `column`: **cross axis** is top to bottom.

---

## Responsive Layouts
  * Can change direction if on mobile device to be column and row for desktop.
  * Anytime your working with `flexbox` asked your self where are your *main* and *cross* axis.

---

## `flex-wrap`
* Whole concept of `flexbox` is flexibility.
* Give a `flex-item` a `width`, `flexbox` will evenly distribute the `width` between the flex items.

---

## `justify-content`
* How are the items aligned on the `main` axis.
* `Main` axis by default is left to right.
* **Note**: Need a `min-height` when using `flex-direction: column;`.

---

## `align-items
* How items are aligned with `cross` axis.
* `Cross` axis by default is top to bottom.
* **Note**: To vertically center item, need a `height` property.

---

## `align-content`
* Divides extra space between `flex` items.
* `justify` and `align` content, how do I divide all this extra whitespace between items?
* Takes the extra space in `cross` axis and divides it up.
* **Note**: To vertically and horizontally center item, need a `height` & `width` property.

---

## `order`
* Move the order of your elements.
* Anything with a value more than 1 gets added to the end.
* Anything with a value less than 1 gets added to the front.

---

## `align-self`
* Align on an individual element.

---

## `flex`
*  Shorthand for `flex-grow`, `flex-shrink` & `flex-basis`.
* `flex` property ask what to do if there is extra space or if there is not enough space.
* Whole point of `flexbox` is that it doesn't break your layout if there is too much or not enough space.
* `flex` is asking at what proportion should I scale myself up or down depending on how much space I have?
* `flex: 1;` will divide elements proportionately.

```css
flex: 10 5 400px;
```

---

## `flex-grow`
* When we have extra space, how should we divide between all items in the same line?
* Default value for `flex-grow` is `0`.

---

## `flex-shrink`
* When we do not have enough space, how should we divide between all items in the same line?

---

## `flex-basis`
* Before we start growing and shrinking and dividing between all items, how wide is the element before we divide remaining space?

---

## Resources:
* https://css-tricks.com/snippets/css/a-guide-to-flexbox/
* https://flexboxfroggy.com

---
## Links
* [M4W8 - Breakout Session](https://github.com/clopez11/WebFlex-Lectures-October18/tree/master/M4/W8/css-breakout)
* [CLass Recording](https://us02web.zoom.us/rec/share/3LZYvG2C2VYMi-ffb69ue8fl5oauWFPeQdlneCnUbZppwhZQQ_RivfRn8hEU6BQ.ykGodXbw-hjAMM_Z?startTime=1639094564000) | **Passcode:** K6Xfo+t.
