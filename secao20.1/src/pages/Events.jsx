import EventsList from '../components/EventsList';
import React, {Suspense} from 'react';
import { json, useLoaderData, defer, Await } from 'react-router-dom';

// Carrega a página e depois os dados vindos do servidor remoto
const retrieveEvents = async () => {
   const response = await fetch('http://192.168.1.160:8080/events');
   if (!response.ok) {
      throw  new Error({message: 'Data could not be fetched'}, {status: 500})
   } else {
      const resData = await response.json();
      return resData.events
   }
}

const eventsLoader = async () => {
   return defer({
      events: retrieveEvents()
   })
}

const Events = () => {
   const {events} = useLoaderData() // Recebe o objeto que vem da função defer
   return (
      <Suspense fallback={<h3 style={{textAlign: 'center'}}>Loading events...</h3>} >
         <Await resolve={events}>
            {
               (retrievedEvents) => <EventsList events={retrievedEvents} />
            }
         </Await>
      </Suspense>
   );
}

export {eventsLoader}
export default Events;