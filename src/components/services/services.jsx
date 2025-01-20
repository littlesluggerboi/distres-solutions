import styles from "./services.module.css";
import { Link, Outlet, useLocation } from "react-router-dom";
const Services = () => {
  const { pathname } = useLocation();
  let path = pathname.replace("/services", "");
  path = path.replaceAll("/", "");
  return (
    <>
      <div className={styles.services}>
        <div className={styles.navigation}>
          <Link
            to={"equipment"}
            className={
              path === "equipment" || path === "" ? styles.selected : ""
            }
          >
            equipments and facilities
          </Link>
          <Link
            to={"collections"}
            className={path === "collections" ? styles.selected : ""}
          >
            collection items w/ prices
          </Link>
          <Link
            to={"avail"}
            className={path === "avail" ? styles.selected : ""}
          >
            how to avail services
          </Link>
        </div>
        <Outlet></Outlet>
        {/* <Collections/> */}
        {/* <Equipment /> */}
        {/* <Avail/> */}
      </div>
    </>
  );
};

export default Services;
