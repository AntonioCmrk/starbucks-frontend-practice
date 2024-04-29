import "./Navbar.css";
import logo from "../assets/Starbucks_Corporation_Logo.svg.png";
import { MdLocationOn } from "react-icons/md";

export const Navbar = ({ selectedPage, setSelectedPage }: any) => {
  return (
    <div className="navbar">
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
        <div className="navbar-find-a-store">
          <MdLocationOn style={{ fontSize: 25 }} />
          Find a store
        </div>
        <div>
          <button className="btn white-btn">Sign in</button>
          <button className="btn black-btn">Join now</button>
        </div>
      </div>
    </div>
  );
};
