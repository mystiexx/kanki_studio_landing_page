import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./app/home";
import About from "./app/about";
import ErrorPage from "./app/errorPage";
import Services from "./app/services";
import Portfolio from "./app/portfolio";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Home />} path="/home" exact />
        <Route element={<About />} path="/about" exact />
        <Route element={<Services />} path="/services" exact />
        <Route element={<Portfolio />} path="/portfolio" exact />
        <Route element={<ErrorPage />} path="*" />
        <Route element={<Navigate to="/home" replace />} path="/" />
      </Routes>
    </Router>
  );
};

export default App;
