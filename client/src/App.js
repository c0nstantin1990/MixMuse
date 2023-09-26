import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Success from "./pages/Success";
import { Provider } from "react-redux";
import OrderHistory from "./pages/OrderHistory";
import store from "./utils/store";
import AgeVerification from "./pages/AgeVerification";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function isUserLoggedIn() {
  const token = localStorage.getItem("id_token");
  return !!token;
}

function App() {
  const [isAgeVerified, setIsAgeVerified] = useState(false);
  const isLoggedIn = isUserLoggedIn();

  const handleAgeVerificationComplete = () => {
    setIsAgeVerified(true);
  };

  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Provider store={store}>
            {isLoggedIn ? ( // If the user is logged in, go to the main page
              <>
                <Nav />
                
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/success" element={<Success />} />
                  <Route path="/orderHistory" element={<OrderHistory />} />
                  <Route path="/products/:id" element={<Detail />} />
                  <Route path="*" element={<NoMatch />} />
                </Routes>
                <Footer />
              </>
            ) : isAgeVerified ? ( // If the user is not logged in but age is verified, go to the main page
              <>
                <Nav />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/success" element={<Success />} />
                  <Route path="/orderHistory" element={<OrderHistory />} />
                  <Route path="/products/:id" element={<Detail />} />
                  <Route path="*" element={<NoMatch />} />
                </Routes>
                <Footer />
              </>
            ) : (
              <AgeVerification
                onVerificationComplete={handleAgeVerificationComplete}
              />
            )}
          </Provider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
