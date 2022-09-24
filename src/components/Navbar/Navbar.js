import { MenuItems } from "./MenuItems";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbarItems">
      <ul>
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
