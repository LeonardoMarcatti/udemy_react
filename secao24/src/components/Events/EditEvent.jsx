import { Link, useNavigate, useParams } from 'react-router-dom';
import {useMutation} from '@tanstack/react-query'
import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import {updateEvent} from '../../util/http.js'

export default function EditEvent() {
  const navigate = useNavigate();
  const params = useParams()
  const mutation = useMutation()



  function handleSubmit(formData) {}

  function handleClose() {
    navigate('../');
  }

  return (
    <Modal onClose={handleClose}>
      <EventForm inputData={null} onSubmit={handleSubmit}>
        <Link to="../" className="button-text">
          Cancel
        </Link>
        <button type="submit" className="button">
          Update
        </button>
      </EventForm>
    </Modal>
  );
}
