import EventForm from '../../components/Events/EventForm.jsx';
import { Link } from 'react-router-dom';

const useContentHook = (data, handleSubmit, state) => {
  if (data) {
    return state == 'submitting' ? <h3>Sending data...</h3> : 
      <EventForm inputData={data} onSubmit={handleSubmit}>
        <Link to="../" className="button-text">
          Cancel
        </Link>
        <button type="submit" className="button">
          Update
        </button>
      </EventForm>
  }
}

export default useContentHook
