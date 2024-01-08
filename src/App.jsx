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

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Home />} path="/home" exact />
        <Route element={<About />} path="/about" exact />
        <Route element={<ErrorPage />} path="*" />
        <Route element={<Navigate to="/home" replace />} path="/" />
      </Routes>
    </Router>
  );
};

export default App;
