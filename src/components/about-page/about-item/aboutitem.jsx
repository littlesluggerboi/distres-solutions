import styles from "./aboutitem.module.css";
import PropTypes from "prop-types";

const AboutItem = ({ header, details }) => {
  return (
    <div className={styles.item}>
      <h3>{header}</h3>
      <hr />
      <div className={styles.details}>{details}</div>
    </div>
  );
};

AboutItem.propTypes = {
  header: PropTypes.string,
  details: PropTypes.node,
};

export default AboutItem;
