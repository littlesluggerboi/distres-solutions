import styles from "../services/services.module.css";
import data from "../../data/blogs_data";
import { Link } from "react-router-dom";
import Blog from "./blog/blog";
import Faq from "./faq/faq";
import { useState } from "react";
const Blogs = () => {
  const [selected, setSelected] = useState(0);
  return (
    <>
      <div className={styles.services}>
        <div className={styles.navigation}>
          {data.map((val, index) => {
            return (
              <>
                <Link
                  key={val.title}
                  className={selected === index ? styles.selected : ""}
                  onClick={() => {
                    setSelected(index);
                  }}
                >
                  {val.title}
                </Link>
              </>
            );
          })}
        </div>
        {data[selected].type === "blog" ? (
          <Blog
            title={data[selected].title}
            paragraphs={data[selected].paragraphs}
          />
        ) : (
          <Faq title={data[selected].title} faqs={data[selected].faq} />
        )}
      </div>
    </>
  );
};

export default Blogs;
