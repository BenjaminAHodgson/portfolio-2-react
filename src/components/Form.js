import { useState } from "react";
import { encode } from "../inc/util";
import styles from "../scss/form.module.scss";

export const Form = () => {
  const [form, setForm] = useState({});
  const [status, setStatus] = useState({
    title: "Contact Me",
    message: "",
    validated: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...form }),
    })
      .then(() =>
        setStatus({
          message: "I'll take a look as soon as I can.",
          title: "Thank you!",
          validated: true,
        })
      )
      .catch((error) => alert(error));
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div>
      <form
        className={styles.form}
        name="contact"
        method="post"
        data-netlify="true"
        onSubmit={handleSubmit}
      >
        <h2 className="stagger">{status.title}</h2>
        {status.message && <p>{status.message}</p>}
        {!status.validated && (
          <div>
            <input
            className="stagger"
              placeholder="Name*"
              type="text"
              name="name"
              required
              onChange={handleChange}
            />
            <input
            className="stagger"
              placeholder="Email*"
              type="email"
              name="email"
              required
              onChange={handleChange}
            />
            <textarea
            className="stagger"
              placeholder="What are you enquiring about?"
              name="message"
              required
              onChange={handleChange}
            ></textarea>
            <button className="btn btn-primary stagger" type="submit">
              Send
            </button>
          </div>
        )}
      </form>
    </div>
  );
};
