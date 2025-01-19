import styles from "./footer.module.css";
import fbIcon from "./facebook.svg";
import instaIcon from "./instagram.svg";
import twitterIcon from "./twitter.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <div className={styles.footer}>
          <div className={styles.contacts}>
            <h2>Contact Us</h2>
            <ul>
              <li>Address:&nbsp;#No. Street, City, State, Country, 1234</li>
              <li>Phone:&nbsp;000-123-1234</li>
              <li>Mobile:&nbsp;+1122659744</li>
              <li>Email:&nbsp;email@distressolutions.com</li>
            </ul>
          </div>
          <div className={styles.socials}>
            <h2>Follow Us</h2>
            <div className={styles.icons}>
              <img src={fbIcon} alt="Facebook Icons" />
              <img src={instaIcon} alt="Instagram Icon" />
              <img src={twitterIcon} alt="Twitter Icon" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
