import { useRef, useState, useCallback, useEffect} from 'react';

import Places from './components/Places.jsx';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import AvailablePlaces from './components/AvailablePlaces.jsx';
import { updateUserPlaces, fetchUserPlaces } from './http.js';
import ErrorMessage from './components/Error.jsx';

function App() {
  const selectedPlace = useRef();
  const [userPlaces, setUserPlaces] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [errorUpdate, setErrorUpdate] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
      const fetchPlaces = async () => {
        setIsLoading(true)
        try {
          const fetchedPlaces = await fetchUserPlaces()
          setUserPlaces(fetchedPlaces)
        } catch (error) {
          setError({message: error.message || 'Failed'})
        }
        setIsLoading(false)
      }
      fetchPlaces()
  }, [])
  

  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  const handleSelectPlace = async (selectedPlace) => {
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    });

    try {
      await updateUserPlaces([selectedPlace, ...userPlaces])
    } catch (error) {
      setUserPlaces(userPlaces)
      setErrorUpdate({message: error.message || 'Failed to update'})
    }
  }

  const handleRemovePlace = useCallback(async function handleRemovePlace() {
    setUserPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current.id)
    );

    try {
      await updateUserPlaces(userPlaces.filter(place => place.id != selectedPlace.current.id ))      
    } catch (error) {
      setUserPlaces(userPlaces)
      setErrorUpdate({message: error.message || 'Failed on delete'})
    }

    setModalIsOpen(false);
  }, [userPlaces]);

  const handleError = () => setErrorUpdate(null)

  return (
    <>
      <Modal open={errorUpdate}>
        {
          errorUpdate && <ErrorMessage title="An error occurred" message={errorUpdate.message} onConfirm={handleError}/>
        }
      </Modal>

      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        {
          error && <ErrorMessage title="An error occurred" message={error.message} onConfirm={handleError}/>
        }
        { !error && (

            <Places
              title="I'd like to visit ..."
              fallbackText="Select the places you would like to visit below."
              places={userPlaces}
              onSelectPlace={handleStartRemovePlace}
              loadingText="Fetching your places..."
              isLoading={isLoading}
            />
          )
        }

        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}

export default App;
