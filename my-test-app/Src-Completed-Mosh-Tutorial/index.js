import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css"; // imports bootstrap, changes fonts!
// don't need curly braces, since its defautl export
import App from "./App";

const element = <h1>Hellow World</h1>;
/* a JSX statement, we don't directly use this obejct in our code, bust still
need to import react, since react compiles it to normal JS using React.create element */
/* this element is part of the virtual DOM */

console.log(element);
ReactDOM.render(<App />, document.getElementById("root"));
