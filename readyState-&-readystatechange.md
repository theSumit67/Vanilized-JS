The `document.readyState` property tells us about the current loading state.

There are 3 possible values:

1. "loading" – the document is loading.
2. "interactive" – the document was fully read.
3. "complete" – the document was fully read and all resources (like images) are loaded too.

So we can check `document.readyState` and setup a handler or execute the code immediately if it’s ready.

Like this:
```js
function work() { /*...*/ }

if (document.readyState == 'loading') {
  // still loading, wait for the event
  document.addEventListener('DOMContentLoaded', work);
} else {
  // DOM is ready!
  work();
}
```

There’s also the readystatechange event that triggers when the state changes, so we can print all these states like this:

```js
// current state
console.log(document.readyState);

// print state changes
document.addEventListener('readystatechange', () => console.log(document.readyState));
```
