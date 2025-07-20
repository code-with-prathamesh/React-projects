# React-projects

This is a compilation of javascript, HTML, CSS, JSX programming codes used for React projects.

# Introduction to React.js

React.js is a javascript Library used for building user interface (UIs) and single-page application.
Created by Jordan Walke in Facebook.

React.js is declarative because it describes what the UI should look like rather than how to achieve it. This makes the code easier to read and maintain, as it is more focused on the end result rather than the steps involved in gettig there.

Example:
_Rect.js_
In react you don't need to define the element manualy how to execute it. This is declarative.

<!--
function MyComponent({name}) {
return <div>Hello, {name}!</div>;
}
-->

_Javascript_
In javascript you need to define the element manualy how to execute it. This is imperative.

<!--
function MyComponent(name) {
const element = document.createElement('div');
element.textContent = `Hello ${name}!`;
return element;
}
-->
