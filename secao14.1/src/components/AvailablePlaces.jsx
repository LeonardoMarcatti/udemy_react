import Places from './Places.jsx';
import React, {useState, useEffect} from 'react';
import ErrorMessage from './Error.jsx';
import {sortPlacesByDistance} from '../loc.js';
import { fetchAvailablePlaces } from '../http.js';

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    setIsLoading(true)
      const getData = async () => {
        try {
          const places = await fetchAvailablePlaces();

          navigator.geolocation.getCurrentPosition((position) => {
            const sortedPlaces = sortPlacesByDistance(places, position.coords.latitude, position.coords.longitude)
            setAvailablePlaces(sortedPlaces)
            setIsLoading(false)
          })
    
        } catch (error) {
          setError({message: error.message || 'Failed'})
          setIsLoading(false)
        }
      }
      
    getData()
  }, [])

  if (error) {
    return <ErrorMessage title="Error" message={error.message}/>
  }
  
  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isLoading}
      loading="Loading places..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
