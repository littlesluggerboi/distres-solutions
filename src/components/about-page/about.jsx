import AboutItem from "./about-item/aboutitem";
import styles from "./about.module.css";

const About = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.about}>
          <AboutItem
            header={"About"}
            details={
              <>
                <p>
                  A TSD facility in the Area that offers service to a{" "}
                  <b>wide variety</b> of <b>hazardous wastes</b>.
                </p>
                <p>
                  <b>Reliable</b> hazardous waste management for establishments
                  and individuals.
                </p>
                <p>
                  Offers <b>hassle free</b> disposal of wastes.
                </p>
              </>
            }
          />
          <AboutItem
            header={"Core Values"}
            details={
              <>
                <p>The company embodies the core values of:</p>
                <ul>
                  <li>
                    <strong>Integrity</strong>
                  </li>
                  <li>
                    <strong>Competence</strong>
                  </li>
                  <li>
                    <strong>Reliability</strong>
                  </li>
                </ul>
              </>
            }
          />
        </div>

        <div className={styles.about}>
          <AboutItem
            header={"Vision"}
            details={
              <>
                <p>
                  The DiSreS Solutions envisions itself as a topnotch waste
                  management company advocating responsible consumption and
                  production for establishments and individuals by encouraging
                  the proper management of wastes.
                </p>
              </>
            }
          />
          <AboutItem
            header={"Mission"}
            details={
              <>
                <p>
                  To provide appropriate and relevant waste management services
                  for a variety of hazardous waste.
                </p>
                <p>
                  To ease the burden of waste management for establishments and
                  individuals.
                </p>
              </>
            }
          />
        </div>
      </div>
    </>
  );
};

export default About;
