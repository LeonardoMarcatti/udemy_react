import { useParams, redirect, useSubmit, useNavigation } from 'react-router-dom';
import Modal from '../UI/Modal.jsx';
import useFetchDetails from '../../hooks/eventDetaisHooks/useFetchDetails.jsx';
import useContentHook from '../../hooks/editEventsHooks/useContentHook.jsx';
import useSubmitHook from '../../hooks/editEventsHooks/useSubmitHook.jsx';
import { queryClient, fetchEvent, updateEvent } from '../../util/http.js';

export default function EditEvent() {
  const params = useParams()
  const submit = useSubmit()
  const {state} = useNavigation()
  const {handleClose, handleSubmit} = useSubmitHook(params, submit)
  
  const {data} = useFetchDetails(params.id)
  const content = useContentHook(data, handleSubmit, state)
  

  return <Modal onClose={handleClose}>{content}</Modal>
}

//Abaixo uma abordagem alternativa com vantagens e desvantagens

const loader = ({params}) => {
  return queryClient.fetchQuery({
    queryKey: ['events', params.id],
    queryFn: ({signal}) => fetchEvent({id: params.id, signal})
  })
}

const action = async ({request, params}) => {
  const formData = await request.formData()
  const updatedData = Object.fromEntries(formData)
  await updateEvent({id: params.id, event: updatedData})
  await queryClient.invalidateQueries(['events'])
  return redirect('../')
}

export {loader, action}