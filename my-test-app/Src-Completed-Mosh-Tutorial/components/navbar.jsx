import React from "react";

// a stateless functional component in react... since only from props etc
// pass props as arg and don't use 'this'
const NavBar = props => {
  return (
    <nav className="navbar">
      <a className="navbar-brand" href="http://www.google.com">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {props.counters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
