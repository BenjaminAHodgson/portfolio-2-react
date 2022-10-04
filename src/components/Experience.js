import styles from "../scss/experience.module.scss";
import moment from "moment";

export const Experience = () => {
  const timeEnd = moment(new Date());
  const diffPro = timeEnd.diff(moment(new Date(2019, 2, 12)));
  const diffHob = timeEnd.diff(moment(new Date(2010, 5, 1)));

  const professional = moment.duration(diffPro);
  const hobby = moment.duration(diffHob);

  return (
    <div>
      <h2 className={styles.title + " stagger"}>I've been programming for:</h2>
      <div className={styles.experience + " stagger"}>
        <div className={styles.counter}>
          <p>
            {professional.years()} years {professional.days()} days{" "}
            <strong>professionally</strong>
          </p>
        </div>
        <div className={styles.counter}>
          <p>
            <small>
              {hobby.years()} years {hobby.days()} days <strong>total</strong>
            </small>
          </p>
        </div>
        <p>
          <small>
            <i>(and counting)</i>
          </small>
        </p>
      </div>
      <h2 className={styles.title + " stagger"}>as a:</h2>
      <div className={styles.experience + " stagger"}>
        <div className={styles.counter}>
          <p>
            Web Developer -{" "}
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://kingkong.co/"
            >
              King Kong
            </a>
          </p>
          <p>
            Full Stack Developer -{" "}
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://legroom.digital/"
            >
              LegRoom
            </a>
          </p>
          <p>
            Student of Software Engineering -{" "}
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.deakin.edu.au/"
            >
              Deakin University
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
