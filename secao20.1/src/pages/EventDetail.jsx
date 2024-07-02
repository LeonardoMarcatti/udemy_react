import React, {Suspense} from "react";
import { json, Link, useRouteLoaderData, redirect, defer, Await } from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from '../components/EventsList'
import getAuthToken from '../util/auth'

const loadDetails = async ({request, params}) => {
   const id = params.id
   return defer({
      event: await loadEvent(id),
      events: retrieveEvents()
   })
}

const deleteEvent = async ({request, params}) => {
   const id = params.id
   const token = getAuthToken()
   const response = await fetch(`http://localhost:8080/events/${id}`, 
   {  method: 'delete', 
   headers: {
      Authorization: `Bearer ${token}`
    },
   })

   if (!response.ok) {
      throw json({message: 'Could not delete event'}, {status: 500})
   }

   return redirect('/events')
}

const retrieveEvents = async () => {
   const response = await fetch('http://localhost:8080/events');
   if (!response.ok) {
     throw json({message: 'Data could not be fetched'}, {status: 500})
   } else {
     const resData = await response.json();
     return resData.events
   }
 }

 const loadEvent = async (id) => {
   const data = await fetch(`http://localhost:8080/events/${id}`)
   if (!data.ok) {
      throw json({message: 'Could not fetch details fot the selected event'}, {status: 500})
   } else {
      const resData = await data.json();
     return resData.event
   }
 }

const EventDetail = () => {
   console.log('detail');
   const {event, events} = useRouteLoaderData('eventID')

   return <>
      <Link to=".." relative="path">Back</Link>
      <Suspense fallback={<p>Loading...</p>}>
         <Await resolve={event}>
            {
               (loadedEvent) => <EventItem event={loadedEvent}/>
            }
         </Await>
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
         <Await resolve={events}>
            {
               (loadedEvents) =>  <EventsList events={loadedEvents}/>
            }
         </Await>
      </Suspense>
      
   </> 
}

export {loadDetails, deleteEvent}
export default EventDetail