import { useState } from "react";
import styles from "./services.module.css";
import { Link } from "react-router-dom";
// import Equipment from "./equipments/equipment";
// import Collections from "./collections/collections";
import Avail from "./avail/avail";

const Services = () => {
  const [selected, setSelected] = useState(0);

  return (
    <>
      <div className={styles.services}>
        <div className={styles.navigation}>
          <Link
            className={selected === 0 ? styles.selected : ""}
            onClick={() => {
              setSelected(0);
            }}
          >
            equipments and facilities
          </Link>
          <Link
            className={selected === 1 ? styles.selected : ""}
            onClick={() => {
              setSelected(1);
            }}
          >
            collection items w/ prices
          </Link>
          <Link
            className={selected === 2 ? styles.selected : ""}
            onClick={() => {
              setSelected(2);
            }}
          >
            how to avail services
          </Link>
        </div>
        {/* <Collections/> */}
        {/* <Equipment /> */}
        <Avail/>
      </div>
    </>
  );
};

export default Services;
