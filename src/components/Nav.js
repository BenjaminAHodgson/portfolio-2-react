import { NavLink } from "react-router-dom";
import '../scss/nav.scss';

export const Nav = (props) => {
  const navItems = props.navItems;
  return (
    <nav className="nav">
      <div className="nav__head">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/benjaminahodgson"
        >
          Personal Github
        </a>
        <h1>Benjamin Hodgson</h1>
        <NavLink to="contact">Contact me</NavLink>
      </div>
      <ul className="nav__items">
        {navItems.map((item) => {
          return (
            <li key={item.name}>
              <NavLink
                className={({ isActive }) =>
                  "nav__item" + (isActive ? " active" : "")
                }
                key={item.name}
                to={item.path}
                {...item.props}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
