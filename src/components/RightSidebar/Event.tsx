import moment from "moment";
import { EventType } from "../../interfaces";

const Event = ({ event }: EventType) => {
  const { date, location, description } = event;

  const month = moment(date).format("MMM");
  const eventDay = moment(date).format("Do");

  return (
    <div className="event">
      <div className="event__date">
        <p>{eventDay}</p>
        <p>{month}</p>
      </div>
      <div className="event__info">
        <p>{description}</p>
        <p>{location}</p>
        <p>
          Go <i className="fas fa-plus"></i>
        </p>
      </div>
    </div>
  );
};

export default Event;
