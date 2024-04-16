import React from "react";
import EventForm from '../components/EventForm'
import {useRouteLoaderData } from 'react-router-dom'

console.log('edit');
const EditEvent = () => {
   const data = useRouteLoaderData('eventID')
   return <EventForm event={data.event} method="patch" />
}

export default EditEvent