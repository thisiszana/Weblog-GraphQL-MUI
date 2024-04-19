import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import App from "./App.jsx";

import "./Styles/global.css";

const client = new ApolloClient({
  uri: "https://api-us-west-2.hygraph.com/v2/clv50ghsp0a2v07w7kqueezbj/master",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
  </React.StrictMode>
);
