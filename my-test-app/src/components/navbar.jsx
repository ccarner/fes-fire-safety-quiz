//import React from "react";
import React, { Component, useState, useEffect, useLayoutEffect } from "react";

import { Link } from "react-router-dom";

// a stateless functional component in react... since only from props etc
// pass props as arg and don't use 'this'
const NavBar = props => {
  const [page, setpage] = useState(null);

  useEffect(() => {
    setpage(window.location.href.toString().split(window.location.host+"/app/")[1])

  });
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Home{" "}
      </Link>
      {/* <Link className="navbar-brand" to={("/helppage#"+page)}>
        Help{" "}
      </Link> */}
      <a href={("/app/helppage#"+page)}>help</a>
      <img alt="" width="75" src={"https://www.fes.com.au/www/wp-content/uploads/2012/08/logo.jpg"} />
    </nav>
  );
};

export default NavBar;
