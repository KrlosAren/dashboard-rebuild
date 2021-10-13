import React, { useContext } from "react";
import { AppContext } from 'src/context/AppContext';
import { EventsProps } from "../../interfaces";
import Event from "./Event";

const Events = () => {
  const { state } = useContext(AppContext);
  const { events } = state;

  return (
    <div className="event__container">
      <h2>Events</h2>
      {events.map((event: EventsProps) => (
        <Event event={event} key={event.id} />
      ))}
    </div>
  );
};

export default Events;
