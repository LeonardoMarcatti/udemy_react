const fetchAvailablePlaces = async () => {
   const response = await fetch('http://localhost:3000/places')
   const data = await response.json()

   if (!response.ok) {
     throw new Error('Please try again later.')
   }

   return data.places
}

const fetchUserPlaces = async () => {
  const response = await fetch('http://localhost:3000/user-places')
  const data = await response.json()

  if (!response.ok) {
    throw new Error('Failed')
  }

  return data.places
}

const updateUserPlaces = async (places) => {
  const response = await fetch('http://localhost:3000/user-places', { 
    method: 'put', 
    body: JSON.stringify({places}), 
    headers: { 'Content-Type': 'application/json'}
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error('Could not save places')
  }

  return data.message;
}

export { fetchAvailablePlaces, updateUserPlaces, fetchUserPlaces }