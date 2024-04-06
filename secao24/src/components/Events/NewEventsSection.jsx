import { useQuery } from '@tanstack/react-query'
import {fetchEvents} from '../../util/http.js';
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import EventItem from './EventItem.jsx';

export default function NewEventsSection() {
  const {data, isPending, isError, error } = useQuery({queryKey: ['events', {max:3}], queryFn: ({signal, queryKey}) => fetchEvents({signal, ...queryKey[1]}), gcTime: 5*60*1000});
  /**
   * * Duas opções no objeto acima que podem ser adicionadas são gcTime que limpa o cache depois de um tempo e staleTime que faz a busca após um tempo
   */

  let content;

  if (isPending) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = (
      <ErrorBlock title="An error occurred" message={error.info  || 'General error'} />
    );
  }

  if (data) {
    content = (
      <ul className="events-list">
        {data.map((event) => (
          <li key={event.id}>
            <EventItem event={event} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section className="content-section" id="new-events-section">
      <header>
        <h2>Recently added events</h2>
      </header>
      {content}
    </section>
  );
}
