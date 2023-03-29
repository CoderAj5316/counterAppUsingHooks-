import React, { useState } from "react";
import "./NavBar.css";
import { GiHamburgerMenu } from "react-icons/gi";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <label className="logo">Algoes</label>

        <ul className={"menu-link"}>
          <li>
            <a className="aHov" href="#">
              Home1
            </a>
          </li>
          <li>
            <a className="aHov" href="#">
              Services1
            </a>
          </li>
          <li>
            <a className="aHov" href="#">
              About
            </a>
          </li>
          <li>
            <a className="aHov" href="#">
              contact
            </a>
          </li>
        </ul>

        <div className="hamBurger">
          <GiHamburgerMenu
            className="hamburger-menu"
            style={{
              cursor: "pointer",
            }}
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </nav>

      {isOpen && (
        <ul className="menu-link2">
          <li>
            <a className="aHov2" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="aHov2" href="#">
              Services
            </a>
          </li>
          <li>
            <a className="aHov2" href="#">
              About
            </a>
          </li>
          <li>
            <a className="aHov2" href="#">
              contact
            </a>
          </li>
        </ul>
      )}
    </>
  );
};

export default NavBar;