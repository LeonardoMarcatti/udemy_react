import { Link, useNavigate } from 'react-router-dom';
import {createNewEvent, queryClient} from '../../util/http.js'
import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import {useMutation} from '@tanstack/react-query' //useQuery é usado para pegar dados. Para enviar usamos useMutation
import ErrorBlock from '../UI/ErrorBlock.jsx';

export default function NewEvent() {
  const navigate = useNavigate();
  const {mutate, isPending, isError, error} = useMutation({
    mutationFn: createNewEvent,     
    onSuccess: () => {
      navigate('/events'), 
      queryClient.invalidateQueries({ //Necessário para reiniciar a função que recolhe os dados e atualiza a página
        queryKey: ['events']
      }) 
    }
  })

  const handleSubmit = (formData) => {
    mutate({event: formData})
  }

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