# React-projects

This is a compilation of javascript, HTML, CSS, JSX programming codes used for React projects.

# Introduction to React.js

React.js is a javascript Library used for building user interface (UIs) and single-page application.
Created by Jordan Walke in Facebook.

React.js is declarative because it describes what the UI should look like rather than how to achieve it. This makes the code easier to read and maintain, as it is more focused on the end result rather than the steps involved in gettig there.

Example:
_React.js_
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

# Installing and Creating a react application

Step 1: Install node
Link: https://nodejs.org/en/download
Install node from the link (Select the latest version with LTS so that no issues occur.)

Step 2: Install bun (Package Manager)
Bun is a fast Javascript runtime.
Run the following command in the terminal to install bun globally: npm i -g bun

Step 3: Create react app using vite
Run the following command in the terminal: bun create vite
Give the project name: "Name of the project"
Select framework: "React"
Select Variant: "Javascript"
Follow the further steps to create your react app.

Step 4: Run the React application
Run the following command to run the project: bun dev.
