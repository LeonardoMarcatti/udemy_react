import { useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchEvents } from '../../util/http';
import LoadingIndicator from '../UI/LoadingIndicator';
import ErrorBlock from '../UI/ErrorBlock';
import EventItem from './EventItem';

export default function FindEventSection() {
  const searchElement = useRef();
  const [search, setSearch] = useState(null)
  const {data, isLoading, isError, error } = useQuery({queryKey: ['events', {search}], queryFn: ({signal}) => fetchEvents({signal, search}), enabled: search != null })

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(searchElement.current.value)
  }

  let content = <p>Please enter a value</p>

  if (isLoading) {
    content = <LoadingIndicator />
  }

  if (isError) {
    content = <ErrorBlock title="An error occurred" message={error.info?.message || 'Failed to fetch data'}/>
  }

  if (data) {
    content = <ul>
      {
        data.map(el => <li key={el.id}><EventItem event={el}/></li>)
      }
    </ul>
    
  }

  return (
    <section className="content-section" id="all-events-section">
      <header>
        <h2>Find your next event!</h2>
        <form onSubmit={handleSubmit} id="search-form">
          <input
            type="search"
            placeholder="Search events"
            ref={searchElement}
          />
          <button>Search</button>
        </form>
      </header>
      {content}
    </section>
  );
}
