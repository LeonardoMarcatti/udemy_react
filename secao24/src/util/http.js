const fetchEvents = async ({signal, search})  => {
  console.log(search);
  let url = 'http://localhost:3000/events';

  if (search) {
    url += `?search=${search}`
  }

  const response = await fetch(url, {signal});  
 
   if (!response.ok) {
     const error = new Error('An error occurred while fetching the events');
     error.code = response.status;
     error.info = await response.json();
     throw error;
   }

   const { events } = await response.json();

   return events;
 }

 const createNewEvent = async (eventData) => {
  const response = await fetch(`http://localhost:3000/events`, {
    method: 'POST',
    body: JSON.stringify(eventData),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const error = new Error('An error occurred while creating the event');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { event } = await response.json();

  return event;
}

 export {fetchEvents, createNewEvent}