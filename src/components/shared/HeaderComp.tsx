import Link from "next/link";
import React from "react";
import { navList } from "./navList";

const HeaderComp = () => {
  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <Link href="/">
            <a className="text-uppercase">artsy</a>
          </Link>

          <ul className="nav">
            {navList.map((nav, i) => (
              <li className="nav-items" key={i}>
                <Link href={nav.link}>
                  <a className="nav-link">{nav.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderComp;
