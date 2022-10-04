import styles from "../scss/form.module.scss";

export const Form = () => {
  return (
    <div>
      <form
        className={styles.form}
        name="contact"
        method="post"
        data-netlify="true"
      >
        <h2>Contact me</h2>
        <input placeholder="Name*" type="text" name="name" required />
        <input placeholder="Email*" type="email" name="email" required />
        <textarea
          placeholder="What are you enquiring about?"
          name="message"
          required
        ></textarea>
        <button className="btn btn-primary" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};
