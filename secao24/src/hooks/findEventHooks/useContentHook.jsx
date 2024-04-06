import LoadingIndicator from '../../components/UI/LoadingIndicator';
import ErrorBlock from '../../components/UI/ErrorBlock';
import EventItem from '../../components/Events/EventItem';

const useContentHook = (error, data, isLoading, isError) => {
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

  return {content}
}

export default useContentHook