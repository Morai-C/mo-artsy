import Link from "next/link";
import React, { useState } from "react";
import { navList } from "./navList";

const HeaderComp = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);

    console.log(hamburgerOpen);
  };

  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <button className="d-lg-none" onClick={toggleHamburger}>
            <i className="fa-solid fa-bars"></i>
          </button>
          <Link href="/">
            <a className="text-uppercase">artsy.</a>
          </Link>

          <ul className="d-none nav d-lg-flex ">
            {navList.map((nav, i) => (
              <li className="nav-items" key={i}>
                <Link href={nav.link}>
                  <a className="nav-link">{nav.name}</a>
                </Link>
              </li>
            ))}
          </ul>

          <div className="bg-danger nav-icons">
            <i className="fa-solid fa-magnifying-glass"></i>
            <i className="fa-solid fa-cart-shopping"></i>
            <i className="fa-regular fa-bell"></i>
          </div>
        </nav>
      </div>

      <nav className="mobile-nav d-flex flex-column justify-content-between bg-warning container">
        <div className="d-flex justify-content-between">
          <Link href="/">
            <a className="text-uppercase">artsy.</a>
          </Link>

          <div>
            <i className="fa-solid fs-5 fa-xmark" onClick={toggleHamburger}></i>
          </div>
        </div>

        <ul className="nav flex-column bg-danger">
          {navList.map((nav, i) => (
            <li className="nav-items" key={i}>
              <Link href={nav.link}>
                <a className="nav-link ps-0 ">{nav.name}</a>
              </Link>
            </li>
          ))}
        </ul>

        <div className="text-end">
          <div className="chat-icon-box">
            <i className="fa-solid fa-2x fa-message"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderComp;
