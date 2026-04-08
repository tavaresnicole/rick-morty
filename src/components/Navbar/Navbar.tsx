import { NavLink } from "react-router-dom";
import * as styles from "./Navbar.styles";

const Navbar = () => {
  return (
    <nav className={styles.navbarContainer}>
      <NavLink to="/" className="font-bold">
        Rick&Morty
      </NavLink>
      <div className={styles.navbarLink}>
        <NavLink to="/" className={styles.hoverLink}>
          Home
        </NavLink>
        <NavLink to="/characters" className={styles.hoverLink}>
          Characters
        </NavLink>
        <NavLink to="/favorites" className={styles.hoverLink}>
          Favorites
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
