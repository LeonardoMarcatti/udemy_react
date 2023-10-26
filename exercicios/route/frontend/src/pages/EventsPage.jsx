import React from "react";
import EventList from '../components/EventsList'
import { Link } from "react-router-dom";

const dummy_events = [{id: 'ev1', title: 'Event 1'}, {id: 'ev2', title: 'Event 2'}, {id: 'ev3', title: 'Event 3'},]

const EventsPage = () => {
   const getEvents = async ()  => {
      const data = await fetch()
   }
   return (
      <>
         <h1>Events Page</h1>
         <ul>
            {
               dummy_events.map((el, i) => {
                  return <li key={el.id}><Link to={`event/${el.title}`}>{el.title}</Link></li>  
               })
            }
         </ul>
         {/* <EventList/> */}
      </>
   )
}

export default EventsPage