import React from "react";
import "./header.css";

function Header() {
  return (
    <nav className="navbar navbar-primary text-white bg-black w-100 container  ">
      <h2 className="">Portfilio</h2>
      <ul className=" ul d-md-flex d-none  ">
        <li>Home</li>
        <li>About me</li>
        <li>Services</li>
        <li>Work</li>
      </ul>
      <div className="btn btn-outline-light d-none d-md-block m-1">
        Contact me{" "}
      </div>
    </nav>
  );
}

export default Header;
