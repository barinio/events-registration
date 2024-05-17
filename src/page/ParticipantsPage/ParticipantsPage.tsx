import { Link } from "react-router-dom";
import { dataParticipants } from "../../data";
import styles from "./ParticipantsPage.module.scss";

const ParticipantsPage = () => {
  return (
    <>
      <Link to="/">Go back</Link>

      {/* <h2>{eventTitle} participants</h2> */}
      <h2>"Awesome Event" participants</h2>
      {dataParticipants.map(({ name, email }) => (
        <div className={styles.container}>
          <p>{name}</p>
          <p>{email}</p>
        </div>
      ))}
    </>
  );
};

export default ParticipantsPage;
