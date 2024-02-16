import classes from './EventsNavigation.module.css';
import {useRouteLoaderData} from 'react-router-dom'

const EventsNavigation = () => {
  const token = useRouteLoaderData('root')
  return (
    <div className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <a href="/events">All Events</a>
          </li>
          {
            token && <li>
              <a href="/events/new">New Event</a>
            </li>
          }
        </ul>
      </nav>
    </div>
  );
}

export default EventsNavigation;
