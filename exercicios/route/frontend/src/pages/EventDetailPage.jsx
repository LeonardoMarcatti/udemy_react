import React from "react";
import { useParams, Link } from "react-router-dom";

const EventDetailPage = () => {
   const params = useParams()
   return (
      <>
         <h1>Event Detail Page</h1>
         <h3>{params.id}</h3>
         <Link to='/events' relative="path" >Back</Link>
      </> 
   )
}

export default EventDetailPage