import classes from './EventsNavigation.module.css';
import {useRouteLoaderData, Link} from 'react-router-dom'

const EventsNavigation = () => {
  const token = useRouteLoaderData('root')
  return (
    <div className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <Link to="/events">All Events</Link>
          </li>
          {
            token && <li>
              <Link to="/events/new">New Event</Link>
            </li>
          }
        </ul>
      </nav>
    </div>
  );
}

export default EventsNavigation;
