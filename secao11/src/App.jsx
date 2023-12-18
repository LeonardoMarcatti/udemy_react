import { useRef, useState, useEffect } from 'react';
import { sortPlacesByDistance } from './loc.js';
import Places from './components/Places.jsx';
import { AVAILABLE_PLACES } from './data.js';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';

function App() {
  
  const modal = useRef();
  const selectedPlace = useRef();
  const [pickedPlaces, setPickedPlaces] = useState([]);
  const [availablePlaces, setAvaliablePlaces] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(AVAILABLE_PLACES, position.coords.latitude, position.coords.longitude)
      setAvaliablePlaces(sortedPlaces)
    })
  }, [])

  function handleStartRemovePlace(id) {
    modal.current.open();
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    modal.current.close();
    selectedPlace.current = '';
  }

  function handleSelectPlace(id) {
    if (pickedPlaces.some((place) => place.id === id)) {
      return null;
    }
    setPickedPlaces((prevPickedPlaces) => {
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });

    const storedIDs = JSON.parse(localStorage.getItem('places')) || []
    if (storedIDs.indexOf(id) == -1) {
      localStorage.setItem('places', JSON.stringify([id, ...storedIDs]))
    }
  }

  function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    modal.current.close();
    const storedIDs = JSON.parse(localStorage.getItem('places'))
    const filteredIDs = storedIDs.filter(el => el != selectedPlace.current)
    localStorage.setItem('places', JSON.stringify(filteredIDs))
  }

  return (
    <>
      <Modal ref={modal}>
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
        <Places
          title="I'd like to visit ..."
          fallbackText={'Select the places you would like to visit below.'}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={AVAILABLE_PLACES}
          onSelectPlace={handleSelectPlace}
          fallbackText="Sorting places by distance..."
        />
      </main>
    </>
  );
}

export default App;
