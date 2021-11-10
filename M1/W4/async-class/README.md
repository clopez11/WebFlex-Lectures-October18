# M1W4 - Asynchronous Control Flow

## Content
- [X] Review: Synchronous JavaScript
- [X] Review: Callback
- [X] Asynchronous Programming
- [X] Demo: `setTimeout` and `setInterval`
- [X] Recap: Blocking vs Non-Blocking
- [X] Asynchronous Workflow
- [X] Demo: Practice
- [X] Demo: File System Functions (`fs`)
- [X] Demo: API (real life example)

## Reminder: Record Class

---

## Review: Synchronous JavaScript
* `JavaScript` runs from top to bottom (sequentially).
* `JavaScript` is **Single Threaded**. Only one thing can happen at a time on a **Single Main Thread**.

---

## Review: Callback
* An `anonymous function` that is being passed as an argument to a `higher-order function`.
* Anytime we request for data, it is unlikely it will be returned immediately.
* One of the options to handle `data` `asynchronously` is by `callbacks`.

---

## Asynchronous Programming
* Asynchronous JavaScript allows for tasks to be performed **without blocking** the code execution.
* A way to get expensive operations (functions) out of the way.
* Examples of `expensive` or `blocking` operations: 

```markdown
* file operations
* network requests
* reading a huge file
* database operations
* API calls
```

---

## Demo: `setTimeout` and `setInterval`
* [setTimeout](https://github.com/clopez11/WebFlex-Lectures-October18/blob/master/M1/W4/async-class/04_setTimeout.js)
* [setInterval](https://github.com/clopez11/WebFlex-Lectures-October18/blob/master/M1/W4/async-class/05_setInterval.js)

---

## Recap: Blocking vs Non-Blocking
* **Blocking:** It can only do one thing at a time.
* **Analogy:** Grocery, only one cashier and every customer has to go through that cashier and wait in line. What if you're only buying one item but the person in front of you is buying 30 items. This is considered `blocking`. 
* **Non-Blocking:** Can do multiple things at a time.
* **Analogy:** In restaurant, our server takes our order and sends it to kitchen then moves on to take orders from other tables. When the food is ready, the kitchen notifies an available server to take food to us. This is considered `non-blocking`. 

---

## Asynchronous Workflow
* [Slides 7 - 19](https://github.com/clopez11/WebFlex-Lectures-October18/tree/master/M1/W4/async-class/slides)
* `Call Stack` is where our functions are called.
* `Call Stack` is the `synchronous` part of JavaScript, it can only call one thing at a time.
* `Web/C++ APIs` are web apis in our browser that we are going to handle the functions we give all our `async` calls.
* We hand our `async` calls to `Web/C++ APIs` to wait for a resolution.
* `Web/C++ APIs` are where our `async` functions go.
* `Task Queue` is where our `async` functions are waiting to be called until our `Call Stack` is clear.
* Once all our `synchronous` code is clear, we run all our `async` code in queue.
* Even if our `async` code resolves quickly, our `async` code still needs to wait to in queue.

---

## Demo: Practice
* [Async Example 06](https://github.com/clopez11/WebFlex-Lectures-October18/blob/master/M1/W4/async-class/06_example_async.js)
* [Async Example 07](https://github.com/clopez11/WebFlex-Lectures-October18/blob/master/M1/W4/async-class/07_example_async.js)
* [Async Example 08](https://github.com/clopez11/WebFlex-Lectures-October18/blob/master/M1/W4/async-class/08_example_async.js)
* [Async Example 09](https://github.com/clopez11/WebFlex-Lectures-October18/blob/master/M1/W4/async-class/09_example_async.js)

## Demo: File System Functions (`fs`)
* [Read File Example](https://github.com/clopez11/WebFlex-Lectures-October18/blob/master/M1/W4/async-class/10_example_readfile.js)

## Demo: API Call
* [API Call Example](https://github.com/clopez11/WebFlex-Lectures-October18/blob/master/M1/W4/async-class/11_example_request.js)

## Resources:
* https://dog.ceo/dog-api
* https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
* https://developer.mozilla.org/en-US/docs/Web/API/setInterval
* https://nodejs.org/api/fs.html
* https://jsonplaceholder.typicode.com
* https://nodejs.org/api/events.html

---

## Links
* [M1W4 - Asynchronous Control Flow](https://github.com/clopez11/WebFlex-Lectures-October18/tree/master/M1/W4/async-class)
* [Class Recording](https://us02web.zoom.us/rec/share/HQWk_morjmuOunxKfphEnCazBv5fHz4bGR3ifo9rVpcM_bni7fiqdYls9IwY-scD.0wlNQzUz8hoHP0uq) | Passcode: Srj!U0F@
* [Slides](https://github.com/clopez11/WebFlex-Lectures-October18/tree/master/M1/W4/async-class/slides)
