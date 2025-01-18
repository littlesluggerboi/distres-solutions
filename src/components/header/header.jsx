import { useState } from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [selected, setSelected] = useState("home");
  return (
    <>
      <header>
        <nav>
          <img src="/logo.svg" alt="Distres Solutions Logo" />
          <div className={styles.links}>
            <Link
              className={selected === "home" ? styles.selected : ""}
              onClick={() => {
                setSelected("home");
              }}
            >
              Home
            </Link>
            <Link
              className={selected === "about" ? styles.selected : ""}
              onClick={() => {
                setSelected("about");
              }}
            >
              About Us
            </Link>
            <Link
              className={selected === "services" ? styles.selected : ""}
              onClick={() => {
                setSelected("services");
              }}
            >
              Services
            </Link>
            <Link
              className={selected === "blogs" ? styles.selected : ""}
              onClick={() => {
                setSelected("blogs");
              }}
            >
              Blogs
            </Link>
            <Link
              className={selected === "contact" ? styles.selected : ""}
              onClick={() => {
                setSelected("contact");
              }}
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
