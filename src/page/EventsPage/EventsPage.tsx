import { useEffect, useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { EventBoard } from "../../types/EventBoard";
import { getEventsList } from "../../services/api";
import { formatEventDate } from "../../helpers/formatEventDate";
import styles from "./EventsPage.module.scss";
import Loader from "../../components/Loader/Loader";

const EventsPage = () => {
  const [eventsList, setEventsList] = useState<EventBoard[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  const lastItemRef = useRef(null);

  const fetchEventsList = useCallback(async () => {
    try {
      setIsLoading(true);
      const { events, totalPages } = await getEventsList(currentPage);
      setEventsList((prevEvents) => [...prevEvents, ...events]);
      setTotalPages(totalPages);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [currentPage]);

  useEffect(() => {
    fetchEventsList();
  }, [fetchEventsList]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const lastItem = entries[0];
        if (lastItem.isIntersecting && !isLoading && currentPage < totalPages) {
          setCurrentPage((prevPage) => prevPage + 1);
        }
      },
      { root: null, rootMargin: "200px", threshold: 1.0 }
    );
    const lastItem = lastItemRef.current;
    lastItem && observer.observe(lastItem);
    return () => {
      lastItem && observer.unobserve(lastItem);
    };
  }, [isLoading, totalPages, currentPage]);

  const sortEvents = (criteria: string) => {
    const sortedEvents = [...eventsList];

    switch (criteria) {
      case "title":
        sortedEvents.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "eventDate":
        sortedEvents.sort(
          (a, b) => new Date(a.eventDate).getTime() - new Date(b.eventDate).getTime()
        );
        break;
      case "organizer":
        sortedEvents.sort((a, b) => a.organizer.localeCompare(b.organizer));
        break;
      default:
        break;
    }

    setEventsList(sortedEvents);
  };

  return (
    <>
      <h1 className={styles.mainTitle}>Events Board</h1>
      <div className={styles.sortButtonsList}>
        <button className={styles.sortButton} onClick={() => sortEvents("title")}>
          Sort by Title
        </button>
        <button className={styles.sortButton} onClick={() => sortEvents("eventDate")}>
          Sort by Event Date
        </button>
        <button className={styles.sortButton} onClick={() => sortEvents("organizer")}>
          Sort by Organizer
        </button>
      </div>
      <ul className={styles.eventsList}>
        {eventsList.map(({ _id, title, description, eventDate, organizer }: EventBoard, index) => (
          <li
            className={styles.containerEventItem}
            key={_id}
            ref={index === eventsList.length - 1 ? lastItemRef : null}
          >
            <h3 className={styles.eventTitle}>{title}</h3>
            <div className={styles.additionalInformation}>
              <p className={styles.eventDescription}>{description}</p>
              <p className={styles.eventDate}>{formatEventDate(eventDate)}</p>
              <p className={styles.eventOrganizer}>
                <span className={styles.eventOrganizerDescription}>Organizer: </span>
                {organizer}
              </p>
              <div className={styles.eventButtons}>
                <Link to={`event-registration/${_id}`} className={styles.register}>
                  Register
                </Link>
                <Link
                  to={`event-participants/${_id}?title=${encodeURIComponent(title)}`}
                  className={styles.view}
                >
                  View
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {isLoading && <Loader />}
    </>
  );
};

export default EventsPage;
