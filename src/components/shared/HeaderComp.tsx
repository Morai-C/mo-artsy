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
          <button
            className="d-lg-none"
            onClick={() => {
              setHamburgerOpen(true);
            }}
          >
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

      <nav
        className={`${
          hamburgerOpen === true
            ? "mobile-nav d-flex flex-column justify-content-between bg-warning container"
            : "d-none"
        }`}
      >
        <div className="d-flex justify-content-between">
          <Link href="/">
            <a className="text-uppercase">artsy.</a>
          </Link>

          <button
            className=""
            onClick={() => {
              setHamburgerOpen(false);
            }}
          >
            <i className="fa-solid fs-5 fa-xmark"></i>
          </button>
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

        <div className="d-flex justify-content-end">
          <div className="chat-icon-box d-flex justify-content-center align-items-center">
            <i className="fa-solid text-light fa-2x fa-message"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderComp;
