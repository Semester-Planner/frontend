import { useState } from "react";
import Button from "../Button";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";

export const Navbar = () => {
  const [clicked, handleClick] = useState(false);

  return (
    <nav className="navbarItems">
      <Button onClick={() => handleClick(!clicked)}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </Button>
      <ul className={clicked ? "nav active" : "nav"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.class} href={item.route}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
