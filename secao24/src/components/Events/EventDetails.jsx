import { Link, Outlet, useParams} from 'react-router-dom';
import Header from '../Header.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import Modal from '../UI/Modal.jsx';
import React from 'react'
import useFetchDetails from '../../hooks/eventDetaisHooks/useFetchDetails.jsx';
import useUpdateDetails from '../../hooks/eventDetaisHooks/useUpdateDetails.jsx';
import useStateDetails from '../../hooks/eventDetaisHooks/useStateDetails.jsx';
import useFormatDateHook from '../../hooks/eventDetaisHooks/useFormatDateHook.jsx';

export default function EventDetails() {
  const {showModal, hideModal, deleting} = useStateDetails()
  const params = useParams()
  const id = params.id
  const {data, isPending, isError, error} = useFetchDetails(id)
  const {mutate, isDeleting, errorDeleting, deleteError} = useUpdateDetails()
  const handleDelete = () => mutate({id})


  return (
    <>
    {
      deleting && <Modal onClose={hideModal}>
        <h2>Are you sure?</h2>
        <h3>This cannot be undone</h3>
        <p>The event will be deleted</p>
        <div className='form-actions'>
          {
            isDeleting && <p>Deleting</p>
          }
          {
            !isDeleting && <>
              <button type="button" onClick={hideModal} className='button-text'>Cancel</button>
              <button type="button" onClick={handleDelete} className='button'>Delete</button>
            </>
          }

          { 
            errorDeleting && <ErrorBlock title="Failed to delete event" message={deleteError.info?.message || 'Failed'} />
          }
          
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
                <time dateTime={`Todo-DateT$Todo-Time`}>{`${useFormatDateHook(data.date)} - ${data.time}`}</time>
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
