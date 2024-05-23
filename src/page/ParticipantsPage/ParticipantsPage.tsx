import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { Participants, RegistrationData } from "../../types/Participants";
import { getParticipantsList } from "../../services/api";
import Loader from "../../components/Loader/Loader";

import styles from "./ParticipantsPage.module.scss";
import RegistrationChart from "../../components/RegistrationChart/RegistrationChart";

const ParticipantsPage = () => {
  const [participantsList, setParticipantsList] = useState<Participants[]>([]);
  const [registrationData, setRegistrationData] = useState<RegistrationData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { eventId } = useParams();
  const [searchQuery, setSearchQuery] = useState("");

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const eventTitle = decodeURIComponent(queryParams.get("title") || "");

  useEffect(() => {
    const fetchParticipantsList = async () => {
      if (!eventId) {
        toast.error(`Event ID is missing.`);
        return;
      }

      try {
        setIsLoading(true);
        const total = await getParticipantsList(eventId);
        setParticipantsList(total);

        const registrationDataTemp: { [key: string]: number } = {};
        total.forEach((item: { registrationTime: string }) => {
          const date = item.registrationTime.split("T")[0];
          registrationDataTemp[date] = (registrationDataTemp[date] || 0) + 1;
        });

        const registrationData: RegistrationData[] = Object.entries(registrationDataTemp).map(
          ([date, count]) => ({
            date,
            count
          })
        );

        setRegistrationData(registrationData);
      } catch (error) {
        toast.error(`Error fetching total elements: ${error}`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchParticipantsList();
  }, [eventId]);

  const filteredParticipantsList = participantsList.filter(
    (participant) =>
      participant.fullName.toLowerCase().includes(searchQuery.trim().toLowerCase()) ||
      participant.email.toLowerCase().includes(searchQuery.trim().toLowerCase())
  );

  return (
    <>
      <Link to="/" className={styles.goBackLink}>
        ←Go Back
      </Link>

      <h2 className={styles.titlePage}>"{eventTitle}" participants</h2>

      {filteredParticipantsList.length > 0 || isLoading ? (
        <>
          <RegistrationChart data={registrationData} />

          <div className={styles.participantSearchContainer}>
            <label htmlFor="participantSearch">Search by name or email</label>
            <input
              id="participantSearch"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
          </div>
          <ol className={styles.participantsList}>
            {filteredParticipantsList.map(({ fullName, email }: Participants) => (
              <li className={styles.container} key={email}>
                <p className={styles.participantName}>{fullName}</p>
                <p>{email}</p>
              </li>
            ))}
          </ol>
        </>
      ) : (
        <div className={styles.emptyWrapper}>
          <p className={styles.emptyText}>It's empty here.😢</p>

          <Link to={`/event-registration/${eventId}`} className={styles.invitationText}>
            Click to register.😉
          </Link>
        </div>
      )}

      {isLoading && <Loader />}
    </>
  );
};

export default ParticipantsPage;
