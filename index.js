import Layout from "./pages/Layout";
import React from "react";
import ReactDOM from "react-dom";
window.console.log = window.console.warn;


// When the document loads (incl. dom), render the vdom into the body.
window.document.addEventListener(
    "DOMContentLoaded",
    () => ReactDOM.render(<Layout />, window.document.body)
);
