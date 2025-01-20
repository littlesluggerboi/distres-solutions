import PropTypes from "prop-types";
import styles from "./faq.module.css";

const Faq = ({ title, faqs }) => {
  return (
    <>
      <div className={styles.container}>
        <h3>{title}</h3>
        <div className={styles.faqs}>
          {faqs.map((val) => {
            return (
              <>
                <h4>
                  <i>{val.question}</i>
                </h4>
                <p>{val.answer}</p>
              </>
            );
          })}

          <div className={styles.form}>
            <textarea
              name="question"
              id="question"
              placeholder="Leave us a question"
            ></textarea>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

Faq.propTypes = {
  title: PropTypes.string,
  faqs: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string,
      answer: PropTypes.string,
    })
  ),
};

export default Faq;
