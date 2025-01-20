import PropTypes from "prop-types";
import styles from "./blog.module.css"

const Blog = ({ title, paragraphs }) => {
  return (
    <>
      <div>
        <h3>{title}</h3>
        <div className={styles.indent}>
          {paragraphs.map((val, index) => {
            return <p key={index}>{val}</p>;
          })}
        </div>
      </div>
    </>
  );
};

Blog.propTypes = {
  title: PropTypes.string,
  paragraphs: PropTypes.arrayOf(PropTypes.string),
};

export default Blog;
