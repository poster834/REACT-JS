import * as React from "react";
import * as ReactDOM from "react-dom";
import { Header } from "../shared/Header.jsx";

window.addEventListener('load',() => {
    // console.log(true);
  ReactDOM.hydrate(<Header />, document.getElementById("react_root"));

});
 