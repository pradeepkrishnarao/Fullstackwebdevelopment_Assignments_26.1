import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import the ProductList component
import ProductList from "./ProductList";
import ErrorBoundary from "./ErrorBoundary";

var destination = document.querySelector("#container");
//You can render any custom fallback UI using <ErrorBoundary>
ReactDOM.render(<div><ErrorBoundary><ProductList/></ErrorBoundary></div>, destination);