import styles from "./equipment.module.css";
import equipmentImg from "./equipment.svg";
import facilityImg from "./facility.svg";

const Equipment = () => {
  return (
    <>
      <div className={styles.equipment}>
        <div className={styles.left}>
          <div>
            <h3>Storage facilities</h3>
            <div className={styles.detail}>
              <p>
                Facilities are approved by the governing body that deals with
                the disposal, treatment, storage and transport of hazardous
                wastes.
              </p>
              <p>
                <img
                  src={facilityImg}
                  alt="An image of a treatment facility for hazardous waste."
                />
                A special crack control additive was added to the concrete to
                reduce the occurrence of shrinkage and cracks while enhancing
                its durability ensuring the safety of chemicals that are in the
                process of recycling, treatment or disposal.
              </p>
            </div>
          </div>
          <div>
            <h3>Waste Treatment Equipments</h3>
            <div className={styles.detail}>
              <p>
                Top of the line equipment which includes incinerators,
                extractors and dryers imported from Germany used fro treatment
                of various hazardous wastes
              </p>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <h3>Waste Transport</h3>
          <div className={styles.detail}>
            <img src={equipmentImg} alt="An image of a truck for hauling." />
            <p>
              Hazardous wastes are transported using government approved heavy
              duty trucks equipped with GPS tracking devices which undergo
              monthly maintenance checks.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Equipment;
