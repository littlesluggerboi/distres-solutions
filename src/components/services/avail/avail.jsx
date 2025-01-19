import styles from "./avail.module.css";
import processImg from "./process.svg";
import labImg from "./lab.svg";

const Avail = () => {
  return (
    <>
      <div className={styles.avail}>
        <div>
          <img src={labImg} alt="Image of the company laboratory." />
          <p>
            To avail our services, you can fill out a contact form available on
            our official website or visit us at our office located at
            #No. Street, City, State, Country 1233. For concerns and
            inquiries, please leave a message through our email or social media
            accounts. We accept cash and cards in our office but we also do
            electronic bank transfer for our modes of payment.
          </p>
        </div>
        <div>
          <img
            src={processImg}
            alt="Flow chart of processes for availing services."
          />
        </div>
      </div>
    </>
  );
};

export default Avail;
