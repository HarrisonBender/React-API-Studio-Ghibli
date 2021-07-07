import React from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <img
          id="ghibli-logo"
          img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/1200px-Studio_Ghibli_logo.svg.png"
          alt="studio-ghibli-logo"
        />
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to="/" class="nav-link">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/films" class="nav-link">
                Films
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/people" class="nav-link">
                People
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/species" class="nav-link">
                Species
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/vehicles" class="nav-link">
                Vehicles
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
