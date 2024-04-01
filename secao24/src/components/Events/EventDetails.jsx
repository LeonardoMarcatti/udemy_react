import { Link, Outlet, useParams, useNavigate } from 'react-router-dom';
import Header from '../Header.jsx';
import {useQuery, useMutation} from '@tanstack/react-query'
import {fetchEvent, deleteEvent, queryClient} from '../../util/http.js'
import ErrorBlock from '../UI/ErrorBlock.jsx';
import Modal from '../UI/Modal.jsx';
import React, {useState}from 'react'

export default function EventDetails() {
  const [deleting, setDeleting] = useState(false)
  const navigate = useNavigate()
  const params = useParams()
  const id = params.id
  const {data, isPending, isError, error } = useQuery({
    queryKey: ['events', id],
    //signal é um objeto que é automaticamente recebido pela função
    queryFn: ({signal}) => fetchEvent({id, signal}), enabled: id != null 
  })


  const {mutate} = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      navigate('/events'), 
      queryClient.invalidateQueries({
        queryKey: ['events'],
        refetchType: 'none'
      }) 
    }
  })

  const handleDelete = () => mutate({id})
  const showModal = () => setDeleting(true)
  const hideModal = () => setDeleting(false)

  return (
    <>
    {
      deleting && <Modal onClose={hideModal}>
        <h2>Are you sure?</h2>
        <h3>This cannot be undone</h3>
        <p>The event will be deleted</p>
        <div className='form-actions'>
          <button type="button" onClick={hideModal} className='button-text'>Cancel</button>
          <button type="button" onClick={handleDelete} className='button'>Delete</button>
        </div>
      </Modal>
    }
      
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      {
        isPending && <div id='event-details-content' className='center'><h2>Loading...</h2></div>
      }
      {
        data && <article id="event-details">
          <header>
            <h1>{data.title}</h1>
            <nav>
              <button type='button' onClick={showModal}>Delete</button>
              <Link to="edit">Edit</Link>
            </nav>
          </header>
          <div id="event-details-content">
            <img src={`http://localhost:3000/${data.image}`} alt={data.title} />
            <div id="event-details-info">
              <div>
                <p id="event-details-location">{data.location}</p>
                <time dateTime={`Todo-DateT$Todo-Time`}>{`${data.date} - ${data.time}`}</time>
              </div>
              <p id="event-details-description">{data.description}</p>
            </div>
          </div>
        </article>
      }

      {
        isError && <div id='event-details-content' className='center'>
          <ErrorBlock title="Error" message={error.info?.message || 'Try again later'}/>
        </div>
      }
      
    </>
  );
}
