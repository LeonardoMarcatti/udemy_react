import React, {Suspense} from "react";
import { json, Link, useRouteLoaderData, redirect, defer, Await } from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from '../components/EventsList'
import getAuthToken from '../util/auth'

const deleteEvent = async ({request, params}) => {
   const id = params.id
   const token = getAuthToken()
   const response = await fetch(`http://192.168.1.160:8080/events/${id}`, 
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
   const response = await fetch('http://192.168.1.160:8080/events');
   if (!response.ok) {
     throw json({message: 'Data could not be fetched'}, {status: 500})
   } else {
     const resData = await response.json();
     return resData.events
   }
 }

 const loadEvent = async (id) => {
   const data = await fetch(`http://192.168.1.160:8080/events/${id}`)
   if (!data.ok) {
      throw json({message: 'Could not fetch details fot the selected event'}, {status: 500})
   } else {
      const resData = await data.json();
     return resData.event
   }
 }

 const loadDetails = async ({request, params}) => {
   return defer({
      event: await loadEvent(params.id),
      events: retrieveEvents()
   })
}

const EventDetail = () => {
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