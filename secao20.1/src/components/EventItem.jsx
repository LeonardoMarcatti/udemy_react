import classes from './EventItem.module.css';
import { Link, useSubmit, useRouteLoaderData } from 'react-router-dom';

const EventItem = ({ event: {title, description, date, image} }) => {
  const submit = useSubmit()
  const token = useRouteLoaderData('root')
  const startDeleteHandler = () => {
    const response = window.confirm('Are you sure?')
    if (response) {
      submit(null, {method: 'delete'})
    }
  }

  return (
    <article className={classes.event}>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <time>{date}</time>
      <p>{description}</p>
      {
        token && <menu className={classes.actions}>
          <Link to="editEvent">Edit</Link>
          <button onClick={startDeleteHandler}>Delete</button>
        </menu>
      }
      
    </article>
  );
}

export default EventItem;
