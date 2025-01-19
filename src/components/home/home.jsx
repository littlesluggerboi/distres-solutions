import styles from "./home.module.css";
import heroImg from "./background.svg";

const Home = () => {
  return (
    <>
      <div className={styles.home}>
        <img src={heroImg} alt="" />
        <div className={styles.banner}>
          <h2><q>Disposal, Treatment, Storage and Transport of Hazardous Wastes in your given location.</q></h2>
        </div>
      </div>
    </>
  );
};

export default Home;
