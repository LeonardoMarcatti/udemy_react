import {useState, useRef} from "react";
import { useQuery } from '@tanstack/react-query';
import { fetchEvents } from '../../util/http';

const useFetchHook = () => {
   const searchElement = useRef();
   const [search, setSearch] = useState(null)
   const {data, isLoading, isError, error } = useQuery({
      queryKey: ['events', {search}],
      queryFn: ({signal, queryKey}) => fetchEvents({signal, ...queryKey[1]}),
      enabled: search != null && search != '' // true|false Os dados somente são captados após algum termo ser digitado no input 
  })

  return {searchElement, data, isLoading, isError, error, setSearch}
}

export default useFetchHook