import { Link } from 'react-router-dom';
import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import useMutationHook from '../../hooks/newEventHooks/useMutationHook.jsx';
import useSubmitHook from '../../hooks/newEventHooks/useSubmitHook.jsx';

export default function NewEvent() {
  const {mutate, isPending, isError, error} = useMutationHook()
  const handleSubmit = useSubmitHook(mutate)

  return (
    <Modal onClose={() => navigate('../')}>
      <EventForm onSubmit={handleSubmit}>
        {isPending && 'Submitting...'}
        {!isPending && 
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Create
            </button>
          </>
        }        
      </EventForm>
      {
        isError && <ErrorBlock title="Error" message={error.info?.message || 'An error occurred'}/>
      }
    </Modal>
  );
}