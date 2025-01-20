import styles from "./header.module.css";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  let path = pathname.replace("/", "");
  path = path.split("/")[0];

  return (
    <>
      <header>
        <nav>
          <img src="/logo.svg" alt="Distres Solutions Logo" />
          <div className={styles.links}>
            <Link to={"/"} className={path === "" ? styles.selected : ""}>
              Home
            </Link>
            <Link
              to={"about"}
              className={path === "about" ? styles.selected : ""}
            >
              About Us
            </Link>
            <Link
              to={"services"}
              className={path === "services" ? styles.selected : ""}
            >
              Services
            </Link>
            <Link
              to={"blogs"}
              className={path === "blogs" ? styles.selected : ""}
            >
              Blogs
            </Link>
            <Link
              to={"contact"}
              className={path === "contact" ? styles.selected : ""}
            >
              Contact Us
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
