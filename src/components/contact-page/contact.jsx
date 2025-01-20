import styles from "./contact.module.css";

const Contact = () => {
  return (
    <>
      <div className={styles.contact}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <legend>CONTACT FORM</legend>
          <label htmlFor="name">*Name</label>
          <input type="text" id="name" name="name" placeholder="John John"/>
          <label htmlFor="email">*Email</label>
          <input type="email" id="email" name="email" placeholder="email.address@email.com" />
          <label htmlFor="contact">*Contact Info</label>
          <input type="text" id="contact" name="contact" placeholder="***-***-****" />
          <label htmlFor="message">*Message</label>
          <textarea type="text" id="message" rows={3} name="message" placeholder="Write your message" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
