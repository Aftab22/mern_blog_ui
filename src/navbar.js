import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav>
        <ul class="menu">
          <li>
            <Link to="/">Home</Link>
            <Link to="/articles-list">Articles</Link>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
