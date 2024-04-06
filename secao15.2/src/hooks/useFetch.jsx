import {useEffect, useState} from "react";

const useFetch = (fetchFn, initialValue, selectedPlace) => {
   const [isLoading, setIsLoading] = useState()
   const [error, setError] = useState();
   const [fetchedData, setFetchedData] = useState(initialValue);
   const [modalIsOpen, setModalIsOpen] = useState(false);

   const handleStartRemovePlace = (place) => {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  const handleStopRemovePlace = () => {
    setModalIsOpen(false);
  }

   useEffect(() => {
      async function fetchData() {
         setIsLoading(true);
        try {
          const data = await fetchFn();
          setFetchedData(data);
        } catch (error) {
          setError({ message: error.message || 'Failed to fetch data.' });
        }
  
        setIsLoading(false);
      }
  
      fetchData();
    }, [fetchFn]);

    return {isLoading, error, fetchedData, setFetchedData, handleStartRemovePlace, modalIsOpen, handleStopRemovePlace, setModalIsOpen}
}

export default useFetch