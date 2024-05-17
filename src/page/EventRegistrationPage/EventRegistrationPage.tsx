import { Link } from "react-router-dom";

const EventRegistrationPage = () => {
  return (
    <>
      <Link to="/">Go back</Link>

      <h2>Event registration</h2>
      <label>
        Full name
        <input type="text" />
      </label>
      <label>
        Email
        <input type="text" />
      </label>
      <label>
        Date of birth
        <input type="text" />
      </label>
      <p>Where did you hear about this event?</p>
      <div>
        <input type="radio" id="social-media" name="hear-event" value="social-media" />
        <label htmlFor="social-media">Social media</label>
      </div>
      <div>
        <input type="radio" id="friends" name="hear-event" value="friends" />
        <label htmlFor="friends">Friends</label>
      </div>
      <div>
        <input type="radio" id="found-myself" name="hear-event" value="found-myself" />
        <label htmlFor="found-myself">Found myself</label>
      </div>
    </>
  );
};

export default EventRegistrationPage;
