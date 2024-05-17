import "./Navbar.css";
import logo from "../assets/Starbucks_Corporation_Logo.svg.png";
import { MdLocationOn } from "react-icons/md";
import { useState } from "react";

export const Navbar = ({ selectedPage, setSelectedPage }: any) => {
  const [menu, setMenu] = useState(false);
  menu
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");
  return (
    <div className="navbar">
      {menu ? (
        <div
          className="side-menu-box"
          onClick={() => {
            setMenu(false);
          }}
        ></div>
      ) : null}
      <div
        className={
          menu ? "side-menu-not-active side-menu" : "side-menu-active side-menu"
        }
      >
        <div>
          <ul className="side-menu-tabs">
            <li
              onClick={() => {
                setSelectedPage("menu");
                setMenu(false);
              }}
            >
              Menu
            </li>
            <li
              onClick={() => {
                setSelectedPage("rewards");
                setMenu(false);
              }}
            >
              Rewards
            </li>
            <li
              onClick={() => {
                setSelectedPage("gift-cards");
                setMenu(false);
              }}
            >
              Gift cards
            </li>
          </ul>
        </div>
        <hr />
        <div className="">
          <div>
            <button className="btn white-btn">Sign in</button>
            <button className="btn black-btn">Join now</button>
          </div>
          <div style={{ display: "flex", margin: "1rem" }}>
            <MdLocationOn style={{ fontSize: 25 }} />
            <div className="navbar-find-a-store">Find a store</div>
          </div>
        </div>
      </div>
      <div className="navbar-left">
        <div className="navbar-logo">
          <img height={52} src={logo} alt="Logo" />
        </div>
        <div>
          <ul className="menu-tabs">
            <li
              className={selectedPage === "menu" ? "selected" : ""}
              onClick={() => setSelectedPage("menu")}
            >
              MENU
            </li>
            <li
              className={selectedPage === "rewards" ? "selected" : ""}
              onClick={() => setSelectedPage("rewards")}
            >
              REWARDS
            </li>
            <li
              className={selectedPage === "gift-cards" ? "selected" : ""}
              onClick={() => setSelectedPage("gift-cards")}
            >
              GIFT CARDS
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-right">
        <MdLocationOn style={{ fontSize: 25 }} />
        <div className="navbar-find-a-store">Find a store</div>
        <div>
          <button className="btn white-btn">Sign in</button>
          <button className="btn black-btn">Join now</button>
        </div>
      </div>
      <button
        aria-label="Open menu"
        className="burger-menu sb-iconButton relative color-textBlackSoft"
        aria-expanded="false"
        aria-controls="primary-hamburger-nav-panel"
        data-e2e="navMenuButton"
        style={
          menu
            ? { minWidth: "44px", minHeight: "44px", marginRight: 16 }
            : { minWidth: "44px", minHeight: "44px" }
        }
        onClick={() => setMenu((prev) => !prev)}
      >
        <svg
          aria-hidden="true"
          className="valign-middle absoluteCenter"
          focusable="false"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
          style={{
            width: "24px",
            height: "24px",
            overflow: "visible",
            fill: "currentcolor",
          }}
        >
          <path
            className="sb-hamburgerButton-middleLine-CLOSED sb-hamburgerButton-animation"
            d="M21,12.9H3c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9h18c0.5,0,0.9,0.4,0.9,0.9S21.5,12.9,21,12.9z"
          ></path>
          <path
            className="sb-hamburgerButton-topLine-CLOSED sb-hamburgerButton-animation sb-hamburgerButton-animation-outer-lines"
            d="M21,6.9H3C2.5,6.9,2.1,6.5,2.1,6S2.5,5.1,3,5.1h18c0.5,0,0.9,0.4,0.9,0.9S21.5,6.9,21,6.9z"
          ></path>
          <path
            className="sb-hamburgerButton-bottomLine-CLOSED sb-hamburgerButton-animation sb-hamburgerButton-animation-outer-lines"
            d="M21,18.9H3c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9h18c0.5,0,0.9,0.4,0.9,0.9S21.5,18.9,21,18.9z"
          ></path>
          <circle
            className="sb-icon-hover"
            cx="50%"
            cy="50%"
            fill="transparent"
            r="75%"
          ></circle>
        </svg>
      </button>
    </div>
  );
};
