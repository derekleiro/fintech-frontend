import { Link } from "react-router-dom";
import _ from "./navbar.module.css";

const NavBar = () => {
  return (
    <nav className={_.navbar}>
      <ul>
        <li>
          <Link to={"/"}>Streams</Link>
        </li>
        <li>
          <Link to={"/students"}>Students</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
