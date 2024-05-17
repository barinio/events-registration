import { Link } from "react-router-dom";
import { dataEvents } from "../../data";
import styles from "./EventsPage.module.scss";
import { EventBoard } from "../../types/EventBoard";

const EventsPage = () => {
  return (
    <div>
      {dataEvents.map(({ title, description, eventDate, organizer }: EventBoard) => (
        <div className={styles.containerItem} key={title}>
          <p>{title}</p>
          <p>{description}</p>
          <p>{eventDate}</p>
          <p>{organizer}</p>

          <Link to="event-registration">Register</Link>
          <Link to="event-participants">View</Link>
        </div>
      ))}
    </div>
  );
};

export default EventsPage;
