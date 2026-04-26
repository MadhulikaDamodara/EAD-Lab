import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h4>Home Page</h4>;
}

function About() {
  return <h4>About Page</h4>;
}

function RoutingExample() {
  return (
    <Router>
      <div>
        <h3>Routing Example</h3>

        <Link to="/">Home</Link> | 
        <Link to="/about"> About</Link>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default RoutingExample;