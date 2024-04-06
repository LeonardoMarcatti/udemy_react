import useFetchHook from '../../hooks/findEventHooks/useFetchHook'
import useContentHook from '../../hooks/findEventHooks/useContentHook';
import useSubmitHook from '../../hooks/findEventHooks/useSubmitHook';

export default function FindEventSection() {
  const {searchElement, data, isLoading, isError, error, setSearch} = useFetchHook()
  const handleSubmit = useSubmitHook(searchElement, setSearch)
  const {content} = useContentHook(error, data, isLoading, isError)

  return (
    <section className="content-section" id="all-events-section">
      <header>
        <h2>Find your next event!</h2>
        <form  id="search-form">
          <input
            type="search"
            placeholder="Search events"
            ref={searchElement}
            id='find'
          />
          <button type='button' onClick={handleSubmit}>Search</button>
        </form>
      </header>
      {content}
    </section>
  );
}