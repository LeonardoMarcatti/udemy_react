import React from "react";
import EventForm from "../components/EventForm";

const NewEvent = () => {
   console.log('new event');
   return <EventForm method="post" />
}

export default NewEvent